import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {useTranslation} from 'react-i18next';
import Header from '../../components/Header';
import styles from './index.styles';

const Settings = navigation => {
  const {t, i18n} = useTranslation();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items] = useState([
    {label: 'English', value: 'en'},
    {label: 'हिंदी', value: 'hi'},
  ]);

  return (
    <View>
      <Header title={t('setting_screen')} />
      <View style={styles.container}>
        <Text style={styles.label}>{t('language')}</Text>
        <DropDownPicker
          placeholder={t('language')}
          defaultValue="English"
          containerStyle={styles.dropDownContainer}
          style={styles.dropDown}
          itemStyle={styles.item}
          dropDownStyle={styles.dropDownMenu}
          open={open}
          items={items}
          value={value}
          setValue={setValue}
          setOpen={setOpen}
          onChangeValue={language => {
            i18n.changeLanguage(language);
          }}
        />
      </View>
    </View>
  );
};

export default Settings;
