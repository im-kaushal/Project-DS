import {
  Text,
  TouchableOpacity,
  View,
  Image,
  Linking,
  ScrollView,
} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import styles from './index.styles';
import Strings from '../../constants/Strings';
import {webImgs} from '../../constants/Images';
import Header from '../../components/Header';
const Profile = () => {
  const myName = useSelector(state => state.user);
  return (
    <View>
      <Header />
      <ScrollView>
        <View style={styles.aboutContainer}>
          <View>
            <Image style={styles.imgStyle} source={{uri: webImgs.avatar}} />
          </View>

          {/* <Text style={styles.mainHeader}>{myName.data[0].Name}</Text> */}
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

// import React, {useState} from 'react';
// import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
// import ImagePickerComponent from '../../components/ImagePicker';
// import {webImgs} from '../../constants/Images';
// const Profile = () => {
//   const [profileImage, setProfileImage] = useState(
//     'https://via.placeholder.com/200x200.png?text=Profile+Image',
//   );

//   const handleImageUpload = imageUri => {
//     setProfileImage(imageUri);
//   };

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity style={styles.imageContainer} onPress={() => {}}>
//         <Image source={{uri: webImgs.avatar}} style={styles.image} />
//       </TouchableOpacity>
//       <View style={styles.infoContainer}>
//         <Text style={styles.name}>John Doe</Text>
//         <Text style={styles.email}>johndoe@example.com</Text>
//       </View>
//       <View style={styles.buttonContainer}>
//         <ImagePickerComponent onImageUpload={handleImageUpload} />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   imageContainer: {
//     width: 150,
//     height: 150,
//     borderRadius: 75,
//     overflow: 'hidden',
//     marginBottom: 20,
//   },
//   image: {
//     flex: 1,
//     width: null,
//     height: null,
//   },
//   infoContainer: {
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   name: {
//     fontSize: 24,
//     fontWeight: 'bold',
//   },
//   email: {
//     fontSize: 16,
//     color: '#999',
//   },
//   buttonContainer: {
//     marginTop: 20,
//   },
// });

// export default Profile;
