import { StatusBar } from 'expo-status-bar';
import React, { useContext } from 'react';
import {useState} from 'react'

import { StyleSheet, Text, View, TextInput, Button, Dimensions} from 'react-native';
import axios from 'axios'
import { NativeStackNavigationProp} from '@react-navigation/native-stack'
import { RootStackParamList } from '../App';
import styles from "../stylesFolder/styles"
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginPage from './LoginPage';
import StepTrackerPage from './StepTrackerPage'
import LeaderboardPage from './LeaderboardPage';
import SelectCarPage from './SelectCarPage';


const Tab = createBottomTabNavigator();
const EmissionsPage = ({route, navigation} : any) => {
    return (
            <Tab.Navigator>
                <Tab.Screen name = "Track Steps" component={StepTrackerPage}></Tab.Screen>
                <Tab.Screen name = "Track CO2 Emissions" component={SelectCarPage}></Tab.Screen>
            </Tab.Navigator>
    )
}

EmissionsPage.navigationOptions = {
    headerLeft: () => {
        return null;
    }
}
export default EmissionsPage;