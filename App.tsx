import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/redux/Store';

import Main from './src/navigation/Stacks/Main';
import {
  requestLocationPermission,
  requestCameraPermission,
  requestStoragePermission,
  requestNotificationPermission,
} from './src/utils/Permissions';

const App = () => {
  useEffect(() => {
    //permission check
    askPermission();
  }, []);

  const askPermission = async () => {
    await requestLocationPermission();
    await requestCameraPermission();
    await requestStoragePermission();
    await requestNotificationPermission();
  };

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Main />
      </PersistGate>
    </Provider>
  );
};

export default App;
