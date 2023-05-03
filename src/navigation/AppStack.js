import React, { useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../components/screens/Home';
import { BottomTab } from './BottomTabNavigation';

const Stack = createNativeStackNavigator();

export default function AppStack() {
  return (
    <Stack.Navigator
      initialRouteName={'Home'}

      screenOptions={{ headerShown: false }}
      >
      {/* <Stack.Screen name="Home" component={Home} /> */}

      <Stack.Screen name="Home" component={BottomTab} />

    </Stack.Navigator>
  );
}
