import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Icon } from 'react-native-elements';
import HomeScreen from '../screens/Home';
import ExploreScreen from '../screens/Explore';
import StoreScreen from '../screens/Store';
import GiveScreen from '../screens/Give';
import colors from '../src/styles';


const Tab = createMaterialBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      barStyle={{ backgroundColor: colors.secondary }}
    >

      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Icon
              name='home'
              type='font-awesome'
              color='#fff'
            />
          ),
        }}
      />

      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarLabel: 'Explore',
          tabBarIcon: ({ color }) => (
            <Icon
              name='explore'
              type='font-awesome-'
              color='#fff'
            />
          ),
        }}
      />

      <Tab.Screen
        name="Store"
        component={StoreScreen}
        options={{
          tabBarLabel: 'Store',
          tabBarIcon: ({ color }) => (
            <Icon
              name='store'
              type='font-awesome-'
              color='#fff'
            />
          ),
        }}
      />
{/* 
      <Tab.Screen
        name="Give"
        component={GiveScreen}
        options={{
          tabBarLabel: 'Give',
          tabBarIcon: ({ color }) => (
            <Icon
              name='info'
              type='font-awesome-'
              color='#fff'
            />
          ),
        }}
      /> */}

    </Tab.Navigator>
  );
}

export default TabNavigator
