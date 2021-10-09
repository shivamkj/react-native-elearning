import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import {configureLocalNotif} from './src/utils/notification';

configureLocalNotif();

AppRegistry.registerComponent(appName, () => App);
