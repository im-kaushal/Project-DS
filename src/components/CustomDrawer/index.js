import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
//import Strings from '../../constants/lng/LocalizedStrings';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import {useNavigation} from '@react-navigation/native';
import styles from '../../constants/styles';
import {useSelector} from 'react-redux';
import Strings from '../../constants/Strings';
import {localImgs} from '../../constants/Images';
import {Storage} from '../../utils/Storage';
///-----------------
//import {setLng, getLng} from '../../utils/helper/changeLng';

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
    navigation.navigate('AuthStack', {screen: 'LoginScreen'});
  };
  // ------------------------------
  // const onChangeLng = async lng => {
  //   if (lng === 'en') {
  //     await I18nManager.forceRTL(false);
  //     setLng('en');
  //     RNRestart.Restart();
  //     return;
  //   }
  //   if (lng === 'hi') {
  //     await I18nManager.forceRTL(false);
  //     setLng('hi');
  //     RNRestart.Restart();
  //     return;
  //   }
  // };
  // useEffect(() => {
  //   selectedLng();
  // }, []);

  // const selectedLng = async () => {
  //   const lngData = await getLng();
  //   if (!!lngData) {
  //     Strings.setLanguage(lngData);
  //   }
  //   console.log('selected Language data==>>>', lngData);
  // };

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
        <TouchableOpacity style={styles.button} onPress={handleLogout}>
          <Text style={styles.buttonText}>{Strings.logout}</Text>
        </TouchableOpacity>
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawer;
