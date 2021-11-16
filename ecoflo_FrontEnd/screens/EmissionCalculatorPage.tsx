import React from 'react';
import {useState} from 'react'

import { StyleSheet, Text, View, TextInput, TouchableWithoutFeedback, TouchableOpacity, Keyboard} from 'react-native';
import axios from 'axios'
import EmissionStyles from '../stylesFolder/EmissionStyles';


const EmissionCalculatorPage = ({ navigation} : any) => {

    const [number, onChangeNumber] = React.useState('');
    const [text, setText] = useState("Total Emissions");
    var result: number = 0;

    const Calculate = () =>
    {
        if(number != undefined && number != '')
        {
            result = 1.6*parseInt(number)*global.CarEmissionRate;
            setText((result. toFixed(1)).toString() + " g of CO2");
        }
    }

    const SelectNewCar = () => {
        navigation.navigate('SelectCarPage');
    }

    const UpdateEmissionData = () => {
        console.log(global.userId + " - " + result)
        if(number != undefined && number != '')
        {
        result = 1.6*parseInt(number)*global.CarEmissionRate;
        var currDate = new Date();
        axios.post('https://loginapitest.herokuapp.com/api/emissions/', {
          "username":global.userId,
          "date":currDate,
          "emissions":result.toFixed(0)
        }).then(async (res) => {
            console.log("Emission Data added for " + currDate)
            console.log(res) 
        })
        .catch((error) => {
        console.log("error has occured 5")
        console.log(error)
        })
    }
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
            <View style={EmissionStyles.container5}> 
            <TouchableOpacity style={EmissionStyles.Button2} onPress={SelectNewCar}>
                <Text style={EmissionStyles.buttonText2}>Select a New Car</Text>
            </TouchableOpacity>
            <TouchableOpacity style={EmissionStyles.Button2} onPress={UpdateEmissionData}>
                <Text style={EmissionStyles.buttonText2}>Add Data to Profile</Text>
            </TouchableOpacity>
            </View>
        </View>
        </TouchableWithoutFeedback>
        
    )
}


export default EmissionCalculatorPage;