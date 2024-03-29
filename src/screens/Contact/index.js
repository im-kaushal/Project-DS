import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import Back from '../../components/Back';
import CustomTextInput from '../../components/Input';
import styles from './index.styles';
import ContactImage from '../../assets/svg/ContactImage';
import ContactButton from '../../components/ContactButton';
import {useTranslation} from 'react-i18next';

const ContactUs = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const {t} = useTranslation();

  const handleNameChange = text => {
    setName(text);
  };

  const handleEmailChange = text => {
    setEmail(text);
  };

  const handleMessageChange = text => {
    setMessage(text);
  };

  const handleSendPress = () => {
    // TODO: Implement send message functionality
  };

  return (
    <>
      <Back />
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <ContactImage style={styles.headerImage} />
          <Text style={styles.title}>{t('contact_us')}</Text>
          <CustomTextInput
            placeholder={t('name_placeholder')}
            value={name}
            onChangeText={handleNameChange}
            style={styles.input}
          />
          <CustomTextInput
            placeholder={t('email')}
            value={email}
            onChangeText={handleEmailChange}
            keyboardType="email-address"
            style={styles.input}
          />
          <CustomTextInput
            placeholder={t('message_placeholder')}
            value={message}
            onChangeText={handleMessageChange}
            style={[styles.input, styles.messageInput]}
          />
          <TouchableOpacity style={styles.sendButton} onPress={handleSendPress}>
            <Text style={styles.sendButtonText}>
              {t('message_placeholder')}
            </Text>
          </TouchableOpacity>
        </ScrollView>
        <View style={styles.popupContainer}>
          <ContactButton name="phone" value={t('phone_value')} />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('MyWebView');
            }}>
            <Text style={styles.sendButtonText}>{t('website')}</Text>
          </TouchableOpacity>
          <ContactButton name="email" value={t('email_value')} />
        </View>
      </KeyboardAvoidingView>
    </>
  );
};

export default ContactUs;
