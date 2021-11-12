import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {useState} from 'react'
import { Text, View, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, Platform, ActivityIndicator} from 'react-native';
import axios from 'axios'
import Icon from 'react-native-vector-icons/Feather'

import ExistingUserLoginPageStyles from '../stylesFolder/ExistingUserLoginPageStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ExistingUserLoginPage = ({navigation} : any) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('')
    const [unknownUser, setUnknownUser] = useState(false)
    const [status, setStatus] = useState('Not Logged In')
    const [loginStatus, setLoginStatus] = useState(true)
    const [APICall, setAPICall] = useState(false)
    const [buttonPressed, setButtonPressed] = useState(false)
    async function login(){ 
        setAPICall(true)
        global.loggedInUser = "Not logged In"
        axios.post('https://loginapitest.herokuapp.com/api/login/', {
          "username":username,
          "password":password,
          "existingUser":true
        }).then(async (res) => {
            console.log("CALLED API")
            console.log(res)
            if(!res.data.success){
                setAPICall(false)

                if(res.data.type == 'Incorrect Password'){
                    setLoginStatus(false)
                }
                else if(res.data.type == 'Unknown user'){
                    setUnknownUser(true)
                    setLoginStatus(false)
                    
                }
                setStatus("INCORRECT PASSWORD")
            }
            else{
                console.log("success !")
            
              let currentDate = new Date()
              currentDate.setSeconds(currentDate.getSeconds() + (60 * 60 * 24)) //Logged in for 24 hours before logout
              navigation.replace('Home')
              await AsyncStorage.setItem('Date', currentDate.toUTCString())
              
              await AsyncStorage.setItem('Username', username)
              .then((res) => {
                  global.loggedInUser = username;
                  navigation.replace('Home', {
                  username: username,
                  login: true
              })
              })
            }
            
        })
        .catch((error) => {
        console.log("error has occured")
        console.log(error)
        })
    
    }

    const unknownUserText = () => {
        return(
            <Text style={ExistingUserLoginPageStyles.incorrectPasswordText}>
                Username does not exist!
            </Text>
        )
    }
    const incorrectPassword = () => {
        return(
            <Text style={ExistingUserLoginPageStyles.incorrectPasswordText}>
                Incorrect username or password
            </Text>
        )
    }
    const correctPassword = () => {
        return (
            <Text
            style={ExistingUserLoginPageStyles.correctPasswordText}>
                Incorrect username or password
            </Text>
        )
    }
    return (
        <KeyboardAvoidingView 
            style={ExistingUserLoginPageStyles.container}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <StatusBar  translucent={true} />

             <Image
                style={ExistingUserLoginPageStyles.logo}
                source={require("../assets/ecoFloLogo.png")}
            />
            <View style={ExistingUserLoginPageStyles.inputFormView}>
                <Icon style={ExistingUserLoginPageStyles.icon} name="user" size={20} color= {loginStatus ? "#000" : "#FF0000"}/>
                <TextInput 
                    style={loginStatus ? ExistingUserLoginPageStyles.inputForm : ExistingUserLoginPageStyles.inputFormIncorrect}
                    placeholder = "Enter Username"
                    onChangeText={text => setUsername(text)}
                    keyboardType="visible-password"
                    autoCapitalize='none'
                    autoCorrect={false}
                    clearTextOnFocus={true}

                />
            </View>
            
            <View style={ExistingUserLoginPageStyles.inputFormView}>
                <Icon style={ExistingUserLoginPageStyles.icon}name="lock" size={20} color= {loginStatus ? "#000" : "#FF0000"}/>

                <TextInput 
                    style={loginStatus ? ExistingUserLoginPageStyles.inputForm : ExistingUserLoginPageStyles.inputFormIncorrect}
                    placeholder = "Enter Password"
                    onChangeText={text => setPassword(text)}
                    keyboardType="visible-password"
                    secureTextEntry={true}
                    clearTextOnFocus={true}

                /> 
                        
            </View>   
            {loginStatus ? correctPassword() : unknownUser ? unknownUserText() : incorrectPassword()}
 

        
            <View style={ExistingUserLoginPageStyles.loginButtonView}>
                <TouchableOpacity 
                    style={ExistingUserLoginPageStyles.loginButton}
                    onPress={login}
                >
                {APICall ? <ActivityIndicator size="small"/> : <Text style={ExistingUserLoginPageStyles.loginText}>Login</Text>}
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}


export default ExistingUserLoginPage;