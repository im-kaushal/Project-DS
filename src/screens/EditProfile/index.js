import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Alert, View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './index.styles';
import {updateUserDetails} from '../../redux/LoginSlice';
import CustomButton from '../../components/Button';
import CustomIcon from '../../components/Icon';
import {webImgs} from '../../constants/Images';
import ImagePicker from 'react-native-image-crop-picker';
import Colors from '../../constants/Colors';
import Input from '../../components/Input';
import Back from '../../components/Back';
import {useTranslation} from 'react-i18next';
import RNFetchBlob from 'rn-fetch-blob';

const EditProfileScreen = ({navigation}) => {
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [Email, setEmail] = useState('');
  const [Contact, setContact] = useState('');
  const [City, setCity] = useState('');
  const [image, setImage] = useState(webImgs.avatar);
  const {t} = useTranslation();

  const dispatch = useDispatch();

  const takePhotoFromCamera = async () => {
    ImagePicker.openCamera({
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      const dirs = RNFetchBlob.fs.dirs;
      const imagePath = `${dirs.DocumentDir}/${image.filename}`;
      RNFetchBlob.fs
        .writeFile(imagePath, image.data, 'base64')
        .then(() => {
          setImage(imagePath);
        })
        .catch(error => {
          console.log(error);
        });
    });
  };

  const choosePhotoFromLibrary = async () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      RNFetchBlob.fs
        .writeFile(
          `${RNFetchBlob.fs.dirs.CacheDir}/${image.filename}`,
          image.data,
          'base64',
        )
        .then(() => {
          setImage(`${RNFetchBlob.fs.dirs.CacheDir}/${image.filename}`);
        });
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
    Alert.alert('Profile Updated Successfully!!');

    console.log(FirstName, LastName, Email, Contact, City);
  };

  return (
    <View style={styles.container}>
      <Back />
      {/* <ScrollView contentContainerStyle={styles.scrollViewContentContainer}> */}
      <View style={styles.imageContainer}>
        <TouchableOpacity
          onPress={choosePhotoFromLibrary}
          style={styles.imageContainer}>
          <Image style={styles.image} source={{uri: image}} />
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
        <Input value={Email} onChangeText={setEmail} placeholder={t('email')} />

        <Input value={City} onChangeText={setCity} placeholder={t('address')} />
      </View>
      <CustomButton
        newStyle={styles.btn}
        onPress={handleSubmit}
        text="Save"
        icon="edit"
      />
      {/* </ScrollView> */}
    </View>
  );
};

export default EditProfileScreen;
