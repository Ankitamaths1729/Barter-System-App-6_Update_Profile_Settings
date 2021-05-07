import {createDrawerNavigator} from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator';
import CustomSideBarMenu from './CustomSideBarMenu';
import SettingsScreen from '../screens/SettingsScreen';


export const AppDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: AppTabNavigator,
        navigationOptions: {
        title: "HOME ACTIVITY"
    }},
   Settings: {
        screen: SettingsScreen,
        navigationOptions: {
        title: "Settings"
    }},
},
{
    contentComponent: CustomSideBarMenu
},
{
    initialRouteName: "Home ",
}
)