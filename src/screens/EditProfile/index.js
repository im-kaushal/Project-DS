import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  Alert,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import styles from './index.styles';
import {updateUserDetails} from '../../redux/LoginSlice';
import CustomButton from '../../components/Button';
import CustomIcon from '../../components/Icon';
import {ProfileImage} from '../../redux/profileSlice';
import ImagePicker from 'react-native-image-crop-picker';
import Colors from '../../constants/Colors';
import Input from '../../components/Input';
import {localImgs} from '../../constants/Paths';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {useTranslation} from 'react-i18next';
import Header from '../../components/Header';
const EditProfileScreen = ({navigation}) => {
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [Email, setEmail] = useState('');
  const [Contact, setContact] = useState('');
  const [City, setCity] = useState('');
  const [image, setImage] = useState(localImgs.avatar);
  const {t} = useTranslation();

  const dispatch = useDispatch();

  useEffect(() => {
    retrieveProfileData();
  }, []);

  const storeProfileData = async () => {
    try {
      const profileData = JSON.stringify({
        image,
      });
      await AsyncStorage.setItem('profileData', profileData);
      Alert.alert(t('updated_profile_alert'));
    } catch (error) {
      console.log('Error storing profile data:', error);
    }
  };

  const retrieveProfileData = async () => {
    try {
      const storedProfileData = await AsyncStorage.getItem('profileData');
      if (storedProfileData) {
        const {image: storedImage} = JSON.parse(storedProfileData);
        setImage(storedImage);
      }
    } catch (error) {
      console.log('Error retrieving profile data:', error);
    }
  };

  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      setImage({uri: image.path});
      dispatch(ProfileImage(image.path));
    });
  };

  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      setImage({uri: image.path});
      dispatch(ProfileImage(image.path));
    });
  };

  const handleSubmit = () => {
    dispatch(
      updateUserDetails({
        firstName: FirstName,
        lastName: LastName,
        email: Email,
        contactNumber: Contact,
        city: City,
      }),
    );
    storeProfileData();
    console.log(FirstName, LastName, Email, Contact, City);
  };

  return (
    <View style={styles.container}>
      <Header showBellIcon={true} showHeartIcon={false} />
      <ScrollView>
        <View style={styles.imageContainer}>
          <TouchableOpacity
            onPress={choosePhotoFromLibrary}
            style={styles.imageContainer}>
            <Image style={styles.image} source={image} />
          </TouchableOpacity>
          <TouchableOpacity onPress={takePhotoFromCamera}>
            <CustomIcon name="camera" size={15} color={Colors.primary} />
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          <Text style={styles.title}>{t('edit_profile')}</Text>

          <Input
            value={FirstName}
            onChangeText={setFirstName}
            placeholder={t('first_name')}
          />

          <Input
            value={LastName}
            onChangeText={setLastName}
            placeholder={t('last_name')}
          />

          <Input
            value={Contact}
            onChangeText={setContact}
            placeholder={t('contact_number_placeholder')}
          />
          <Input
            value={Email}
            onChangeText={setEmail}
            placeholder={t('email')}
          />

          <Input
            value={City}
            onChangeText={setCity}
            placeholder={t('address')}
          />
        </View>
        <CustomButton
          newStyle={styles.btn}
          onPress={handleSubmit}
          text="Save"
          icon="edit"
        />
      </ScrollView>
    </View>
  );
};

export default EditProfileScreen;
