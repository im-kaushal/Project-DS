import React, {useState} from 'react';
import ImagePicker from 'react-native-image-crop-picker';

export default ImagePickerComponent = () => {
  const [image, setImage] = useState();

  const checkCameraAndStoragePermissions = async () => {
    const cameraPermission = await requestCameraPermission();
    const storagePermission = await requestStoragePermission();

    if (cameraPermission === 'granted' && storagePermission === 'granted') {
      return true;
    } else {
      console.log('Permissions not granted');
      return false;
    }
  };
};
export const takePhotoFromCamera = async () => {
  ImagePicker.openCamera({
    compressImageMaxWidth: 300,
    compressImageMaxHeight: 400,
    cropping: true,
  }).then(image => {
    console.log(image);
    setImage(image.path);
  });
};

export const choosePhotoFromLibrary = async () => {
  ImagePicker.openPicker({
    width: 300,
    height: 400,
    cropping: true,
  }).then(image => {
    console.log(image);
    setImage(image.path);
  });
};
