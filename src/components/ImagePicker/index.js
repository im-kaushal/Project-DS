import React, {useState} from 'react';
import {
  View,
  Image,
  PermissionsAndroid,
  TouchableWithoutFeedback,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import Button from '../Button';

const ImagePickerComponent = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Camera Permission',
          message: 'App needs camera permission',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Camera permission granted');
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const handleImageUpload = () => {
    if (Platform.OS === 'android') {
      PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.CAMERA).then(
        response => {
          if (response === true) {
            console.log('Camera permission already granted');
          } else {
            requestCameraPermission();
          }
        },
      );
    }

    const options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        setSelectedImage(response.uri);
      }
    });
  };

  const handleCameraPicker = () => {
    if (Platform.OS === 'android') {
      PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.CAMERA).then(
        response => {
          if (response === true) {
            console.log('Camera permission already granted');
          } else {
            requestCameraPermission();
          }
        },
      );
    }

    const options = {
      title: 'Take Picture',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.launchCamera(options, response => {
      if (response.didCancel) {
        console.log('User cancelled camera picker');
      } else if (response.error) {
        console.log('CameraPicker Error: ', response.error);
      } else {
        setSelectedImage(response.uri);
      }
    });
  };

  return (
    <View style={{alignItems: 'center'}}>
      <TouchableWithoutFeedback onPress={handleImageUpload}>
        {/* {selectedImage ? (
          <Image
            source={{uri: selectedImage}}
            style={{width: 200, height: 200}}
          />
        ) : (
          <Image
            source={require('../../assets/images/avatar')}
            style={{width: 200, height: 200}}
          />
        )} */}
      </TouchableWithoutFeedback>
      <Button onPress={handleImageUpload}>Select Image</Button>
      <Button onPress={handleCameraPicker}>Take Picture</Button>
    </View>
  );
};

export default ImagePickerComponent;
