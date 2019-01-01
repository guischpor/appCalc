import React from 'react';
import { AppRegistry } from 'react-native';

import App from './src/App';

const appCalc = () => (
  <App />
);

AppRegistry.registerComponent('appCalc', () => appCalc);
