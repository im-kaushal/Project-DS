import AsyncStorage from '@react-native-async-storage/async-storage';

export const Storage = {
  async storeData(key, value) {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  },
  async getData(key) {
    try {
      const value = await AsyncStorage.getItem(key);
      return value ? JSON.parse(value) : null;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
};
