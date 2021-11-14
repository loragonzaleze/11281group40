import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {useState} from 'react'

import { StyleSheet, Text, View, TextInput, Button, Dimensions, TouchableHighlight, TouchableOpacity} from 'react-native';
import axios from 'axios'
import { NativeStackNavigationProp} from '@react-navigation/native-stack'
import { RootStackParamList } from '../App';
import styles from "../stylesFolder/styles"
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useContext } from 'react';
import EmissionStyles from '../stylesFolder/EmissionStyles';
import EmissionCalculatorPage from './EmissionCalculatorPage'



const FinalizeCarPage = ({ navigation} : any) => {

    function displayTouchable(count: number)
    {
        let content = [];
        for(var i = 0; i < count; i++)
        {
            const item = global.arr[i];
            content.push(<TouchableOpacity 
                style={EmissionStyles.detailsTouchable}
                onPress={() => {
                    global.CarEmissionRate = item.emissionRate;
                    navigation.navigate('EmissionCalculatorPage')
                }}
                >
                <Text style={EmissionStyles.detailsText}>
                    Manufacturer - {global.CarMake}, Model - {global.CarModel},{"\n"}
                    Vehicle Class - {item.vehicleClass}, Engine Size - {item.engineSize} L,{"\n"}
                    Cylinders - {item.cylinders}, Transmission - {item.transmission},{"\n"}
                    Emission Rate - {item.emissionRate} g/km
                </Text>
                </TouchableOpacity>);
                content.push(<View style={EmissionStyles.spacer}/>)
        }

        return content;
    }
    



    return (
        <View style={EmissionStyles.container}>
            <Text style={EmissionStyles.header}>Select Car Details</Text>
            <View style={EmissionStyles.spacer}/>
            {displayTouchable(global.arr.length)}
            
        </View>
    )
}


export default FinalizeCarPage;