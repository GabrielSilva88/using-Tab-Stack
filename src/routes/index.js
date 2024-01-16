import React from 'react';

// npm install @react-navigation/native;
import { NavigationContainer, StackRouter } from '@react-navigation/native';

// npm install @react-navigation/native-stack;
//import { createNativeStackNavigator } from '@react-naavigation/native-stack';
// npm install @react-navigation/bottom-tabs

//recomendado npm install react-native-vector-icons ^ npm install --save react-native-vector-icons
import { Feather } from '@expo/vector-icons'

import Home from '../pages/Home';
import Sobre from '../pages/Sobre';
import Contato from '../pages/Contato';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackRoutes from './stackRoutes';

// subistituidos o Stack "const Stack = createNativeStackNavigator();" para Tab
const Tab = createBottomTabNavigator();
/**
 * 
 * removido <NavigationContainer
 */
export default function Routes() {
  return (
    
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#FF0000',

          tabBarStyle: {
            backgroundColor: '#202225',
            borderTopWidth: 0
          }
        }}
      >
        <Tab.Screen
          name='HomeStack'
          component={StackRoutes}
          options={{
            tabBarIcon: ({ color, size }) => {
              return <Feather
                name="home"
                color={color}
                size={size}
              />
            }
          }}
        />

        <Tab.Screen
          name='Sobre'
          component={Sobre}
          options={{
            tabBarIcon: ({ color, size }) => {
              return <Feather
                name="file-text"
                color={color}
                size={size}
              />
            }
          }}
        />

        <Tab.Screen
          name='Contato'
          component={Contato}
          options={{
            tabBarIcon: ({ color, size }) => {
              return <Feather
                name="phone-call"
                color={color}
                size={size}
              />
            }
          }}
        />

      </Tab.Navigator>
  );
}