import React, {useState, useEffect} from 'react';
import {View, SafeAreaView} from 'react-native';
import io from 'socket.io-client';
import {GiftedChat} from 'react-native-gifted-chat';

const socket = io('http://localhost:3000'); // replace with your server URL

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Listen for incoming messages from the server
    socket.on('message', message => {
      setMessages(previousMessages =>
        GiftedChat.append(previousMessages, message),
      );
    });

    // Clean up the listener when the component unmounts
    return () => {
      socket.off('message');
    };
  }, []);

  const onSend = newMessages => {
    // Emit the new message to the server
    socket.emit('message', newMessages[0]);
  };

  return (
    <View>
      <SafeAreaView>
        <GiftedChat
          showUserAvatar={true}
          messages={messages}
          onSend={newMessages => onSend(newMessages)}
          user={{_id: 1}} // Replace with the user's ID
        />
      </SafeAreaView>
    </View>
  );
};

export default ChatScreen;
