import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import CustomTextInput from '../../components/Input';
import styles from './index.styles';
import ContactImage from '../../assets/svg/ContactImage';
import ContactButton from '../../components/ContactButton';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    console.log('🚀 ~ file: index.js:28 ');
  }, []);

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
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <ContactImage style={styles.headerImage} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Contact Us</Text>
        <CustomTextInput
          placeholder="Name"
          value={name}
          onChangeText={handleNameChange}
          style={styles.input}
        />
        <CustomTextInput
          placeholder="Email"
          value={email}
          onChangeText={handleEmailChange}
          keyboardType="email-address"
          style={styles.input}
        />
        <CustomTextInput
          placeholder="Message"
          value={message}
          onChangeText={handleMessageChange}
          style={[styles.input, styles.messageInput]}
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSendPress}>
          <Text style={styles.sendButtonText}>Send Message</Text>
        </TouchableOpacity>
        <View style={styles.icons}>
          <View>
            <ContactButton type="email" value="example@example.com" />
          </View>
          <View>
            <ContactButton type="phone" value="1234567890" />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ContactUs;
