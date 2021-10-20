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

import InitialLoginPageStyles from "../stylesFolder/InitialLoginPageStyles"
import InitialLoginPage from "./InitialLoginPage"
import ExistingUserLoginPage from "./ExistingUserLoginPage"
import NewUserLoginPage from "./NewUserLoginPage"
import HomePage from "./HomePage"

let loggedInUser = "Not logged in"
 
const RootStack = createNativeStackNavigator();

const LoginPage =  () => {
    return(
      <NavigationContainer>
        <RootStack.Navigator screenOptions={{headerShown: false}}>
            <RootStack.Screen name="Initial" component={InitialLoginPage}></RootStack.Screen>
            <RootStack.Screen name="ExistingUser" component={ExistingUserLoginPage}></RootStack.Screen>
            <RootStack.Screen name="NewUser" component = {NewUserLoginPage}></RootStack.Screen>
            <RootStack.Screen name="Home" component ={HomePage}></RootStack.Screen>
        </RootStack.Navigator>
      </NavigationContainer>
    )
}

export default LoginPage;

