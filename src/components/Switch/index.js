import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import I18n from '../../i18n';

const LanguageSwitchButton = () => {
  const switchLanguage = () => {
    // Update the language based on the current locale
    const newLanguage = I18n.Locales === 'en' ? 'hi' : 'en';
    I18n.Locales = newLanguage;
    // Force re-rendering of the component to update the language
    // (you can use a state variable for this as well)
    window.location.reload();
  };

  return (
    <TouchableOpacity onPress={switchLanguage} style={styles.container}>
      <Text style={styles.text}>
        {I18n.Locales === 'en' ? 'हिन्दी' : 'English'}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: 'lightgray',
    borderRadius: 8,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LanguageSwitchButton;
