import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {useState} from 'react'
import {Text, View, TextInput, Platform, KeyboardAvoidingView, Image, TouchableOpacity, ActivityIndicator} from 'react-native';
import axios from 'axios'
import NewUserLoginPageStyles from '../stylesFolder/NewUserLoginPageStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';




const NewUserLoginPage = ({navigation} : any) => {
    const [username, setUsername] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [password, setPassword] = useState('')
    const [APICall, setAPICall] = useState(false)
    const [loginStatus, setLoginStatus] = useState(true)
    const [differentPasswords, setDifferentPasswords] = useState(false)
    
    async function signUp(){
        setAPICall(true)
        if(password != confirmPassword){
            setLoginStatus(true)
            setAPICall(false)
            setDifferentPasswords(true)
            return
        }
        global.loggedInUser = "Not logged In"
        axios.post('https://loginapitest.herokuapp.com/api/login/', {
          "username":username,
          "password":password,
          "existingUser":false
        }).then(async (res) => {
            console.log("CALLED API")
            console.log(res)
            if(!res.data.success){
                setAPICall(false)

                if(res.data.type == 'Username taken'){
                    setLoginStatus(false)
                    setDifferentPasswords(false)
                }
                
            }
            else{
                console.log("success !")
            
              let currentDate = new Date()
              currentDate.setSeconds(currentDate.getSeconds() + 60)
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
        console.log("Error has occured")
        console.log(error)
        })
    }


    const existingUser = () => {
        return(
            <Text style={NewUserLoginPageStyles.incorrectPasswordText}>
                Username already taken, try another username
            </Text>
        )
    }
    const initialText = () => {
        return (
            <Text style={NewUserLoginPageStyles.correctPasswordText}>
                Transparent Text
            </Text>
        )
    }
    const nonMatchingPasswords = () => {
        return (
            <Text style={NewUserLoginPageStyles.incorrectPasswordText}>
                Passwords do not match!
            </Text>
        )
    }
    return (
        <KeyboardAvoidingView 
        style={NewUserLoginPageStyles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        >            
            <StatusBar  translucent={true} />
            <Image
                style={NewUserLoginPageStyles.logo}
                source={require("../assets/ecoFloLogo.png")}
            />
            <Text style={(loginStatus) ? NewUserLoginPageStyles.usernameTitle : NewUserLoginPageStyles.invalidUsernameTitle}>Username</Text>

            <View style={NewUserLoginPageStyles.inputFormView}>
               
                <TextInput 
                    style={loginStatus  ? NewUserLoginPageStyles.inputForm : NewUserLoginPageStyles.inputFormIncorrect}
                    placeholder = "Enter Username"
                    onChangeText={text => setUsername(text)}
                    keyboardType="visible-password"
                    autoCapitalize='none'
                    autoCorrect={false}
                />
            </View>
            <Text style={NewUserLoginPageStyles.passwordTitle}>Password</Text>

            <View style={NewUserLoginPageStyles.inputFormView}>

                <TextInput 
                    style={differentPasswords ? NewUserLoginPageStyles.inputFormIncorrect : NewUserLoginPageStyles.inputForm }
                    placeholder = "Enter Password"
                    onChangeText={text => setPassword(text)}
                    keyboardType="visible-password"
                    secureTextEntry={true}
                    textAlignVertical='top'
                /> 
            </View> 
            <Text style={NewUserLoginPageStyles.inputFormTitle}>Confirm Password</Text>

            <View style={NewUserLoginPageStyles.inputFormView}>
                <TextInput 
                    style={differentPasswords ? NewUserLoginPageStyles.inputFormIncorrect : NewUserLoginPageStyles.inputForm }
                    placeholder = "Confirm Password"
                    onChangeText={text => setConfirmPassword(text)}
                    keyboardType="visible-password"
                    secureTextEntry={true}
                    textAlignVertical='top'
                /> 
            </View>   
            {(loginStatus && !differentPasswords)? initialText() : differentPasswords ?  nonMatchingPasswords() : existingUser()}
            <View style={NewUserLoginPageStyles.loginButtonView}>
                <TouchableOpacity 
                    style={NewUserLoginPageStyles.loginButton}
                    onPress={signUp}
                >
                {APICall ? <ActivityIndicator size="small"/> : <Text style={NewUserLoginPageStyles.loginText}>SignUp</Text>}
                </TouchableOpacity>
            </View>  
        </KeyboardAvoidingView>
    )
}


export default NewUserLoginPage;