import {Text, TouchableOpacity, View, Image, Linking} from 'react-native';
import React from 'react';
import styles from './index.styles';
import {webImgs} from '../../statics/Images';
const Profile = () => {
  return (
    <View style={styles.aboutContainer}>
      <View>
        <Image style={styles.imgStyle} source={{uri: webImgs.avatar}} />
      </View>

      <Text style={styles.mainHeader}>Kaushal Kr.</Text>
      <Text style={styles.minparaStyle}> SET @Damco Solutions 😀 </Text>

      <View style={styles.aboutLayout}>
        <Text style={styles.subHeader}> About Me </Text>
        <Text style={[styles.paraStyle, styles.aboutPara]}>
          A self-driven, hardworking, and astute learner having team
          collaboration, marketing, management, and leadership qualities.
        </Text>
      </View>

      <Text style={styles.subHeader}>Connect Me Through:</Text>

      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() =>
            Linking.openURL('https://www.instagram.com/ixkaushal/')
          }>
          <Image
            style={styles.iconStyle}
            source={{
              uri: webImgs.instagram,
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() =>
            Linking.openURL('https://www.linkedin.com/in/im-kaushal/')
          }>
          <Image
            style={styles.iconStyle}
            source={{
              uri: webImgs.linkedIn,
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => Linking.openURL('https://github.com/im-kaushal')}>
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
