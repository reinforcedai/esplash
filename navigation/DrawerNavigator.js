
import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Icon, Image, Text } from 'react-native-elements';

import colors from '../src/styles';
import TabNavigator from './TabNavigator';
import GiveScreen from '../screens/Give';
import TestimonyScreen from '../screens/Testimony';
import PrayerScreen from '../screens/Prayer';
import CharityScreen from '../screens/Charity';
import ContactScreen from '../screens/Contact';
import AboutScreen from '../screens/About';


const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: colors.secondary,
        },
        headerTitle: () => (
          <Image style={{ width: 50, height: 40 }} source={require("../assets/images/logo.png")} />
        ),
      }}
    >
      <Drawer.Screen name="Home" component={TabNavigator}
        options={{
          drawerLabel: 'Home',
          drawerLabelStyle: {color: colors.primary,},
          drawerIcon: ({ color }) => (
            <Icon
              name='home'
              type='material-community'
              color={colors.primary}
            />
          ),
        }}
      />

      <Drawer.Screen
        name="Give"
        component={GiveScreen}
        options={{
          drawerLabel: 'Give',
          drawerLabelStyle: {color: colors.primary,},
          drawerIcon: ({ color }) => (
            <Icon
              name='gift-outline'
              type='material-community'
              color={colors.primary}
            />
          ),
        }}
      />
      
      <Drawer.Screen
        name="Testimony"
        component={TestimonyScreen}
        options={{
          drawerLabel: 'Testimony',
          drawerLabelStyle: {color: colors.primary,},
          drawerIcon: ({ color }) => (
            <Icon
              name='comment-quote-outline'
              type='material-community'
              color={colors.primary}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Prayer Request"
        component={PrayerScreen}
        options={{
          drawerLabel: 'Prayer Request',
          drawerLabelStyle: {color: colors.primary,},
          drawerIcon: ({ color }) => (
            <Icon
              name='message-draw'
              type='material-community'
              color={colors.primary}
            />
          ),
        }}
      />

      <Drawer.Screen
        name="Charity"
        component={CharityScreen}
        options={{
          drawerLabel: 'Charity',
          drawerLabelStyle: {color: colors.primary,},
          drawerIcon: ({ color }) => (
            <Icon
              name='account-group-outline'
              type='material-community'
              color={colors.primary}
            />
          ),
        }}
      />

      <Drawer.Screen
        name="Contact"
        component={ContactScreen}
        options={{
          drawerLabel: 'Contact',
          drawerLabelStyle: {color: colors.primary,},
          drawerIcon: ({ color }) => (
            <Icon
              name='contacts-outline'
              type='material-community'
              color={colors.primary}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="About"
        component={AboutScreen}
        options={{
          drawerLabel: 'About',
          drawerLabelStyle: {color: colors.primary,},
          drawerIcon: ({ color }) => (
            <Icon
              name='information-outline'
              type='material-community'
              color={colors.primary}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
