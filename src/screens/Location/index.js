import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import Styles from './styles.index';

import Back from '../../components/Back';

const LocationComponent = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      },
      error => console.log(error),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  }, []);

  return (
    <View style={Styles.container}>
      <Back />
      <View style={Styles.items}>
        <Text style={Styles.title}>Current Location:</Text>
        {latitude && longitude ? (
          <Text style={Styles.location}>
            Latitude: {latitude.toFixed(4)}, Longitude: {longitude.toFixed(4)}
          </Text>
        ) : (
          <Text style={Styles.loading}>Loading...</Text>
        )}
      </View>
    </View>
  );
};

export default LocationComponent;
