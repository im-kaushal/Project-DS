import React from 'react';
import {TouchableOpacity, Linking, Text} from 'react-native';

import {useTranslation} from 'react-i18next';

const ReferralCode = ({code}) => {
  const referralLink = `whatsapp://send?text=${code}`;

  const handlePress = async () => {
    const supported = await Linking.canOpenURL(referralLink);

    if (supported) {
      await Linking.openURL(referralLink);
    }
  };

  return <TouchableOpacity onPress={handlePress}></TouchableOpacity>;
};

export default ReferralCode;
