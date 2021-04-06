import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {Component} from 'react';
import Home from './Home';
import Gridlayout from './Gridlayout';
const Stack = createStackNavigator();

class StackNavigation extends Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Gridlayout"
          component={Gridlayout}
        />
      </Stack.Navigator>
    );
  }
}
export default StackNavigation;
