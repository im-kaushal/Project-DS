import {
  Text,
  TouchableOpacity,
  View,
  Image,
  Linking,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import styles from './index.styles';
import Strings from '../../constants/Strings';
import {webImgs} from '../../constants/Images';
import Header from '../../components/Header';
import ImagePicker from '../../components/ImagePicker';

const Profile = () => {
  const myName = useSelector(state => state.user);
  const [image, setImage] = useState(webImgs.avatar);
  const dispatch = useDispatch();

  const handleImageChange = uri => {
    dispatch({type: 'UPDATE_USER_AVATAR', payload: uri});
    setImage(uri);
  };

  return (
    <View>
      <Header title="Profile" />
      <ScrollView>
        <View style={styles.aboutContainer}>
          <TouchableOpacity onPress={() => ImagePicker(handleImageChange)}>
            <Image style={styles.imgStyle} source={{uri: image}} />
          </TouchableOpacity>

          {/* <Text style={styles.mainHeader}>{myName.data[0].Name}</Text> */}
          <Text style={styles.minparaStyle}> {Strings.Title} </Text>

          <View style={styles.aboutLayout}>
            <Text style={styles.subHeader}>{Strings.about}</Text>
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
                  uri: webImgs.github,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;
