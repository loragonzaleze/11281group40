import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {useState} from 'react'

import { StyleSheet, Text, View, TextInput, Button, Dimensions} from 'react-native';
import axios from 'axios'
import { NativeStackNavigationProp} from '@react-navigation/native-stack'
import { RootStackParamList } from '../App';
import styles from "../stylesFolder/styles"
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useContext } from 'react';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';

const Map = () => {

    return (
        <View style={styles.container}>
            <MapView style={styles.map} />
            <Marker
                coordinate={{latitude : 29.653865 , longitude : -82.343551}}
                image={{uri: 'icon'}}
            />
        </View>
        
    );
}

export default Map;