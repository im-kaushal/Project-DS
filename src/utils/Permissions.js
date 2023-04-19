import {Platform} from 'react-native';
import {check, PERMISSIONS, request} from 'react-native-permissions';

export const requestCameraPermission = async () => {
  const permission =
    Platform.OS === 'android'
      ? PERMISSIONS.ANDROID.CAMERA
      : PERMISSIONS.IOS.CAMERA;
  const status = await check(permission);
  if (status === 'denied') {
    const result = await request(permission);
    return result;
  }
  return status;
};

export const requestStoragePermission = async () => {
  const permission =
    Platform.OS === 'android'
      ? PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE
      : PERMISSIONS.IOS.PHOTO_LIBRARY;
  const status = await check(permission);
  if (status === 'denied') {
    const result = await request(permission);
    return result;
  }
  return status;
};
