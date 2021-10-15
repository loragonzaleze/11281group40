import { StatusBar } from 'expo-status-bar';
import React, { useContext } from 'react';
import {useState} from 'react'

import { StyleSheet, Text, View, TextInput, Button, Dimensions} from 'react-native';
import axios from 'axios'
import { NativeStackNavigationProp} from '@react-navigation/native-stack'
import { RootStackParamList } from '../App';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from "../stylesFolder/styles" 

let loggedInUser = "Not logged in"

const LoginPage =  ({navigation} : any) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('')
    AsyncStorage.getItem('Date').then((value) => {
      if(value != null){
        let storedDate = new Date(value)
        let currentDate = new Date()
        console.log("Current Date: " + currentDate.toUTCString())
        console.log("Saved date: " + storedDate.toUTCString())
        if(currentDate < storedDate){
          navigation.replace('Home', {
            username: username
        })
        }
      }
    })
    return (
        <View style={styles.container}>
        <Text>EcoFlo</Text>
        <TextInput 
          style={styles.inputForm}
          placeholder = "Username"
          onChangeText={text => setUsername(text)}
          keyboardType="visible-password"
          />
        <TextInput 
          style={styles.inputForm}
          placeholder = "Password"
          onChangeText={text => setPassword(text)}
          keyboardType="visible-password"
          secureTextEntry={true}

        />  
        <Button
          title="Login"
          onPress = {buttonPressed}
        />
      </View>
    );


    //Once button is pressed, proceeds to login user
    //TODO: change screen depending on valid password 
    async function buttonPressed(){ 
        global.loggedInUser = username;
        axios.post('https://loginapitest.herokuapp.com/api/login/', {
        "username":username,
        "password":password,
        "existingUser":false
        }).then((res) => {
            let currentDate = new Date()
            currentDate.setSeconds(currentDate.getSeconds() + 10)
            AsyncStorage.setItem('Date', currentDate.toUTCString()).then((res) => {
              navigation.replace('Home', {
                username: username
            })
            })
        })
        .catch((error) => {
        console.log("error has occured")
        console.log(error)
        })
    
    }
}

export default LoginPage;

