import React, { useEffect } from 'react';

import { StyleSheet, Text, View, TextInput, Button, Dimensions} from 'react-native';
import styles from "../stylesFolder/styles"
import MapView, {Callout, PROVIDER_GOOGLE} from 'react-native-maps';
import { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import {useState} from 'react'
import axios from 'axios';
import MapStyles from "../stylesFolder/MapStyles"




const Map = () => {

    const [latitude, setLatitude] = useState(0.0)
    const [longitude, setLongitude] = useState(0.0)
    const [located, setLocated] = useState(false)
    const [hazardousFacilities, setHazardousFacilities] = useState([])
    const [wasteFaciliites, setWasteFacilities] = useState([])
    const [hazardCoordinates, setHazardCoordinates] = useState([])
    const [wasteCoordinates, setWasteCoordinates] = useState([])

    class Facility {
        facilityName: string;
        facilityAddress: string;
        facilityCity: string;
        facilityZip: number;
        facilityLatitude: number;
        facilityLongitude: number;

        constructor(_facilityName: string, _facilityAddress: string, _facilityCity: string, _facilityZip: number, _facilityLatitude: number, _facilityLongitude: number) {
            this.facilityName = _facilityName;
            this.facilityAddress = _facilityAddress;
            this.facilityCity = _facilityCity;
            this.facilityZip = _facilityZip;
            this.facilityLatitude = _facilityLatitude;
            this.facilityLongitude = _facilityLongitude;
        }
    }
   
    useEffect(() => {
        getLocation()
        retrieveHazardousLocations()
        retrieveWasteLocations()
    },[])

    async function retrieveWasteLocations() {
        let apiWasteCall = 'https://ca.dep.state.fl.us/arcgis/rest/services/OpenData/DWM_WASTE_ICR_BACKG/MapServer/6/query?where=1%3D1&outFields=NAME,ADDRESS,CITY,ZIP5,COUNTY,STATUS_DESCRIPTION,LAT_DD,LAT_MM,LAT_SS,LONG_DD,LONG_MM,LONG_SS,LAT_DECIMAL_DEGREE,LONG_DECIMAL_DEGREE,DATE_CLOSED,AUTH_CONTACT_NAME,AUTH_CONTACT_PHONE,WASTE_TYPE&outSR=4326&f=json'
        var tempArr = new Array();
        var tempCoord = new Array();
        axios.get(apiWasteCall).then((facilities) => {
            for(var i = 0; i < facilities.data.features.length; i++) {
                if (i == 0 || facilities.data.features[i].attributes.NAME != facilities.data.features[i-1].attributes.NAME) {  
                    var temp = new Facility(facilities.data.features[i].attributes.NAME, facilities.data.features[i].attributes.ADDRESS, facilities.data.features[i].attributes.CITY, facilities.data.features[i].attributes.ZIP5, facilities.data.features[i].geometry.y, facilities.data.features[i].geometry.x);
                    tempArr.push(temp);
                }
            }
            setWasteFacilities(tempArr)
            
            tempArr.forEach((facility) => {

                var facility_ = {
                    name : facility.facilityName,
                    address : facility.facilityAddress,
                    city : facility.facilityCity,
                    zip : facility.facilityZip,
                    coordinate : {
                        latitude: facility.facilityLatitude,
                        longitude: facility.facilityLongitude
                    }
                    
                }
                tempCoord.push(facility_)
            })
            setWasteCoordinates(tempCoord)
        })
    }

    async function retrieveHazardousLocations() {
        let apiWasteCall = 'https://ca.dep.state.fl.us/arcgis/rest/services/OpenData/CHAZ/MapServer/3/query?where=1%3D1&outFields=*&geometry=&geometryType=esriGeometryEnvelope&inSR=4326&spatialRel=esriSpatialRelIntersects&outSR=4326&f=json'
        var tempArr = new Array();
        var tempCoord = new Array();
        axios.get(apiWasteCall).then((facilities) => {
            for(var i = 0; i < facilities.data.features.length; i++) {
                var temp = new Facility(facilities.data.features[i].attributes.NAME, facilities.data.features[i].attributes.ADDRESS, facilities.data.features[i].attributes.CITY, facilities.data.features[i].attributes.ZIP5, facilities.data.features[i].geometry.y, facilities.data.features[i].geometry.x);
                tempArr.push(temp);
            }
            setHazardousFacilities(tempArr)
            
            tempArr.forEach((facility) => {

                var facility_ = {
                    name : facility.facilityName,
                    address : facility.facilityAddress,
                    city : facility.facilityCity,
                    zip : facility.facilityZip,
                    coordinate : {
                        latitude: facility.facilityLatitude,
                        longitude: facility.facilityLongitude
                    }
                    
                }
                tempCoord.push(facility_)
            })
            setHazardCoordinates(tempCoord)
        })
    }
    
    async function getLocation() {
      
        let{status} = await Location.requestForegroundPermissionsAsync();
        if(status !== 'granted'){
            console.error("Error getting permissions")
            return;
        }
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
                   {hazardCoordinates.map(facility => (
                        <Marker
                            coordinate={facility.coordinate}
                            pinColor='purple'
                            title={facility.name}
                        >
                            <Callout style={MapStyles.plainView}>
                                <View>
                                    <Text adjustsFontSizeToFit>{facility.name}</Text>
                                    <Text adjustsFontSizeToFit>{facility.address + ', ' + facility.city + ", FL, " + facility.zip}</Text>
                                </View>
                            </Callout>
                        </Marker>
                    ))}
                    {wasteCoordinates.map(facility => (
                        <MapView.Marker
                            coordinate={facility.coordinate}
                            pinColor='green'
                            title={facility.name} 
                        >
                            <Callout style={MapStyles.plainView}>
                                <View>
                                    <Text adjustsFontSizeToFit>{facility.name}</Text>
                                    <Text adjustsFontSizeToFit>{facility.address + ', ' + facility.city + ", FL, " + facility.zip}</Text>
                                </View>
                            </Callout>
                        </MapView.Marker>
                    ))}
            </MapView> :  
            <MapView style={styles.map}/>}
        </View>
        
    );
}

export default Map;