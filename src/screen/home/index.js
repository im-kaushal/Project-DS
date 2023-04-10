import React, {useEffect} from 'react';
import {Text, View, BackHandler} from 'react-native';
import styles from './index.styles';

import Strings from '../../statics/Strings';
import HomeImg from '../../assets/svg/HomeImg';

const Home = () => {
  //back handling
  useEffect(() => {
    const backAction = () => {
      BackHandler.exitApp();
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <HomeImg style={styles.headerImage} />
        <Text style={styles.title}>EcomExpress✨</Text>
        <Text style={styles.subtitle}>{Strings.Description} </Text>
      </View>
    </View>
  );
};

export default Home;
