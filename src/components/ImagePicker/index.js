import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import {
  requestCameraPermission,
  requestStoragePermission,
} from '../../utils/Permissions';

const ImagePickerComponent = () => {
  const [avatar, setAvatar] = useState(null);

  const handleChooseAvatar = async () => {
    // Request camera and storage permissions
    const cameraPermission = await requestCameraPermission();
    const storagePermission = await requestStoragePermission();

    // Check if camera and storage permissions granted
    if (cameraPermission === 'granted' && storagePermission === 'granted') {
      const options = {
        noData: true,
      };
      ImagePicker.launchImageLibrary(options, response => {
        if (response.uri) {
          setAvatar(response);
        }
      });
    } else {
      console.log('Permissions not granted');
    }
  };

  return (
    <View>
      <TouchableOpacity onPress={handleChooseAvatar}>
        {avatar ? (
          <Image source={{uri: avatar.uri}} style={{height: 100, width: 100}} />
        ) : (
          <Text>Select a Profile Picture</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default ImagePickerComponent;
