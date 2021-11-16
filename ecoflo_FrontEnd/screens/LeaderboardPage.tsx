import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useRef } from 'react';
import {useState} from 'react'

import { StyleSheet, Text, View, TextInput, Button, Dimensions, TouchableOpacity, ActivityIndicator} from 'react-native';
import axios from 'axios'
import { NativeStackNavigationProp} from '@react-navigation/native-stack'
import { RootStackParamList } from '../App';
import styles from "../stylesFolder/styles"
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useContext } from 'react';
import EmissionStyles from '../stylesFolder/EmissionStyles';


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
        <View style={EmissionStyles.container2}>
            <Text style={EmissionStyles.leaderboardHeader}>Weekly Leaderboard</Text>
            <View style={EmissionStyles.spacer}/>
            <View style={EmissionStyles.container4}>
                <TouchableOpacity style={EmissionStyles.leaderboardSquare} disabled={true}>
                    <Text style={EmissionStyles.Rank}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={EmissionStyles.leaderboardRect} disabled={true}>
                    <TouchableOpacity style={EmissionStyles.invBox2} disabled={true}>
                    {APICall ? <ActivityIndicator size="small"/> : <Text style={EmissionStyles.usernameText}>{usernames[0]}</Text>}
                    </TouchableOpacity>
                    <TouchableOpacity style={EmissionStyles.invBox} disabled={true}>
                    {APICall ? <ActivityIndicator size="small"/> : <Text style={EmissionStyles.stepsText4}>{steps[0]}</Text>}
                        <Text style={EmissionStyles.stepsText5}>Steps</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={EmissionStyles.invBox} disabled={true}>
                    {APICall ? <ActivityIndicator size="small"/> : <Text style={EmissionStyles.stepsText4}>{(steps[0]*404/2250).toFixed(1)}</Text>}
                        <Text style={EmissionStyles.stepsText5}>g of CO2 saved</Text>
                    </TouchableOpacity>
                </TouchableOpacity>
            </View>
            <View style={EmissionStyles.spacer}/>
            <View style={EmissionStyles.container4}>
                <TouchableOpacity style={EmissionStyles.leaderboardSquare} disabled={true}>
                    <Text style={EmissionStyles.Rank}>2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={EmissionStyles.leaderboardRect} disabled={true}>
                <TouchableOpacity style={EmissionStyles.invBox2} disabled={true}>
                {APICall ? <ActivityIndicator size="small"/> : <Text style={EmissionStyles.usernameText}>{usernames[1]}</Text>}
                    </TouchableOpacity>
                    <TouchableOpacity style={EmissionStyles.invBox} disabled={true}>
                    {APICall ? <ActivityIndicator size="small"/> : <Text style={EmissionStyles.stepsText4}>{steps[1]}</Text>}
                        <Text style={EmissionStyles.stepsText5}>Steps</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={EmissionStyles.invBox} disabled={true}>
                    {APICall ? <ActivityIndicator size="small"/> : <Text style={EmissionStyles.stepsText4}>{(steps[1]*404/2250).toFixed(1)}</Text>}
                        <Text style={EmissionStyles.stepsText5}>g of CO2 saved</Text>
                    </TouchableOpacity>
                </TouchableOpacity>
            </View>
            <View style={EmissionStyles.spacer}/>
            <View style={EmissionStyles.container4}>
                <TouchableOpacity style={EmissionStyles.leaderboardSquare} disabled={true}>
                    <Text style={EmissionStyles.Rank}>3</Text>
                </TouchableOpacity>
                <TouchableOpacity style={EmissionStyles.leaderboardRect} disabled={true}>
                <TouchableOpacity style={EmissionStyles.invBox2} disabled={true}>
                {APICall ? <ActivityIndicator size="small"/> : <Text style={EmissionStyles.usernameText}>{usernames[2]}</Text>}
                    </TouchableOpacity>
                    <TouchableOpacity style={EmissionStyles.invBox} disabled={true}>
                    {APICall ? <ActivityIndicator size="small"/> : <Text style={EmissionStyles.stepsText4}>{steps[2]}</Text>}
                        <Text style={EmissionStyles.stepsText5}>Steps</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={EmissionStyles.invBox} disabled={true}>
                    {APICall ? <ActivityIndicator size="small"/> : <Text style={EmissionStyles.stepsText4}>{(steps[2]*404/2250).toFixed(1)}</Text>}
                        <Text style={EmissionStyles.stepsText5}>g of CO2 saved</Text>
                    </TouchableOpacity>
                </TouchableOpacity>
            </View>
            <View style={EmissionStyles.spacer}/>
            <View style={EmissionStyles.container4}>
                <TouchableOpacity style={EmissionStyles.leaderboardSquare} disabled={true}>
                    <Text style={EmissionStyles.Rank}>4</Text>
                </TouchableOpacity>
                <TouchableOpacity style={EmissionStyles.leaderboardRect} disabled={true}>
                <TouchableOpacity style={EmissionStyles.invBox2} disabled={true}>
                {APICall ? <ActivityIndicator size="small"/> : <Text style={EmissionStyles.usernameText}>{usernames[3]}</Text>}
                    </TouchableOpacity>
                    <TouchableOpacity style={EmissionStyles.invBox} disabled={true}>
                        {APICall ? <ActivityIndicator size="small"/> : <Text style={EmissionStyles.stepsText4}>{steps[3]}</Text>}
                        <Text style={EmissionStyles.stepsText5}>Steps</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={EmissionStyles.invBox} disabled={true}>
                        {APICall ? <ActivityIndicator size="small"/> : <Text style={EmissionStyles.stepsText4}>{(steps[3]*404/2250).toFixed(1)}</Text>}
                        <Text style={EmissionStyles.stepsText5}>g of CO2 saved</Text>
                    </TouchableOpacity>
                </TouchableOpacity>
            </View>
            <View style={EmissionStyles.spacer}/>
            <View style={EmissionStyles.container4}>
                <TouchableOpacity style={EmissionStyles.leaderboardSquare} disabled={true}>
                    <Text style={EmissionStyles.Rank}>5</Text>
                </TouchableOpacity>
                <TouchableOpacity style={EmissionStyles.leaderboardRect} disabled={true}>
                <TouchableOpacity style={EmissionStyles.invBox2} disabled={true}>
                {APICall ? <ActivityIndicator size="small"/> : <Text style={EmissionStyles.usernameText}>{usernames[4]}</Text>}
                    </TouchableOpacity>
                    <TouchableOpacity style={EmissionStyles.invBox} disabled={true}>
                        {APICall ? <ActivityIndicator size="small"/> : <Text style={EmissionStyles.stepsText4}>{steps[4]}</Text>}
                        <Text style={EmissionStyles.stepsText5}>Steps</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={EmissionStyles.invBox} disabled={true}>
                        {APICall ? <ActivityIndicator size="small"/> : <Text style={EmissionStyles.stepsText4}>{(steps[4]*404/2250).toFixed(1)}</Text>}
                        <Text style={EmissionStyles.stepsText5}>g of CO2 saved</Text>
                    </TouchableOpacity>
                </TouchableOpacity>
            </View>
            <View style={EmissionStyles.spacer}/>
        </View>
    )
}


export default LeaderboardPage;