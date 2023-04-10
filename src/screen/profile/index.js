import {Text, TouchableOpacity, View, Image, Linking} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import styles from './index.styles';
import Strings from '../../statics/Strings';
import {webImgs} from '../../statics/Images';
const Profile = () => {
  const myName = useSelector(state => state.user);
  return (
    <View style={styles.aboutContainer}>
      <View>
        <Image style={styles.imgStyle} source={{uri: webImgs.avatar}} />
      </View>

      <Text style={styles.mainHeader}>{myName.data[0].Name}</Text>
      <Text style={styles.minparaStyle}> {Strings.Title} </Text>

      <View style={styles.aboutLayout}>
        <Text style={styles.subHeader}> About Me </Text>
        <Text style={[styles.paraStyle, styles.aboutPara]}>
          {Strings.About}
        </Text>
      </View>

      <Text style={styles.subHeader}>{Strings.Connect}</Text>

      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => Linking.openURL(Strings.user_instagram)}>
          <Image
            style={styles.iconStyle}
            source={{
              uri: webImgs.instagram,
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => Linking.openURL(Strings.user_linkedIn)}>
          <Image
            style={styles.iconStyle}
            source={{
              uri: webImgs.linkedIn,
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => Linking.openURL(Strings.user_github)}>
          <Image
            style={styles.iconStyle}
            source={{
              uri: webImgs.gitHub,
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;
