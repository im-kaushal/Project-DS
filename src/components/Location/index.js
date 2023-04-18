import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import Styles from './styles.index';
import CustomIcon from '../Icon';
import Colors from '../../constants/Colors';
const LocationComponent = ({navigation}) => {
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
    <View>
      <TouchableOpacity style={Styles.icon} onPress={navigation.goBack}>
        <CustomIcon name="chevron-left" size={25} color={Colors.primary} />
      </TouchableOpacity>

      <View style={Styles.container}>
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
