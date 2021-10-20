import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {useState} from 'react'

import { StyleSheet, Text, View, TextInput, Button, Dimensions} from 'react-native';
import axios from 'axios'
import { NativeStackNavigationProp} from '@react-navigation/native-stack'
import { RootStackParamList } from '../App';
import styles from "../stylesFolder/styles"
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useContext } from 'react';
import LoginPage from './LoginPage';


const StepTrackerPage = () => {

    console.log("HERE IS THE NAVIGATION")
    return (
        <View style={styles.container}>
            <Text>This will be the Step Tracker screen</Text>
        </View>
    )
}


export default StepTrackerPage;