import React, {useState} from 'react';
import {Linking, View, Text, TouchableOpacity} from 'react-native';
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

  // Refer & Earn
  const code = 'ABC123';
  const url = `whatsapp://send?text=${code}`;
  const handlePress = async () => {
    await Linking.openURL(url);
  };

  const navigation = useNavigation();

  return (
    <View>
      <Header
        title={t('setting_screen')}
        showHeartIcon={false}
        showBellIcon={true}
      />

      <View style={{padding: 10}}>
        <View style={styles.label}>
          <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
            <Text style={styles.label}>{t('edit_profile')}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handlePress}>
            <Text style={styles.label}>{t('refer_earn')}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.menuContainer}>
          <Text style={styles.label}>{t('language')}</Text>
          <DropDownPicker
            placeholder={t('language')}
            defaultValue="English"
            containerStyle={styles.dropdownContainer}
            style={styles.dropdown}
            itemStyle={styles.dropdownItem}
            dropDownStyle={styles.dropdown}
            labelStyle={styles.dropdownLabel}
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
    </View>
  );
};

export default Settings;
