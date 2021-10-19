import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import {useState} from 'react'

import { StyleSheet, Text, View, TextInput, Button, Dimensions} from 'react-native';
import axios from 'axios'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackRouter } from 'react-navigation';
import  LoginPage from './screens/LoginPage'
import HomePage from './screens/HomePage'
import AppLoading from 'expo-app-loading';
const windowWidth = Dimensions.get('screen').width


export type RootStackParamList = {
  Login: undefined,
  Home: undefined
};



const ScreensStack = createNativeStackNavigator<RootStackParamList>()


export default function App() {

  



  return (
    <NavigationContainer>
      <ScreensStack.Navigator
      screenOptions={{
        headerShown: false

      }
      }>
        <ScreensStack.Screen name="Login" component={LoginPage}></ScreensStack.Screen>
        <ScreensStack.Screen name="Home" component={HomePage}></ScreensStack.Screen>
      </ScreensStack.Navigator>
    </NavigationContainer>
    );
  
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#03fc56',
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputForm: {
    backgroundColor: '#fff',
    fontSize: 20,
    width: windowWidth / 1.5,
    marginVertical: 10,
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 12,
  },

  loginButton: {
    backgroundColor: '#fff'
  },

  
});
