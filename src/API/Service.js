import {BASE_URL, URLS} from './config';

import axios from 'axios';

const API = axios.create({
  baseURL: BASE_URL,
});

export const fetchData = async url => {
  try {
    const response = await API.get(url);
    return response.data;
  } catch (error) {
    console.log('Error fetching data:', error);
    throw error;
  }
};

export const getFakeProducts = async () => {
  const data = await fetchData(URLS.FAKE_PRODUCTS);
  return data;
};

export const getUsers = async () => {
  const data = await fetchData(URLS.USERS);
  return data;
};
