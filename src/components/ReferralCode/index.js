import React from 'react';
import {TouchableOpacity, Linking} from 'react-native';

const ReferralCode = ({code}) => {
  const referralLink = `whatsapp://send?text=Use my referral code ${code} to get started with our app!`;

  const handlePress = async () => {
    const supported = await Linking.canOpenURL(referralLink);

    if (supported) {
      await Linking.openURL(referralLink);
    }
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Text>{code}</Text>
    </TouchableOpacity>
  );
};

export default ReferralCode;
