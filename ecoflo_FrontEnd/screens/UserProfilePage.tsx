import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import {useState} from 'react'

import { StyleSheet, Text, View, TextInput, Button, Dimensions, Image} from 'react-native';
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from "../stylesFolder/styles"
import UserProfilePageStyles from '../stylesFolder/UserProfilePageStyles';
import {useIsFocused} from '@react-navigation/native'




const UserProfilePage = () => {
    const isFocused = useIsFocused();
    const [username, setUsername] = useState('')
    const [emissions, setEmissions] = useState(0)
    const [arr, setArr] = useState([] as number[])
    




    useEffect(() => {
        
        AsyncStorage.getItem('Username').then(user => {
            setUsername(user!)
            let apiCall = 'https://loginapitest.herokuapp.com/api/emissions/pastweek?username=' + user
            axios.get(apiCall).then((user) => {
                if(user.data.success){
                        const emissionNums = user.data.emissions.map(data => data.emissions)
                        setArr(emissionNums)
                        setEmissions(user.data.emissions[0].emissions)
                        console.log(emissions)
                        console.log("successfully got user data")
                    
                
                }
            })
            .catch(err => {
                console.error("Error retrieving data");
            })
        })

         
  
    }, [isFocused])
    return (
        <View style={UserProfilePageStyles.container}>
            <StatusBar  translucent={true} />
            <Image
                style={UserProfilePageStyles.pfp}
                source={require("../assets/defaultPFP.png")}
            />
            <Text>This will be the  user profile screen</Text>
            <Text>This is the username : {username}</Text>
            <Text>{emissions}</Text>
            <Text>The first element in the array: {arr[2]}</Text>
        </View>
    )
}


export default UserProfilePage;