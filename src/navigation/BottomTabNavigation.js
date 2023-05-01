import React, { useState, useEffect } from 'react';
import { TouchableOpacity, View, Text, Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useRoute } from '@react-navigation/native';
import { VectorIcons } from '../containers/components/VectorIcons';
import Home from '../containers/screens/Home';
import DriveThru from '../containers/screens/DriveThru';
import colors from '../constants/colors';
import { font } from '../constants/fontSizes';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Tab = createBottomTabNavigator();

export const BottomTab = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false
            }}
            tabBar={props => <BottomTabDesignComponent {...props} />}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="DriveThru" component={DriveThru} />
            {/* <Tab.Screen name="MyOrders" component={MyOrders} /> */}
            {/* <Tab.Screen name="Cart" component={Cart} /> */}

            {/* <Tab.Screen name="Profile" component={Profile} /> */}

        </Tab.Navigator>
    );
}


const BottomTabDesignComponent = (props) => {
    console.log('Props at bottom tab design  ===  ', props)
    const { navigation } = props
    console.log('navigation at bottom tab design  ===  ', navigation)
    const route = useRoute();
    const bottomTabScreensList = props.state.routeNames
    const activeBottomTabScreenIndex = props.state.index
    console.log('Active route  ===  ', route.name);

    return (
        <View style={{
            flexDirection: 'row', backgroundColor: 'white',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.8,
            shadowRadius: 2,
            elevation: 2,
            height: Platform.OS == 'android' ? hp(7.8) : hp(7.8)

        }} >
            <View style={{
                flex: 1,
                paddingVertical: 3,
                marginHorizontal: wp(10),
                borderTopWidth: bottomTabScreensList[activeBottomTabScreenIndex] == 'Home' ? 2 : 0,
                borderColor: bottomTabScreensList[activeBottomTabScreenIndex] == 'Home' ? colors.primaryThemeColor : 'transparent',

            }} >
                <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => { navigation.navigate('Home') }} >
                    <VectorIcons familyName={'IonIcons'} iconName={'home-outline'} size={25} color={bottomTabScreensList[activeBottomTabScreenIndex] == 'Home' ? colors.primaryThemeColor : 'gray'} />
                    <Text style={{ fontSize: 12, fontFamily: font.PoppinsSemiBolds, color: bottomTabScreensList[activeBottomTabScreenIndex] == 'Home' ? colors.primaryThemeColor : 'gray' }} >Home</Text>
                </TouchableOpacity>


            </View>


            <View style={{
                flex: 1,
                marginHorizontal: wp(10),
                paddingVertical: 3,
                borderTopWidth: bottomTabScreensList[activeBottomTabScreenIndex] == 'DriveThru' ? 2 : 0,
                borderColor: bottomTabScreensList[activeBottomTabScreenIndex] == 'DriveThru' ? colors.primaryThemeColor : 'transparent',
            }} >

                <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => { navigation.navigate('DriveThru') }} >
                    <VectorIcons familyName={'IonIcons'} iconName={'compass-outline'} size={25} color={bottomTabScreensList[activeBottomTabScreenIndex] == 'DriveThru' ? colors.primaryThemeColor : 'gray'} />
                    <Text style={{ fontSize: 12, fontFamily: font.PoppinsSemiBolds, color: bottomTabScreensList[activeBottomTabScreenIndex] == 'DriveThru' ? colors.primaryThemeColor : 'gray' }} >DriveThru</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}