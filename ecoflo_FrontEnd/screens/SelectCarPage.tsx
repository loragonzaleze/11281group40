import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, Dimensions, TouchableHighlight, Alert} from 'react-native';
import type {PickerItem} from 'react-native-woodpicker'
import {Picker} from 'react-native-woodpicker'
import axios from 'axios'
import { NativeStackNavigationProp} from '@react-navigation/native-stack'
import { RootStackParamList } from '../App';
import styles from "../stylesFolder/styles"
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useContext } from 'react';
import LoginPage from './LoginPage';
import EmissionData from '../datasets/FuelEmissions.json';
const windowWidth = Dimensions.get('screen').width



const SelectCarPage = () => {

    

    class Models {
        vehicleClass: string;
        engineSize: number;
        cylinders: number;
        transmission: string;
        emissionRate: number;

        constructor(_vehicleClass: string, _engineSize: number, _cylinders: number, _transmission: string, _emissionRate: number) {
            this.vehicleClass = _vehicleClass;
            this.engineSize = _engineSize;
            this.cylinders = _cylinders;
            this.transmission = _transmission;
            this.emissionRate = _emissionRate;
        }


    }


    let CarMap = new Map<string, Map<string, Array<Models>>>();
    var keys = new Array<string> ();
    for(var i = 0; i < EmissionData.length; i++)
    {
        if(!CarMap.has(EmissionData[i].Make))
        {
            var x = new Array<Models>(new Models(EmissionData[i].VehicleClass, EmissionData[i].EngineSize , EmissionData[i].Cylinders , EmissionData[i].Transmission , EmissionData[i].CO2Emissions));
            var m = new Map<string, Array<Models>>();
            m.set(EmissionData[i].Model, x)
            CarMap.set(EmissionData[i].Make, m);
            keys.push(EmissionData[i].Make);
        }
        else
        {
            var m = CarMap.get(EmissionData[i].Make);
            if(!m.has(EmissionData[i].Model))
            {
                var x = new Array<Models>(new Models(EmissionData[i].VehicleClass, EmissionData[i].EngineSize , EmissionData[i].Cylinders , EmissionData[i].Transmission , EmissionData[i].CO2Emissions));
                m.set(EmissionData[i].Model, x)
                CarMap.set(EmissionData[i].Make, m);
            }
            else
            {
                var y = m.get(EmissionData[i].Model);
                y.push(new Models(EmissionData[i].VehicleClass, EmissionData[i].EngineSize , EmissionData[i].Cylinders , EmissionData[i].Transmission , EmissionData[i].CO2Emissions));
                m.set(EmissionData[i].Model, y)
                CarMap.set(EmissionData[i].Make, m);
            }
        }
    }


    const [pickedData, setPickedData] = useState<PickerItem>();
    const data = new Array<PickerItem>();
    for(var i = 0; i < keys.length; i++) {
        data.push({label: keys[i], value: keys[i]})
    }

    function getModels(maker: string)
    {
        var x = CarMap.get(maker);
        let keys = [];
        for (let key of x) {
            keys.push(key);
        }
        keys = Array.from( x.keys() );
        var modelKeys = new Array<string> ();
        modelKeys = keys;
        return modelKeys;
    }

    const [pickedData2, setPickedData2] = useState<PickerItem>();
    const data2 = new Array<PickerItem>();

    function setPicker2Values(maker)
    {
        if(maker != "" && maker != undefined)
        {
            var modelKeys = getModels(maker);
            for(var i = 0; i < modelKeys.length; i++) {
                data2.push({label: modelKeys[i], value: modelKeys[i]});

            }
        }
        else
        {

            data.push({label: "Select the Manufacturer", value: -1});
        }
    }


    function ConfirmMakeAndModel() {
        Alert.alert('Button Pressed! Implementation Pending!');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Select Make and Model of your Car</Text>
            
            <View style={styles.spacer}/>


            <Picker
                style={styles.picker}
                item={pickedData}
                items={data}
                onItemChange={setPickedData}
                title="Select Make"
                placeholder="Select Make"
                isNullable
            />
            <View style={styles.spacer}/>


            {
                setPicker2Values(pickedData?.value)
            }
            
            <Picker
                style={styles.picker}
                item={pickedData2}
                items={data2}
                onItemChange={setPickedData2}
                title="Select Model"
                placeholder="Select Model"
                isNullable
            />
            <View style={styles.spacer}/>

            <TouchableHighlight style={styles.button}>
            <Button title="CONFIRM" onPress={ConfirmMakeAndModel} />
            </TouchableHighlight>


        </View>
        
    )
}


export default SelectCarPage;