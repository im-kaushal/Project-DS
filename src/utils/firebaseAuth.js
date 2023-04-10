import auth from '@react-native-firebase/auth';

export const signUpWithEmail = async (email, password) => {
  try {
    await auth().createUserWithEmailAndPassword(email, password);
    return true;
  } catch (error) {
    console.log('Error creating user: ', error);
    return false;
  }
};
