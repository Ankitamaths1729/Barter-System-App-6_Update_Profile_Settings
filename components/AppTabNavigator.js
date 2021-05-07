import React from 'react';
import {Image} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import DonateScreen from '../screens/DonateScreen';
import RequestScreen from '../screens/RequestScreen';


export const AppTabNavigator = createBottomTabNavigator({
  DonateBooks : {
    screen: DonateScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/donate icon 2.jpg")} style={{width:32, height:32}}/>,
      tabBarLabel : "Donate Items",
    }
  },
  BookRequest: {
    screen: RequestScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/recieve 2.jpg")} style={{width:32, height:29}}/>,
      tabBarLabel : "Item Request",
    }
  }
});