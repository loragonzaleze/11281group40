import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import {useState} from 'react'

import { StyleSheet, Text, View, TextInput, Button, Dimensions, Image} from 'react-native';
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';
import UserProfilePageStyles from '../stylesFolder/UserProfilePageStyles';
import {useIsFocused} from '@react-navigation/native'
import {LineChart} from 'react-native-chart-kit'
import {showMessage} from 'react-native-flash-message'




class UserProfilePage extends React.Component{
    
    constructor(props) {
        super(props)
        this.state = {
            tabInFocus: false,
            username: 'empty',
            pastWeekEmissions: [0, 0, 0, 0, 0, 0, 0, 0],
            pastWeekDays: [],
            reloads: 0,
            blankDaysMap: new Map(),
            daysMap: new Map(),
            firstTime: true

        }
        this.retrieveUserData()

        AsyncStorage.getItem('Username').then(user => {
            this.setState({
                username: user!
            })
        })
    }
    
    componentDidUpdate(){
        this.retrieveUserData()
    }

    componentDidMount() {

        let todaysDate = new Date()
        let allDaysMap = new Map()
        let currDate = new Date(todaysDate)
        for(let i = 7; i > -1; --i){
            currDate.setDate(todaysDate.getDate() - i)
            allDaysMap.set(currDate.toLocaleDateString(), 0)
        }

        this.setState({
            blankDaysMap: allDaysMap
        })
      

    }

    retrieveUserData = async () => {
        let apiCall = 'https://loginapitest.herokuapp.com/api/emissions/pastweek?username=' + this.state.username
            axios.get(apiCall).then((user) => {
                if(user.data.success){
                        const emissionNums = user.data.emissions.map(data => data.emissions).reverse()
                        const dates = user.data.emissions.map(
                            function(data){
                               let date = new Date(data.date)
                               return date.toUTCString()     

                            }
                        ).reverse()
                        this.state.pastWeekEmissions = emissionNums
                        this.state.pastWeekDays = dates
                        let results = {}
                        dates.forEach((day, i) => {
                            let currDate = new Date(day)
                            currDate.setDate(currDate.getDate() + 1)
                            day = currDate.toLocaleDateString()
                            results[day] = emissionNums[i]
                        });
                        let dayMap = new Map(Object.entries(results))
                        this.state.daysMap = dayMap
                        console.log("Sucessfully got user emissions")
                        this.formatEmissionsData()

                }
            })
            .catch(err => {
                console.error("Error retrieving data");
                console.error(err)
            })
    }

    formatEmissionsData = () => {

        let formmatedEmissions = []
        let formattedDays = []
        for (const [key, value] of this.state.blankDaysMap.entries()) {
            if(this.state.daysMap.has(key)){
                formmatedEmissions.push(this.state.daysMap.get(key))
                formattedDays.push(key)
            }
            else{
                formmatedEmissions.push(0)
                formattedDays.push(key)
            }
        }
        if(this.state.firstTime){
            
            this.setState({
                firstTime: false,
                pastWeekEmissions : formmatedEmissions,
                pastWeekDays : formattedDays
            })
            return;
           
        }
        this.state.pastWeekEmissions = formmatedEmissions
        this.state.pastWeekDays = formattedDays
    }


    render() {
        const {isFocused} = this.props
        console.log("From the new render function: " + isFocused)
        console.log("username: " + this.state.username)
        console.log(this.state.pastWeekEmissions)
        console.log(this.state.pastWeekDays)
        return (
            
            <View style={UserProfilePageStyles.container}>
            <StatusBar  translucent={true} />
            <Image
                style={UserProfilePageStyles.pfp}
                source={require("../assets/defaultPFP.png")}
            />
            <Text>{this.state.username}</Text>
            <LineChart
                data={
                    {
                        labels: this.state.pastWeekDays,
                        datasets: [
                            {
                                data: this.state.pastWeekEmissions
                            }
                        ]

                    }
                }
                width={Dimensions.get("window").width}
                height={Dimensions.get("window").height / 2.5}
                yAxisLabel=""
                yAxisSuffix=""
                fromZero={true}
                onDataPointClick={({ value, getColor }) =>{
                     showMessage({
                        message: `${value}`,
                        description: "You selected this value",
                        backgroundColor: getColor(0.5)
                      })
                }} 
                verticalLabelRotation={-65}
                xLabelsOffset={Dimensions.get("window").height / 20}
                chartConfig={{
                    backgroundColor: "#00694d",
                    backgroundGradientFrom: "#00694d",
                    backgroundGradientTo: "#4FBD9F",
                    decimalPlaces: 0, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    style: {
                      borderRadius: 0
                    },
                    propsForDots: {
                      r: "4",
                      strokeWidth: "2",
                      stroke: "#0CEAAD"
                    }	
                  }}
                
                style={{
                marginVertical: 8,
                borderRadius: 16
                }}
            />



           
            
        </View>
        )
    }
 
}

export default function(props){
    const isFocused = useIsFocused()
    return <UserProfilePage {...props} isFocused={isFocused}/>
}


