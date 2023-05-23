import React from 'react';
import {View, Text, Image} from 'react-native';
import Back from '../../components/Back';
import styles from './index.styles';
import {localImgs} from '../../constants/Paths';
const NotificationScreen = ({notifications}) => {
  return (
    <>
      <Back />
      <View style={styles.container}>
        {/* {notifications.length > 0 ? (
      // If there are notifications to display, render them here
      <View>
        {notifications.map(notification => (
          <Text key={notification.id}>{notification.message}</Text>
        ))}
      </View>
    ) : ( */}
        {/* If there are no notifications to display, render this image */}
        <View style={styles.noNotificationsContainer}>
          <Image
            source={localImgs.notImg}
            style={styles.noNotificationsImage}
          />
          <Text style={styles.noNotificationsText}>No notifications found</Text>
        </View>
        {/* )} */}
      </View>
    </>
  );
};

export default NotificationScreen;
