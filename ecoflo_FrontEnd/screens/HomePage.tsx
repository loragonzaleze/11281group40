import { StatusBar } from 'expo-status-bar';
import React, { useContext, useEffect } from 'react';
import {useState} from 'react'

import { StyleSheet, Text, View, TextInput, Button, Dimensions} from 'react-native';
import axios from 'axios'
import { NativeStackNavigationProp} from '@react-navigation/native-stack'
import { RootStackParamList } from '../App';
import styles from "../stylesFolder/styles"
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UserProfilePage from './UserProfilePage'
import LeaderboardPage from './LeaderboardPage';
import EmissionsPage from './EmissionsPage';
import Map from './Map';


const Tab = createBottomTabNavigator();
const HomePage = ({route, navigation} : any) => {
    return (
            <Tab.Navigator>
                <Tab.Screen 
                    name = {global.loggedInUser} 
                    component={UserProfilePage}
                    options={{headerShown: false}}
                    
                ></Tab.Screen>
                <Tab.Screen options={{headerShown: false}} name = "Track Emissions" component={EmissionsPage}></Tab.Screen>
                <Tab.Screen name = "Leaderboard" component={LeaderboardPage}></Tab.Screen>
                <Tab.Screen name  = "Map" component={Map}></Tab.Screen>
            </Tab.Navigator>
    )
}

HomePage.navigationOptions = {
    headerLeft: () => {
        return null;
    }
}
export default HomePage;