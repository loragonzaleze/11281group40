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
import UserProfilePage from './UserProfilePage'
import LeaderboardPage from './LeaderboardPage';


const Tab = createBottomTabNavigator();
const HomePage = ({route, navigation} : any) => {
    return (
            <Tab.Navigator>
                <Tab.Screen name = {global.loggedInUser} component={UserProfilePage}></Tab.Screen>
                <Tab.Screen name = "Leaderboard" component={LeaderboardPage}></Tab.Screen>
            </Tab.Navigator>
    )
}

HomePage.navigationOptions = {
    headerLeft: () => {
        return null;
    }
}
export default HomePage;