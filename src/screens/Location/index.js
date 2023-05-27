import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import Styles from './styles.index';
import {useTranslation} from 'react-i18next';
import Back from '../../components/Back';

const LocationComponent = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const {t} = useTranslation();
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
        <Text style={Styles.title}>{t('current_location')}</Text>
        {latitude && longitude ? (
          <Text style={Styles.location}>
            {t(' latitude')} {latitude.toFixed(4)}, {t(' longitude')}
            {longitude.toFixed(4)}
          </Text>
        ) : (
          <Text style={Styles.loading}>{t('loading')}</Text>
        )}
      </View>
    </View>
  );
};

export default LocationComponent;
