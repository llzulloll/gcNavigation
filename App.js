import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import AccountScreen from "./src/screens/AccountScreen";
import SigninScreen from "./src/screens/SigninScreen";
import MapScreen from "./src/screens/MapScreen";
import BuildingScreen from "./src/screens/BuildingScreen";
import SignupScreen from './src/screens/SignupScreen';
import { Provider as AuthProvider } from './src/context/AuthContext';
import { setNavigator } from './src/navigationRef';
import LoadingScreen from './src/screens/LoadingScreen';

const switchNavigator = createSwitchNavigator({

  loading: LoadingScreen,

  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen
  }),
  mainFlow: createMaterialBottomTabNavigator({
    Map: MapScreen,
    Building: BuildingScreen,
    Account: AccountScreen,
  })

});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <AuthProvider>
      <App
        ref={(navigator) => { setNavigator(navigator) }}
      />
    </AuthProvider>
  );
};