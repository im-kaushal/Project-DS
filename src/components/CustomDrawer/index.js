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
import styles from '../../constants/styles';
import {useSelector} from 'react-redux';

import {localImgs} from '../../constants/Images';

///-----------------
import {useTranslation} from 'react-i18next';

const CustomDrawer = props => {
  const [userName, setUserName] = useState();
  const navigation = useNavigation();
  useEffect(() => {
    getUserData();
  }, []);

  const myName = useSelector(state => state.user);

  const getUserData = async () => {
    const name = await AsyncStorage.getItem('userName');
    setUserName(name);
  };

  const handleLogout = async () => {
    await AsyncStorage.clear();
    navigation.navigate('LoginScreen');
  };
  ////////////////
  const {t} = useTranslation();

  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <ImageBackground source={localImgs.texture} style={styles.imgDrawer}>
          <Image source={localImgs.avatar} style={styles.avatar} />
          {/* <Text style={styles.user}>{Storage.getData(firstName)}</Text> */}
          <Text></Text>
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
