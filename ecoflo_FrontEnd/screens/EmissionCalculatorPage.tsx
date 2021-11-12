import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {useState} from 'react'

import { StyleSheet, Text, View, TextInput, Button, Dimensions, TouchableWithoutFeedback, TouchableOpacity, Keyboard} from 'react-native';
import axios from 'axios'
import { NativeStackNavigationProp} from '@react-navigation/native-stack'
import { RootStackParamList } from '../App';
import styles from "../stylesFolder/styles"
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useContext } from 'react';
import EmissionStyles from '../stylesFolder/EmissionStyles';


const EmissionCalculatorPage = ({ navigation} : any) => {

    const [number, onChangeNumber] = React.useState('');
    const [text, setText] = useState("Total Emissions");

    const Calculate = () =>
    {
        if(number != undefined && number != '')
        {
            var result = 1.6*parseInt(number)*global.CarEmissionRate;
            setText((result. toFixed(1)).toString() + " g of CO2");
        }
    }

    const SelectNewCar = () => {
        navigation.navigate('SelectCarPage');
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={EmissionStyles.container}>
            <Text style={EmissionStyles.header}>Enter Distance Travelled</Text>
            <TextInput
            style={EmissionStyles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="Enter No. of Miles"
            keyboardType="numeric"
            />
            <TouchableOpacity style={EmissionStyles.Button} onPress={Calculate}>
                <Text style={EmissionStyles.buttonText}>Calculate Total Emissions</Text>
            </TouchableOpacity>
            <View style={EmissionStyles.spacer} />
            <View style={EmissionStyles.spacer} />
            <Text style={EmissionStyles.header}>Total CO2 Emission for the Day</Text>
            <TouchableOpacity style={EmissionStyles.output} disabled={true}>
            <Text style={EmissionStyles.outputText}>{text}</Text>
            </TouchableOpacity>
            <View style={EmissionStyles.spacer} />
            <TouchableOpacity style={EmissionStyles.Button2} onPress={SelectNewCar}>
                <Text style={EmissionStyles.buttonText2}>Select a New Car</Text>
            </TouchableOpacity>
        </View>
        </TouchableWithoutFeedback>
        
    )
}


export default EmissionCalculatorPage;