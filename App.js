// * Gargi Singh Rao 29 Apr 2023 * //

import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import { NavigationContainer, createNavigationContainerRef } from '@react-navigation/native';

import AppStack from './src/navigation/AppStack';

const App = () => {
  return (
    <View style={{flex:1}} >
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    </View>
  );
}


export default App;
