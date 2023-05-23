import React, {useState} from 'react';
import {StyleSheet, View, Button, Animated, Confetti} from 'react-native';
const Animation = () => {
  const [isVisible, setVisible] = useState(false);

  const handleClick = () => {
    setVisible(!isVisible);
  };

  const animatedOpacity = useRef(new Animated.Value(0));

  Animated.timing(animatedOpacity, {
    toValue: 1,
    duration: 0.5,
  }).start(() => {
    if (isVisible) {
      Animated.timing(animatedOpacity, {
        toValue: 0,
        duration: 0.5,
      }).start(() => setVisible(false));
    }
  });

  return (
    <View style={styles.container}>
      <Button title="Checkout" onPress={handleClick} />
      {isVisible && (
        <View style={styles.popup}>
          <Confetti
            confettiCount={100}
            spread={200}
            angle={Math.PI / 2}
            duration={2000}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  popup: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 100,
    height: 100,
    backgroundColor: 'red',
    opacity: animatedOpacity,
    visibility: 'hidden',
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Animation;
