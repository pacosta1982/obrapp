import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomeScreen from '../screens/HomeScreen'
import {headerStyle, headerTitleStyle} from '../utils/theme'

const Stack = createNativeStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Home"
                component={HomeScreen}
                options={{header: () => null}}
            />
        </Stack.Navigator>
    )
}


export default HomeStack;