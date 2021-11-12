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
import CarEmissionsNavigator from './CarEmissionsPage';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';
import  useSafeArea  from "react-native-safe-area-view";


const Tab = createMaterialTopTabNavigator();
 
const CarEmissions = () => {
    return <CarEmissionsNavigator/>
}
const EmissionsPage = ({navigation} : any) => {
    const safeArea = useSafeArea

    return (

            <Tab.Navigator
            >
                <Tab.Screen name = "Track CO2 Emissions" component={CarEmissions}></Tab.Screen>
                <Tab.Screen name = "Track Steps" component={StepTrackerPage}></Tab.Screen>
            </Tab.Navigator>
    )
}

EmissionsPage.navigationOptions = {
    headerLeft: () => {
        return null;
    }
}
export default EmissionsPage;