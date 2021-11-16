import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Dimensions, Image} from 'react-native';
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';
import UserProfilePageStyles from '../stylesFolder/UserProfilePageStyles';
import {useIsFocused} from '@react-navigation/native'
import {LineChart} from 'react-native-chart-kit'
import { Rect, Text as TextSVG, Svg } from "react-native-svg";

interface initialProps {

}

interface initialState {
    tabInFocus: boolean,
    username: string,
    pastWeekEmissions: [0, 0, 0, 0, 0, 0, 0, 0],
    pastWeekDays: [],
    reloads: 0,
    blankDaysMap: any,
    daysMap: any,
    firstTime: boolean,
    dataLabel: object,
    weeklyEmissionsSum: 0

}

class UserProfilePage extends React.Component<initialProps, initialState>{
    constructor(props) {
        super(props)

        let todaysDate = new Date()
        let allDaysMap = new Map()
        let currDate = new Date(todaysDate)
        for(let i = 7; i > -1; --i){
            currDate.setDate(todaysDate.getDate() - i)
            allDaysMap.set(currDate.toLocaleDateString(), 0)
        }
        
        this.state = {
            tabInFocus: false,
            username: 'empty',
            pastWeekEmissions: [0, 0, 0, 0, 0, 0, 0, 0],
            pastWeekDays: [],
            reloads: 0,
            blankDaysMap: allDaysMap,
            daysMap: new Map(),
            firstTime: true,
            dataLabel: {
                x:0,
                y:0,
                clicked:false,
                value:0
            },
            weeklyEmissionsSum: 0
            

        }

        AsyncStorage.getItem('Username').then(user => {
            this.setState({
                username: user!
            })
            this.retrieveUserData()

            global.userId = this.state.username;
        })
    }
    
    componentDidUpdate(){
        this.retrieveUserData()
    }

    componentDidMount() {
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
                        console.log(this.state.daysMap )
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
        const sumEmissions = (emission1, emission2) => emission1 + emission2
        var formmatedEmissions = []
        var formattedDays = []
        if(this.state.firstTime){
            console.log("Printing out initial value of maps")
            console.log(this.state.blankDaysMap)
            console.log(this.state.daysMap)
        }
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
            var weeklySum = formmatedEmissions.reduce(sumEmissions)
            this.setState({
                firstTime: false,
                pastWeekEmissions : formmatedEmissions,
                pastWeekDays : formattedDays,
                weeklyEmissionsSum : weeklySum
            })

            return;
        }
        this.state.weeklyEmissionsSum = formmatedEmissions.reduce(sumEmissions)
        this.state.pastWeekEmissions = formmatedEmissions
        this.state.pastWeekDays = formattedDays
    }


    render() {
        const {isFocused} = this.props
        return (
            
        <View style={UserProfilePageStyles.container}>

            <StatusBar  translucent={true} />
            <View style={UserProfilePageStyles.profileNameView}>
                <Image
                    style={UserProfilePageStyles.pfp}
                    source={require("../assets/defaultPFP.png")}
                />
                <Text style={UserProfilePageStyles.username}>{this.state.username}</Text>
            </View>
            <View style={UserProfilePageStyles.weeklySumView}>
                <Text style={UserProfilePageStyles.title}>Past week's emissions</Text>
                <Text style={UserProfilePageStyles.weeklySum}>{this.state.weeklyEmissionsSum} Grams</Text>

                <Text>Past week's emissions: <Text style={UserProfilePageStyles.weeklySum}>{this.state.weeklyEmissionsSum}</Text></Text>
            </View>
            
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
                onDataPointClick={(data) =>{
                    let samePoint = (this.state.dataLabel.x == data.x && this.state.dataLabel.y == data.y)
                    let prevClicked = this.state.dataLabel.clicked
                    samePoint ? this.setState(
                        {
                            dataLabel : {
                                value: data.value,
                                clicked: !prevClicked,
                            }
                        }) : 
                        this.setState({
                            dataLabel: {
                                x: data.x,
                                y: data.y,
                                value: data.value,
                                clicked: true
                            }
                        }
                    )
                    
                }} 
                verticalLabelRotation={-65}
                xLabelsOffset= {Dimensions.get("window").height / 20}
  
                decorator={() => {
                    return this.state.dataLabel.clicked ? 
                        <Svg>
                        <Rect
                            x={this.state.dataLabel.x - 25}
                            y={this.state.dataLabel.y + 15} 
                            height="30"
                            width="50"
                            fill="#00694d"
                        />
                        <TextSVG
                            x={this.state.dataLabel.x + 0}
                            y={this.state.dataLabel.y + 36}
                            fill="#FFF"
                            fontSize="14"
                            textAnchor="middle"
                        >
                            {this.state.dataLabel.value.toString() + " g"}
                        </TextSVG>

                    </Svg> 
                    : null

                }}
                
                chartConfig={{
                    backgroundColor: "#FFF",
                    backgroundGradientFrom: "#FFF",
                    backgroundGradientTo: "#FFF",
                    decimalPlaces: 0, 
                    
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    style: {
                      borderRadius: 0
                    },
                    propsForDots: {
                      r: "3",
                      strokeWidth: "2",
                      stroke: "#00694d",
                      fill: '#00694d'
                    },
                    fillShadowGradient : "#00694d",
                    fillShadowGradientOpacity: 10,
                    propsForVerticalLabels: {
                        stroke:'black'
                    },
                    propsForHorizontalLabels:{
                        stroke:'black'
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


