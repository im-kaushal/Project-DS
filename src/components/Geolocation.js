import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Geolocation from '@react-native-community/geolocation';
import {colors} from '../assets/Colors';

const Location = () => {
  const [longitude, setLongitude] = useState(0);
  const [latitude, setLatitude] = useState(0);
  Geolocation.getCurrentPosition(
    data =>
      setLongitude(data.coords.longitude) & setLatitude(data.coords.latitude),
  );
  return (
    <View style={styles.container}>
      <Text>Your Longitude is: {longitude} </Text>
      <Text> Your Latitude is: {latitude} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg_light,
    justifyContent: 'center',
  },
});

export default Location;
