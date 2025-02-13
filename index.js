/**
 * @format
 */

import { AppRegistry } from 'react-native';

import { name as appName } from './app.json';
import 'expo-constants';
import App from '~/modules/app/app';

AppRegistry.registerComponent(appName, () => App);
