import * as React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, View } from 'react-native';
import SignUpLoginScreen from './Screens/SignUpLoginScreen';
import {AppTabNavigator} from './components/AppTabNavigator';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {AppDrawerNavigator} from './components/AppDrawerNavigator';

export default class App extends React.Component {
  render(){
    return(
      <AppContainer />
    )
  }
}
const switchNavigator = createSwitchNavigator({
  SignUpLoginScreen: {screen: SignUpLoginScreen},
  Drawer: {screen: AppDrawerNavigator}
})

const AppContainer = createAppContainer(switchNavigator);

