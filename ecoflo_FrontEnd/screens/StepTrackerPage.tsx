import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {useState} from 'react'
import { Pedometer } from 'expo-sensors';
import { StyleSheet, Text, View, TextInput, Button, Dimensions, TouchableWithoutFeedback, TouchableOpacity} from 'react-native';
import axios from 'axios'
import { NativeStackNavigationProp} from '@react-navigation/native-stack'
import { RootStackParamList } from '../App';
import styles from "../stylesFolder/styles"
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useContext } from 'react';
import LoginPage from './LoginPage';
import EmissionStyles from '../stylesFolder/EmissionStyles';


export default class StepTrackerPage extends React.Component{
  
    state = {
        isPedometerAvailable: 'checking',
        pastStepCount: 0,
        currentStepCount: 0,
        pastWeekStepCount: 0,
      };
  _subscription: any;
    
      componentDidMount() {
        this._subscribe();
      }
    
      componentWillUnmount() {
        this._unsubscribe();
      }
    
      _subscribe = () => {
        this._subscription = Pedometer.watchStepCount(result => {
          this.setState({
            currentStepCount: result.steps,
          });
        });
    
        Pedometer.isAvailableAsync().then(
          result => {
            this.setState({
              isPedometerAvailable: String(result),
            });
          },
          error => {
            this.setState({
              isPedometerAvailable: 'Could not get isPedometerAvailable: ' + error,
            });
          }
        );
    
        const end = new Date();
        const start1 = new Date();
        const start2 = new Date();
        start2.setHours(0, 0, 0, 0);
        start1.setHours(0, 0, 0, 0);
        start1.setDate(start1.getDate()-start1.getDay());
        Pedometer.getStepCountAsync(start2, end).then(
          result => {
            this.setState({ pastStepCount: result.steps });
          },
          error => {
            this.setState({
              pastStepCount: 'Could not get stepCount: ' + error,
            });
          }
          
        );
        Pedometer.getStepCountAsync(start1, end).then(
          result => {
            this.setState({ pastWeekStepCount: result.steps });
            axios.post('https://loginapitest.herokuapp.com/api/steps/', {
          "username":global.userId,
          "date":start1,
          "steps":this.state.pastWeekStepCount
        }).then(async (res) => {
            console.log("Weekly Steps Updated")
        })
        .catch((error) => {
        console.log("error has occured 4")
        console.log(error)
        })
          },
          error => {
            this.setState({
              pastWeekStepCount: 'Could not get past week stepCount: ' + error,
            });
          }
          
        );
      };
    
      _unsubscribe = () => {
        this._subscription && this._subscription.remove();
        this._subscription = null;
      };
    
      render() {
        return (
          <View style={EmissionStyles.container2}>
            <Text style={EmissionStyles.stepsText}>{this.state.pastStepCount + this.state.currentStepCount}</Text>
            <Text style={EmissionStyles.stepsText2}>Steps</Text>
            <View style={EmissionStyles.spacer}></View>
            <View style={EmissionStyles.spacer}></View>
            <View style={EmissionStyles.container3}>
              <View style={EmissionStyles.container2}>
              <TouchableOpacity style={EmissionStyles.StepDataBox} disabled={true}>
              <Text style={EmissionStyles.stepsText3}>Calories Burnt</Text>
              <Text style={EmissionStyles.stepsText2}>{((this.state.pastStepCount + this.state.currentStepCount)*.04).toFixed(1)} cal</Text>
              </TouchableOpacity>
              </View>
              <View style={EmissionStyles.container2}>
              <TouchableOpacity style={EmissionStyles.StepDataBox} disabled={true}>
              <Text style={EmissionStyles.stepsText3}>Distance travelled</Text>
              <Text style={EmissionStyles.stepsText2}>{((this.state.pastStepCount + this.state.currentStepCount)/2250).toFixed(2)} miles</Text>
              </TouchableOpacity>
              </View>
            </View>
            <View style={EmissionStyles.spacer}></View>
            <View style={EmissionStyles.container3}>
              <View style={EmissionStyles.container2}>
              <TouchableOpacity style={EmissionStyles.StepDataBox} disabled={true}>
              <Text style={EmissionStyles.stepsText3}>CO2 Emissions saved</Text>
              <Text style={EmissionStyles.stepsText2}>{(((this.state.pastStepCount + this.state.currentStepCount)/2250)*404).toFixed(1)} g</Text>
              </TouchableOpacity>
              </View>
              <View style={EmissionStyles.container2}>
              <TouchableOpacity style={EmissionStyles.StepDataBox} disabled={true}>
              <Text style={EmissionStyles.stepsText3}>This week's Steps</Text>
              <Text style={EmissionStyles.stepsText2}>{this.state.pastWeekStepCount + this.state.currentStepCount} steps</Text>
              </TouchableOpacity>
              </View>
            </View>
          </View>
        );
      }
    }