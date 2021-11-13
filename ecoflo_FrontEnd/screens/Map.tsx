import React, { useEffect } from 'react';

import { StyleSheet, Text, View, TextInput, Button, Dimensions} from 'react-native';
import styles from "../stylesFolder/styles"
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import {useState} from 'react'




const Map = () => {

    const [latitude, setLatitude] = useState(0.0)
    const [longitude, setLongitude] = useState(0.0)
    const [located, setLocated] = useState(false)

   
    useEffect(() => {
        getLocation()
    })
    
    async function getLocation() {
      
        let location = await Location.getCurrentPositionAsync({accuracy:Location.Accuracy.Highest})
        let latitude_ = location.coords.latitude
        let longitude_ = location.coords.longitude
        let altitude = location.coords.altitude
        
        setLatitude(latitude_)
        setLongitude(longitude_)
        setLocated(true)
        console.log("Latitude: " + latitude + " Longitude: " + longitude + " Altitude: " + altitude)
    }

    return (
        <View style={styles.container}>
            {located ? 
            <MapView 
                style={styles.map} 
                provider={PROVIDER_GOOGLE}
                onPoiClick={(data) => {
                    console.log(data)
                }}
                initialRegion={{
                    latitude: latitude,
                    longitude: longitude,
                    latitudeDelta: 0.02,
                    longitudeDelta: 0.01
                }}>
                    <Marker
                        coordinate={{latitude : latitude , longitude :longitude}}
                        pinColor={'red'}
                    />
            </MapView> :  
            <MapView style={styles.map}/>}
        </View>
        
    );
}

export default Map;