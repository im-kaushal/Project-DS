import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import styles from './index.styles';
const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = value => setName(value);
  const handleEmailChange = value => setEmail(value);
  const handleMessageChange = value => setMessage(value);

  const handleSubmit = () => {
    alert(
      `Thank you ${name} for connecting with us! We'll get back to you soon :)`,
    );
  };
  return (
    <ImageBackground
      source={{
        uri: 'https://images.pexels.com/photos/2425232/pexels-photo-2425232.jpeg?auto=compress&cs=tinysrgb&w=600',
      }}
      style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Contact Us</Text>
      </View>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={handleNameChange}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={handleEmailChange}
        />
        <TextInput
          style={styles.input}
          placeholder="Message"
          multiline={true}
          numberOfLines={5}
          value={message}
          onChangeText={handleMessageChange}
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Send Message</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default ContactUs;
