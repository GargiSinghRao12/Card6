import React, { useState, useEffect, useRef } from 'react';
import {
  Text,
  SafeAreaView,
  Dimensions,
  View, Image, TextInput, FlatList, ScrollView, TouchableOpacity, Platform, ImageBackground, RefreshControl, Linking
} from 'react-native';


import styles from './style';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;





const Home = (props) => {

 





  // const { loggedInUserIdAndToken } = useSelector((state) => {
  //   console.log('MAIN REDUX STORE AT home page ===  ', state)
  //   return {
  //     loggedInUserIdAndToken: state?.authManagement?.loggedInUserIdAndToken,

  //   }
  // }, shallowEqual);






  useEffect(() => {

  

  }, [])

  
  

  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
};

export default Home;
