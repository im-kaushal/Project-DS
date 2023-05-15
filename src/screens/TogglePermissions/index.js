import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {check, PERMISSIONS, request, RESULTS} from 'react-native-permissions';
import SwitchToggle from 'react-native-switch-toggle';
import styles from './index.styles';
import Back from '../../components/Back';
import Colors from '../../constants/Colors';

const Toggle = () => {
  const cameraPermission =
    Platform.OS === 'ios' ? PERMISSIONS.IOS.CAMERA : PERMISSIONS.ANDROID.CAMERA;
  const locationPermission =
    Platform.OS === 'ios'
      ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
      : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION;
  const notificationPermission =
    Platform.OS === 'ios'
      ? PERMISSIONS.IOS.NOTIFICATIONS
      : PERMISSIONS.ANDROID.POST_NOTIFICATIONS;

  //Define the state variables for the permission toggles and their corresponding permissions
  const [cameraPermissionGranted, setCameraPermissionGranted] = useState(false);
  const [cameraToggle, setCameraToggle] = useState(false);
  const [locationPermissionGranted, setLocationPermissionGranted] =
    useState(false);
  const [locationToggle, setLocationToggle] = useState(false);
  const [notificationPermissionGranted, setNotificationPermissionGranted] =
    useState(false);
  const [notificationToggle, setNotificationToggle] = useState(false);

  useEffect(() => {
    check(cameraPermission)
      .then(result => {
        setCameraPermissionGranted(result === RESULTS.GRANTED);
        setCameraToggle(result === RESULTS.GRANTED);
      })
      .catch(error => console.log(error));

    check(locationPermission)
      .then(result => {
        setLocationPermissionGranted(result === RESULTS.GRANTED);
        setLocationToggle(result === RESULTS.GRANTED);
      })
      .catch(error => console.log(error));

    check(notificationPermission)
      .then(result => {
        setNotificationPermissionGranted(result === RESULTS.GRANTED);
        setNotificationToggle(result === RESULTS.GRANTED);
      })
      .catch(error => console.log(error));
  }, []);

  //Handle the toggle events for each permission toggle

  const handleCameraToggle = async () => {
    if (cameraPermissionGranted) {
      setCameraPermissionGranted(false);
      setCameraToggle(false);
    } else {
      const result = await request(cameraPermission);
      setCameraPermissionGranted(result === RESULTS.GRANTED);
      setCameraToggle(result === RESULTS.GRANTED);
    }
  };

  const handleLocationToggle = async () => {
    if (locationPermissionGranted) {
      setLocationPermissionGranted(false);
      setLocationToggle(false);
    } else {
      const result = await request(locationPermission);
      setLocationPermissionGranted(result === RESULTS.GRANTED);
      setLocationToggle(result === RESULTS.GRANTED);
    }
  };

  const handleNotificationToggle = async () => {
    if (notificationPermissionGranted) {
      setNotificationPermissionGranted(false);
      setNotificationToggle(false);
    } else {
      const result = await request(notificationPermission);
      setNotificationPermissionGranted(result === RESULTS.GRANTED);
      setNotificationToggle(result === RESULTS.GRANTED);
    }
  };

  //Finally, we can render the UI with the permission toggles and their corresponding state variables

  return (
    <>
      <Back />
      <View style={styles.container}>
        <Text style={styles.header}>Permissions</Text>
        <View style={styles.permissionContainer}>
          <Text style={styles.permissionText}>Camera</Text>
          <SwitchToggle
            switchOn={cameraToggle}
            onPress={handleCameraToggle}
            backgroundColorOn={Colors.success}
            backgroundColorOff={Colors.primary}
            circleColorOff={Colors.text}
            circleColorOn={Colors.background}
            duration={500}
          />
        </View>
        <View style={styles.permissionContainer}>
          <Text style={styles.permissionText}>Location</Text>
          <SwitchToggle
            switchOn={locationToggle}
            onPress={handleLocationToggle}
            backgroundColorOn={Colors.success}
            backgroundColorOff={Colors.primary}
            circleColorOff={Colors.text}
            circleColorOn={Colors.background}
            duration={500}
          />
        </View>
        <View style={styles.permissionContainer}>
          <Text style={styles.permissionText}>Notifications</Text>
          <SwitchToggle
            switchOn={notificationToggle}
            onPress={handleNotificationToggle}
            backgroundColorOn={Colors.success}
            backgroundColorOff={Colors.primary}
            circleColorOff={Colors.text}
            circleColorOn={Colors.background}
            duration={500}
          />
        </View>
      </View>
    </>
  );
};

export default Toggle;
