import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {useState} from 'react'
import { Text, View, TouchableOpacity, Image} from 'react-native';
import InitialLoginPageStyles from '../stylesFolder/InitialLoginPageStyles';



   //TODO: Implement skip logging in if user has logged in the past 7 days
   /* useEffect(() => { //Checks to see if user is logged in by checking if the stored date is less than the current date
      console.log("Current value of loginButtonPressed: " + loginButtonPressed)
       AsyncStorage.multiGet(['Date', 'Username']).then((value : [string, string | null][]) => {
        if(value != null){
          let utcString = value[0][1]!
          let storedDate = new Date(utcString)
          let currentDate = new Date()
          let storedUsername = value[1][1]
          //@ts-ignore
          global.loggedInUser = storedUsername
          console.log("current Date: " + currentDate);
          console.log("stored date: " + storedDate);
          console.log("username: " + value[1][1])
        /*  if(currentDate < storedDate){
            navigation.replace('Home', {
              username: storedUsername,
              login: true
          })
          }
        }
      })

    })*/
const InitialLoginPage = ({navigation} : any) => {
    const [login, setLogin] = useState(false);

    const loginExistingUser = () =>{ 
        navigation.replace('ExistingUser')
    }

    const createNewUser = () => {
        navigation.replace('NewUser')
    }
    return (
        <View style={InitialLoginPageStyles.container}>
            <StatusBar  translucent={true} />
            <Image
                style={InitialLoginPageStyles.logo}
                source={require("../assets/ecoFloLogo.png")}
            />
            
            <TouchableOpacity 
                style={InitialLoginPageStyles.joinNowButton}
                onPress={createNewUser}
            >
                <Text style={InitialLoginPageStyles.joinNowText}>
                    Join Now
                </Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={InitialLoginPageStyles.loginButton}
                onPress={loginExistingUser}
            >
                <Text style={InitialLoginPageStyles.loginText}>I have an account </Text>
            </TouchableOpacity>
        </View>
    )
}


export default InitialLoginPage;