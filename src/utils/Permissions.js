import {Platform} from 'react-native';
import {check, PERMISSIONS, request, RESULTS} from 'react-native-permissions';

const checkPermission = async permissionType => {
  let permission;

  if (Platform.OS === 'android') {
    permission = PERMISSIONS.ANDROID[permissionType];
  } else if (Platform.OS === 'ios') {
    permission = PERMISSIONS.IOS[permissionType];
  }

  const result = await check(permission);

  switch (result) {
    case RESULTS.UNAVAILABLE:
      console.log(
        'This feature is not available (on this device / in this context)',
      );
      break;
    case RESULTS.DENIED:
      console.log(
        'The permission has not been requested / is denied but requestable',
      );
      return requestPermission(permission);
    case RESULTS.GRANTED:
      console.log('The permission is granted');
      break;
    case RESULTS.BLOCKED:
      console.log('The permission is denied and not requestable anymore');
      break;
  }
};

const requestPermission = async permission => {
  const result = await request(permission);
  return result;
};

export const requestCameraPermission = async () => {
  await checkPermission('CAMERA');
};

export const requestStoragePermission = async () => {
  await checkPermission('WRITE_EXTERNAL_STORAGE');
};

export const requestLocationPermission = async () => {
  await checkPermission('ACCESS_FINE_LOCATION');
};

export const requestNotificationPermission = async () => {
  await checkPermission('NOTIFICATIONS');
};
