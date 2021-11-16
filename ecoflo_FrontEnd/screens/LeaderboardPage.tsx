import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useRef } from 'react';
import {useState} from 'react'

import { StyleSheet, Text, View, TextInput, Button, Dimensions, TouchableOpacity, ActivityIndicator, Image} from 'react-native';
import axios from 'axios'
import { NativeStackNavigationProp} from '@react-navigation/native-stack'
import { RootStackParamList } from '../App';
import styles from "../stylesFolder/styles"
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useContext } from 'react';
import EmissionStyles from '../stylesFolder/EmissionStyles';
import LeaderboardStyles from '../stylesFolder/LeaderboardStyles';
import UserProfilePageStyles from '../stylesFolder/UserProfilePageStyles';


const LeaderboardPage = () => {
    const [APICall, setAPICall] = useState(true);
    const [usernames, setUsername] = useState([]);
    const [steps, setSteps] = useState([]);
    useEffect(() => {
        const url = "https://loginapitest.herokuapp.com/api/steps/leaderboard/";
        axios.get(url).then((user) => {
            setUsername(user.data.users);
            setSteps(user.data.steps);
            setAPICall(false)
        })
        .catch(err => {
            console.error("Error getting leaderboard data");
            console.error(err)
        })
        return
    }, [0,0,0,0,0,0,0,0,0,0])

    return (
        <View style={LeaderboardStyles.container}>
            <View style={LeaderboardStyles.top}>

            </View>
            <View style={LeaderboardStyles.rows}>
                <View style={LeaderboardStyles.rank}>
                    <Text>Rank</Text>
                </View>
                <View style={LeaderboardStyles.pfp}>

                </View>
                <View style={LeaderboardStyles.userName}>
                    <Text>User</Text>
                </View>
                <View style={LeaderboardStyles.Steps}>
                    <Text>Steps</Text>
                </View>
                <View style={LeaderboardStyles.CO2}>
                    <Text style={LeaderboardStyles.text}>CO2 Saved (g)</Text>
                </View>
            </View>
            <View style={LeaderboardStyles.rows}>
            <View style={LeaderboardStyles.rank}>
                    <Text style={LeaderboardStyles.RankText}>1</Text>
                </View>
                <View style={LeaderboardStyles.pfp}>
                <Image
                style={LeaderboardStyles.pfpImage}
                source={require("../assets/defaultPFP.png")}
            />
                </View>
                <View style={LeaderboardStyles.userName}>
                {APICall ? <ActivityIndicator size="small"/> : <Text style={LeaderboardStyles.UserNameText}>{usernames[0]}</Text>}
                </View>
                <View style={LeaderboardStyles.Steps}>
                {APICall ? <ActivityIndicator size="small"/> : <Text style={LeaderboardStyles.StepsText}>{steps[0]}</Text>}
                </View>
                <View style={LeaderboardStyles.CO2}>
                {APICall ? <ActivityIndicator size="small"/> : <Text style={LeaderboardStyles.CO2Text}>{(steps[0]*404/2250).toFixed(1)}</Text>}
                </View>
            </View>
            <View style={LeaderboardStyles.rows}>
            <View style={LeaderboardStyles.rank}>
                    <Text style={LeaderboardStyles.RankText}>2</Text>
                </View>
                <View style={LeaderboardStyles.pfp}>
                <Image
                style={LeaderboardStyles.pfpImage}
                source={require("../assets/defaultPFP.png")}
            />
                </View>
                <View style={LeaderboardStyles.userName}>
                {APICall ? <ActivityIndicator size="small"/> : <Text style={LeaderboardStyles.UserNameText}>{usernames[1]}</Text>}
                </View>
                <View style={LeaderboardStyles.Steps}>
                {APICall ? <ActivityIndicator size="small"/> : <Text style={LeaderboardStyles.StepsText}>{steps[1]}</Text>}
                </View>
                <View style={LeaderboardStyles.CO2}>
                {APICall ? <ActivityIndicator size="small"/> : <Text style={LeaderboardStyles.CO2Text}>{(steps[1]*404/2250).toFixed(1)}</Text>}
                </View>
            </View>
            <View style={LeaderboardStyles.rows}>
            <View style={LeaderboardStyles.rank}>
                    <Text style={LeaderboardStyles.RankText}>3</Text>
                </View>
                <View style={LeaderboardStyles.pfp}>
                <Image
                style={LeaderboardStyles.pfpImage}
                source={require("../assets/defaultPFP.png")}
            />
                </View>
                <View style={LeaderboardStyles.userName}>
                {APICall ? <ActivityIndicator size="small"/> : <Text style={LeaderboardStyles.UserNameText}>{usernames[2]}</Text>}
                </View>
                <View style={LeaderboardStyles.Steps}>
                {APICall ? <ActivityIndicator size="small"/> : <Text style={LeaderboardStyles.StepsText}>{steps[2]}</Text>}
                </View>
                <View style={LeaderboardStyles.CO2}>
                {APICall ? <ActivityIndicator size="small"/> : <Text style={LeaderboardStyles.CO2Text}>{(steps[2]*404/2250).toFixed(1)}</Text>}
                </View>
            </View>
            <View style={LeaderboardStyles.rows}>
            <View style={LeaderboardStyles.rank}>
                    <Text style={LeaderboardStyles.RankText}>4</Text>
                </View>
                <View style={LeaderboardStyles.pfp}>
                <Image
                style={LeaderboardStyles.pfpImage}
                source={require("../assets/defaultPFP.png")}
            />
                </View>
                <View style={LeaderboardStyles.userName}>
                {APICall ? <ActivityIndicator size="small"/> : <Text style={LeaderboardStyles.UserNameText}>{usernames[3]}</Text>}
                </View>
                <View style={LeaderboardStyles.Steps}>
                {APICall ? <ActivityIndicator size="small"/> : <Text style={LeaderboardStyles.StepsText}>{steps[3]}</Text>}
                </View>
                <View style={LeaderboardStyles.CO2}>
                {APICall ? <ActivityIndicator size="small"/> : <Text style={LeaderboardStyles.CO2Text}>{(steps[3]*404/2250).toFixed(1)}</Text>}
                </View>
            </View>
            <View style={LeaderboardStyles.rows}>
            <View style={LeaderboardStyles.rank}>
                    <Text style={LeaderboardStyles.RankText}>5</Text>
                </View>
                <View style={LeaderboardStyles.pfp}>
                <Image
                style={LeaderboardStyles.pfpImage}
                source={require("../assets/defaultPFP.png")}
            />
                </View>
                <View style={LeaderboardStyles.userName}>
                {APICall ? <ActivityIndicator size="small"/> : <Text style={LeaderboardStyles.UserNameText}>{usernames[4]}</Text>}
                </View>
                <View style={LeaderboardStyles.Steps}>
                {APICall ? <ActivityIndicator size="small"/> : <Text style={LeaderboardStyles.StepsText}>{steps[4]}</Text>}
                </View>
                <View style={LeaderboardStyles.CO2}>
                {APICall ? <ActivityIndicator size="small"/> : <Text style={LeaderboardStyles.CO2Text}>{(steps[4]*404/2250).toFixed(1)}</Text>}
                </View>
            </View>
            <View style={LeaderboardStyles.rows}>
            <View style={LeaderboardStyles.rank}>
                    <Text style={LeaderboardStyles.RankText}>6</Text>
                </View>
                <View style={LeaderboardStyles.pfp}>
                <Image
                style={LeaderboardStyles.pfpImage}
                source={require("../assets/defaultPFP.png")}
            />
                </View>
                <View style={LeaderboardStyles.userName}>
                {APICall ? <ActivityIndicator size="small"/> : <Text style={LeaderboardStyles.UserNameText}>{usernames[5]}</Text>}
                </View>
                <View style={LeaderboardStyles.Steps}>
                {APICall ? <ActivityIndicator size="small"/> : <Text style={LeaderboardStyles.StepsText}>{steps[5]}</Text>}
                </View>
                <View style={LeaderboardStyles.CO2}>
                {APICall ? <ActivityIndicator size="small"/> : <Text style={LeaderboardStyles.CO2Text}>{(steps[5]*404/2250).toFixed(1)}</Text>}
                </View>
            </View>
            <View style={LeaderboardStyles.rows}>
            <View style={LeaderboardStyles.rank}>
                    <Text style={LeaderboardStyles.RankText}>7</Text>
                </View>
                <View style={LeaderboardStyles.pfp}>
                <Image
                style={LeaderboardStyles.pfpImage}
                source={require("../assets/defaultPFP.png")}
            />
                </View>
                <View style={LeaderboardStyles.userName}>
                {APICall ? <ActivityIndicator size="small"/> : <Text style={LeaderboardStyles.UserNameText}>{usernames[6]}</Text>}
                </View>
                <View style={LeaderboardStyles.Steps}>
                {APICall ? <ActivityIndicator size="small"/> : <Text style={LeaderboardStyles.StepsText}>{steps[6]}</Text>}
                </View>
                <View style={LeaderboardStyles.CO2}>
                {APICall ? <ActivityIndicator size="small"/> : <Text style={LeaderboardStyles.CO2Text}>{(steps[6]*404/2250).toFixed(1)}</Text>}
                </View>
            </View>
            <View style={LeaderboardStyles.rows}>
            <View style={LeaderboardStyles.rank}>
                    <Text style={LeaderboardStyles.RankText}>8</Text>
                </View>
                <View style={LeaderboardStyles.pfp}>
                <Image
                style={LeaderboardStyles.pfpImage}
                source={require("../assets/defaultPFP.png")}
            />
                </View>
                <View style={LeaderboardStyles.userName}>
                {APICall ? <ActivityIndicator size="small"/> : <Text style={LeaderboardStyles.UserNameText}>{usernames[7]}</Text>}
                </View>
                <View style={LeaderboardStyles.Steps}>
                {APICall ? <ActivityIndicator size="small"/> : <Text style={LeaderboardStyles.StepsText}>{steps[7]}</Text>}
                </View>
                <View style={LeaderboardStyles.CO2}>
                {APICall ? <ActivityIndicator size="small"/> : <Text style={LeaderboardStyles.CO2Text}>{(steps[7]*404/2250).toFixed(1)}</Text>}
                </View>
            </View>
            <View style={LeaderboardStyles.rows}>
            <View style={LeaderboardStyles.rank}>
                    <Text style={LeaderboardStyles.RankText}>9</Text>
                </View>
                <View style={LeaderboardStyles.pfp}>
                <Image
                style={LeaderboardStyles.pfpImage}
                source={require("../assets/defaultPFP.png")}
            />
                </View>
                <View style={LeaderboardStyles.userName}>
                {APICall ? <ActivityIndicator size="small"/> : <Text style={LeaderboardStyles.UserNameText}>{usernames[8]}</Text>}
                </View>
                <View style={LeaderboardStyles.Steps}>
                {APICall ? <ActivityIndicator size="small"/> : <Text style={LeaderboardStyles.StepsText}>{steps[8]}</Text>}
                </View>
                <View style={LeaderboardStyles.CO2}>
                {APICall ? <ActivityIndicator size="small"/> : <Text style={LeaderboardStyles.CO2Text}>{(steps[8]*404/2250).toFixed(1)}</Text>}
                </View>
            </View>
            <View style={LeaderboardStyles.rows}>
            <View style={LeaderboardStyles.rank}>
                    <Text style={LeaderboardStyles.RankText}>10</Text>
                </View>
                <View style={LeaderboardStyles.pfp}>
                <Image
                style={LeaderboardStyles.pfpImage}
                source={require("../assets/defaultPFP.png")}
            />
                </View>
                <View style={LeaderboardStyles.userName}>
                {APICall ? <ActivityIndicator size="small"/> : <Text style={LeaderboardStyles.UserNameText}>{usernames[9]}</Text>}
                </View>
                <View style={LeaderboardStyles.Steps}>
                {APICall ? <ActivityIndicator size="small"/> : <Text style={LeaderboardStyles.StepsText}>{steps[9]}</Text>}
                </View>
                <View style={LeaderboardStyles.CO2}>
                {APICall ? <ActivityIndicator size="small"/> : <Text style={LeaderboardStyles.CO2Text}>{(steps[9]*404/2250).toFixed(1)}</Text>}
                </View>
            </View>
        </View>
    )
}


export default LeaderboardPage;