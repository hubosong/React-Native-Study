import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

//usado para navegar entre telas
import Routes from './src/Routes';

AppRegistry.registerComponent(appName, () => Routes);
