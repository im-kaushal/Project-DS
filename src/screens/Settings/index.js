import React, {useState} from 'react';
import {Linking, View, Text, TouchableOpacity} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {useTranslation} from 'react-i18next';
import CustomIcon from '../../components/Icon';
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
    <View style={styles.container}>
      <Header
        title={t('setting_screen')}
        showHeartIcon={false}
        showBellIcon={true}
      />

      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={styles.items}
          onPress={() => navigation.navigate('Location')}>
          <CustomIcon name="map-marker" size={20} color="black" />
          <Text style={styles.label}>{t('location')}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.items}
          onPress={() => navigation.navigate('EditProfile')}>
          <CustomIcon name="user" size={20} color="black" />
          <Text style={styles.label}>{t('edit_profile')}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.items}
          onPress={() => navigation.navigate('Toggle')}>
          <CustomIcon name="lock" size={20} color="black" />
          <Text style={styles.label}>{t('permissions')}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.items} onPress={handlePress}>
          <CustomIcon name="share" size={20} color="black" />
          <Text style={styles.label}>{t('refer_earn')}</Text>
        </TouchableOpacity>

        <View style={styles.items}>
          <CustomIcon name="globe" size={20} color="black" />
          <DropDownPicker
            placeholder={t('language')}
            defaultValue={t('english')}
            containerStyle={styles.dropdownContainer}
            style={styles.dropdown}
            itemStyle={styles.dropdownItem}
            // dropDownStyle={{backgroundColor: Colors.accent}}
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
