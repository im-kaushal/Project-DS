import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {useTranslation} from 'react-i18next';
import Header from '../../components/Header';
import styles from './index.styles';
import {useNavigation} from '@react-navigation/native';
const Settings = () => {
  const {t, i18n} = useTranslation();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items] = useState([
    {label: 'English', value: 'en'},
    {label: 'हिंदी', value: 'hi'},
  ]);
  const navigation = useNavigation();
  return (
    <View>
      <Header title={t('setting_screen')} />
      <View style={styles.container}>
        <View>
          <Text style={styles.label}>{t('language')}</Text>
        </View>

        <View>
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
      <View style={styles.label1}>
        <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
          <Text style={styles.label2}>Edit Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Settings;
