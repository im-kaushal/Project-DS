import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {localImgs} from '../../constants/Paths';
import {useTranslation} from 'react-i18next';
import styles from '../../constants/styles';

const CustomDrawer = props => {
  const [userName, setUserName] = useState('Kaushal');
  const navigation = useNavigation();

  const myName = useSelector(state => state.user.data[0]?.Name);
  console.log('🚀 ~ CustomDrawer ~ myName:', myName);

  useEffect(() => {
    if (myName) {
      setUserName(myName);
    }
  }, [myName]);

  const handleLogout = async () => {
    await AsyncStorage.clear();
    navigation.navigate('LoginScreen');
  };

  const {t} = useTranslation();

  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <ImageBackground source={localImgs.texture} style={styles.imgDrawer}>
          <Image source={localImgs.avatar} style={styles.avatar} />
          <Text style={styles.user}>Hey, {userName}!</Text>
        </ImageBackground>
        <View style={styles.list}>
          <DrawerItemList {...props} />
        </View>
        <TouchableOpacity onPress={handleLogout}>
          <Text style={styles.button}>{t('logout')}</Text>
        </TouchableOpacity>
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawer;
