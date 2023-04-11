import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import styles from '../../constants/styles';
import {useSelector} from 'react-redux';

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

  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <ImageBackground
          source={require('../../assets/images/texture.jpg')}
          style={styles.imgDrawer}>
          <Image
            source={require('../../assets/images/avatar.jpg')}
            style={styles.avatar}
          />
          <Text style={styles.user}>{myName.data[0].Name}</Text>
        </ImageBackground>
        <View style={styles.list}>
          <DrawerItemList {...props} />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleLogout}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawer;