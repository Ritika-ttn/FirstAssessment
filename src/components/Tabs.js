import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Home';
import More from './More';
import Search from './Search';

const Tab = createBottomTabNavigator();

class TabScreen extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          tabBarOptions={{
            activeTintColor: 'red',
            inactiveTintColor: 'white',
            labelStyle: {fontSize: 13},
            style: {
              height: 80,
              backgroundColor: '#2b2c2b',
            },
          }}>
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({focused}) => {
                if (focused) {
                  return (
                    <Image
                      style={styles.icon}
                      source={require('../assets/activehome.png')}
                    />
                  );
                }
                return (
                  <Image
                    style={styles.icon}
                    source={require('../assets/home.png')}
                  />
                );
              },
            }}
          />
          <Tab.Screen
            name="Search"
            component={Search}
            options={{
              tabBarLabel: 'Search',
              tabBarIcon: ({focused}) => {
                if (focused) {
                  return (
                    <Image
                      style={styles.icon}
                      source={require('../assets/activesearch.png')}
                    />
                  );
                }
                return (
                  <Image
                    style={styles.icon}
                    source={require('../assets/search.png')}
                  />
                );
              },
            }}
          />
          <Tab.Screen
            name="More"
            component={More}
            options={{
              tabBarLabel: 'More',
              tabBarIcon: ({focused}) => {
                if (focused) {
                  return (
                    <Image
                      style={styles.icon}
                      source={require('../assets/activemore.png')}
                    />
                  );
                }
                return (
                  <Image
                    style={styles.icon}
                    source={require('../assets/more.png')}
                  />
                );
              },
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
const styles = StyleSheet.create({
  icon: {
    height: 25,
    width: 25,
  },
});
export default TabScreen;
