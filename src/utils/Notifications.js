import messaging from '@react-native-firebase/messaging';

import Strings from '../constants/Strings';

export const sendCheckoutNotification = async () => {
  try {
    // Get the FCM token for the device
    const token = await messaging().getToken();

    // Send a notification with the FCM token
    const response = await fetch('https://fcm.googleapis.com/fcm/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `key=${Strings.FCM_SERVER_KEY}`,
      },
      body: JSON.stringify({
        to: token,
        notification: {
          title: 'Checkout successful',
          body: 'Your order has been placed',
        },
      }),
    });

    console.log('Notification sent:', response);
  } catch (error) {
    console.log('Error sending notification:', error);
  }
};

// ------------------------------------------------------------------------------------------------------
// import messaging from '@react-native-firebase/messaging';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// export async function requestUserPermission() {
//   const authStatus = await messaging().requestPermission();
//   const enabled =
//     authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
//     authStatus === messaging.AuthorizationStatus.PROVISIONAL;

//   if (enabled) {
//     console.log('Authorization status:', authStatus);
//     getFcmToken();
//   }
// }

// const getFcmToken = async () => {
//   let fcmToken = await AsyncStorage.getItem('fcmToken');
//   console.log('the old token', fcmToken);
//   if (!fcmToken) {
//     // eslint-disable-next-line no-shadow
//     const fcmToken = await messaging().getToken();
//     try {
//       if (fcmToken) {
//         console.log('New Genrated token:', fcmToken);
//         await AsyncStorage.setItem('fcmToken', fcmToken);
//       }
//     } catch (error) {
//       console.log('Error while getting FcmToken: ', error);
//     }
//   }
// };

// export const notificationListener = async () => {
//   messaging().onNotificationOpenedApp(remoteMessage => {
//     console.log(
//       'Notification caused app to open from background state:',
//       remoteMessage.notification,
//     );
//   });
//   messaging().onMessage(async remoteMessage => {
//     console.log('Received message from background state:', remoteMessage);
//   });
//   messaging()
//     .getInitialNotification()
//     .then(remoteMessage => {
//       if (remoteMessage) {
//         console.log(
//           'Notification caused app to open from quit state:',
//           remoteMessage.notification,
//         );
//       }
//     });
// };
