import { AppRegistry, Platform } from 'react-native';
import App from './App';

AppRegistry.registerComponent('BT2', () => App);

if (Platform.OS === 'web') {
  const rootTag = document.getElementById('root') || document.getElementById('main');
  AppRegistry.runApplication('BT2', { rootTag });
}
