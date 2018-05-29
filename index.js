import { AppRegistry, YellowBox } from 'react-native';
import App from './dist/App';

// warning workaround
YellowBox.ignoreWarnings([
    "Warning: isMounted(...) is deprecated",
    "Module RCTImageLoader",
])

AppRegistry.registerComponent('mint', () => App);
