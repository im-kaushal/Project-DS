/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

// hot reloading - only the modified part of the code is recompiled, and the changes are applied to the running application. This feature is faster than live reloading and helps to save time during development.
if (module.hot) {
  module.hot.accept();
}

AppRegistry.registerComponent(appName, () => App);
