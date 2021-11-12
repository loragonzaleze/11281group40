import { StatusBar } from 'expo-status-bar';
import React, { useContext, useEffect } from 'react';
import {useState} from 'react'

import { StyleSheet, Text, View, TextInput, Button, Dimensions} from 'react-native';
import axios from 'axios'
import { NativeStackNavigationProp} from '@react-navigation/native-stack'
import { RootStackParamList } from '../App';
import styles from "../stylesFolder/styles"
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UserProfilePage from './UserProfilePage'
import LeaderboardPage from './LeaderboardPage';
import EmissionsPage from './EmissionsPage';
import Map from './Map';
import Icon from 'react-native-vector-icons/Feather'
import {BlurView} from 'expo-blur'

const Tab = createBottomTabNavigator();
const HomePage = ({route, navigation} : any) => {
    let user = global.loggedInUser
    return (
            <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size, focused}) => {
                  const icons = {
                    User: 'user',
                    Leaderboard: 'globe',
                    Map: 'map-pin',
                    TrackEmissions: 'cloud'
                  };
                  return (
                    focused ? 
                    <Icon
                      name={icons[route.name]}
                      color={'#000000'}
                      size={size}
                    /> : 
                    <Icon
                      name={icons[route.name]}
                      color={'#00694d'}
                      size={size}
                    /> 
                  );
                },
                
                tabBarLabel: ({focused}) => {
                    const routes = {
                        User:<Text>{global.loggedInUser}</Text>,
                        TrackEmissions: <Text>Emissions</Text>,
                        Leaderboard: <Text>Leaderboard</Text>,
                        Map: <Text>Map</Text>
                    }
                    return routes[route.name]

                },
               
              })}
            >
                <Tab.Screen 
                    name = "User"
                    component={UserProfilePage}
                    options={{
                        headerShown: false
                    }}
                ></Tab.Screen>
                <Tab.Screen options={{headerShown: true}} name = "TrackEmissions" component={EmissionsPage}></Tab.Screen>
                <Tab.Screen name = "Leaderboard" component={LeaderboardPage}></Tab.Screen>
                <Tab.Screen name  = "Map" component={Map}></Tab.Screen>
            </Tab.Navigator>
    )
}

HomePage.navigationOptions = {
    headerLeft: () => {
        return null;
    }
}
export default HomePage;