// import React, {useState} from 'react';
// import ImagePicker from 'react-native-image-crop-picker';

// export const takePhotoFromCamera = async () => {
//   const [image, setImage] = useState();
//   ImagePicker.openCamera({
//     compressImageMaxWidth: 300,
//     compressImageMaxHeight: 400,
//     cropping: true,
//   }).then(image => {
//     console.log(image);
//     setImage(image.path);
//   });
// };

// export const choosePhotoFromLibrary = async () => {
//   const [image, setImage] = useState();
//   ImagePicker.openPicker({
//     width: 300,
//     height: 400,
//     cropping: true,
//   }).then(image => {
//     console.log(image);
//     setImage(image.path);
//   });
// };
