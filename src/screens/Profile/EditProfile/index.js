import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  Alert,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import styles from './index.styles';
import {updateUserDetails} from '../../../redux/LoginSlice';
import CustomButton from '../../../components/Button';
import CustomIcon from '../../../components/Icon';
import {localImgs} from '../../../constants/Images';
import ImagePicker from 'react-native-image-crop-picker';
import Colors from '../../../constants/Colors';
import Input from '../../../components/Input';

const EditProfileScreen = () => {
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [Email, setEmail] = useState('');
  const [Contact, setContact] = useState('');
  const [City, setCity] = useState('');

  const [image, setImage] = useState('');
  const userData = useSelector(state => state.user);

  const dispatch = useDispatch();

  const takePhotoFromCamera = async () => {
    ImagePicker.openCamera({
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      setImage(image.path);
    });
  };

  const choosePhotoFromLibrary = async () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      setImage(image.path);
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
      <ScrollView contentContainerStyle={styles.scrollViewContentContainer}>
        <View style={styles.imageContainer}>
          <TouchableOpacity
            onPress={choosePhotoFromLibrary}
            style={styles.imageContainer}>
            {userData.image ? (
              <Image style={styles.image} source={{uri: image}} />
            ) : (
              <Image
                style={styles.imagePlaceholder}
                source={localImgs.avatar}
              />
            )}
          </TouchableOpacity>
          <TouchableOpacity onPress={takePhotoFromCamera}>
            <CustomIcon name="camera" size={15} color={Colors.primary} />
          </TouchableOpacity>
        </View>

        <View style={styles.container}>
          <View style={styles.socialContainer}>
            <Text style={styles.socialHeading}>Edit Your Profile</Text>
          </View>
          <Input
            value={FirstName}
            onChangeText={setFirstName}
            placeholder="First Name"
          />

          <Input
            value={LastName}
            onChangeText={setLastName}
            placeholder="Last Name"
          />

          <Input
            value={Contact}
            onChangeText={setContact}
            placeholder="Contact Number"
          />
          <Input value={Email} onChangeText={setEmail} placeholder="Email" />

          <Input value={City} onChangeText={setCity} placeholder="Address" />
        </View>

        <CustomButton
          newStyle={{width: 100, alignSelf: 'center'}}
          onPress={handleSubmit}
          text="Save"
          icon="edit"
        />
      </ScrollView>
    </View>
  );
};

export default EditProfileScreen;
