import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {useState} from 'react'

import { StyleSheet, Text, View, TextInput, Button, Dimensions, TouchableOpacity} from 'react-native';
import axios from 'axios'
import { NativeStackNavigationProp} from '@react-navigation/native-stack'
import { RootStackParamList } from '../App';
import styles from "../stylesFolder/styles"
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useContext } from 'react';
import EmissionStyles from '../stylesFolder/EmissionStyles';


const LeaderboardPage = () => {

    var user1steps = 50000;
    var user2steps = 40000;
    var user3steps = 30000;
    var user4steps = 20000;
    var user5steps = 10000;




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
                        <Text style={EmissionStyles.usernameText}>Username</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={EmissionStyles.invBox} disabled={true}>
                        <Text style={EmissionStyles.stepsText4}>{user1steps}</Text>
                        <Text style={EmissionStyles.stepsText5}>Steps</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={EmissionStyles.invBox} disabled={true}>
                        <Text style={EmissionStyles.stepsText4}>{(user1steps*404/2250).toFixed(1)}</Text>
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
                        <Text style={EmissionStyles.usernameText}>Username</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={EmissionStyles.invBox} disabled={true}>
                        <Text style={EmissionStyles.stepsText4}>{user2steps}</Text>
                        <Text style={EmissionStyles.stepsText5}>Steps</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={EmissionStyles.invBox} disabled={true}>
                        <Text style={EmissionStyles.stepsText4}>{(user2steps*404/2250).toFixed(1)}</Text>
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
                        <Text style={EmissionStyles.usernameText}>Username</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={EmissionStyles.invBox} disabled={true}>
                        <Text style={EmissionStyles.stepsText4}>{user3steps}</Text>
                        <Text style={EmissionStyles.stepsText5}>Steps</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={EmissionStyles.invBox} disabled={true}>
                        <Text style={EmissionStyles.stepsText4}>{(user3steps*404/2250).toFixed(1)}</Text>
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
                        <Text style={EmissionStyles.usernameText}>Username</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={EmissionStyles.invBox} disabled={true}>
                        <Text style={EmissionStyles.stepsText4}>{user4steps}</Text>
                        <Text style={EmissionStyles.stepsText5}>Steps</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={EmissionStyles.invBox} disabled={true}>
                        <Text style={EmissionStyles.stepsText4}>{(user4steps*404/2250).toFixed(1)}</Text>
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
                        <Text style={EmissionStyles.usernameText}>Username</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={EmissionStyles.invBox} disabled={true}>
                        <Text style={EmissionStyles.stepsText4}>{user5steps}</Text>
                        <Text style={EmissionStyles.stepsText5}>Steps</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={EmissionStyles.invBox} disabled={true}>
                        <Text style={EmissionStyles.stepsText4}>{(user5steps*404/2250).toFixed(1)}</Text>
                        <Text style={EmissionStyles.stepsText5}>g of CO2 saved</Text>
                    </TouchableOpacity>
                </TouchableOpacity>
            </View>
            <View style={EmissionStyles.spacer}/>
        </View>
    )
}


export default LeaderboardPage;