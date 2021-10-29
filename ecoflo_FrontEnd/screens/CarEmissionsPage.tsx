import { StatusBar } from 'expo-status-bar';
import React, { useContext, useEffect } from 'react';
import {useState} from 'react'

import { StyleSheet, Text, View, TextInput, Button, Dimensions} from 'react-native';
import axios from 'axios'
import { NativeStackNavigationProp} from '@react-navigation/native-stack'
import { RootStackParamList } from '../App';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from "../stylesFolder/styles" 
import { NavigationContainer } from '@react-navigation/native'

import EmissionStyles from "../stylesFolder/EmissionStyles"
import SelectCarPage from "./SelectCarPage"
import FinalizeCarPage from "./FinalizeCarPage"
import EmissionsPage from "./EmissionsPage"
import EmissionCalculatorPage from "./EmissionCalculatorPage"


const RootStack = createNativeStackNavigator();
global.CarMake = "";
global.CarModel = "";
global.arr;
global.CarEmissionRate = -1;

const CarEmissionsPage =  () => {
    return(
      <NavigationContainer independent={true}>
        <RootStack.Navigator screenOptions={{headerShown: false}}>
            <RootStack.Screen name="SelectCarPage" component={SelectCarPage}></RootStack.Screen>
            <RootStack.Screen name="FinalizeCarPage" component={FinalizeCarPage}></RootStack.Screen>
            <RootStack.Screen name="EmissionCalculatorPage" component={EmissionCalculatorPage}></RootStack.Screen>
        </RootStack.Navigator>
      </NavigationContainer>
    )
}

export default CarEmissionsPage;