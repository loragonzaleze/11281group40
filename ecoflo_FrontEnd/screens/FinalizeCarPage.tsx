import React from 'react';

import { StyleSheet, Text, View, TextInput, Button, Dimensions, TouchableHighlight, TouchableOpacity} from 'react-native';
import EmissionStyles from '../stylesFolder/EmissionStyles';



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
                <Text><Text style={styles.leftText}>Manufacturer</Text> {global.CarMake}</Text>
                <Text><Text style={styles.leftText}>Model</Text> {global.CarModel}</Text>
                <Text><Text style={styles.leftText}>Vehicle Class</Text> {item.vehicleClass}</Text>
                <Text><Text style={styles.leftText}>Engine Size</Text> {item.engineSize}</Text>
                <Text><Text style={styles.leftText}>Cylinders</Text> {item.cylinders}</Text>
                <Text><Text style={styles.leftText}>Transmission</Text> {item.transmission}</Text>
                <Text><Text style={styles.leftText}>Emission Rate</Text> {item.emissionRate} g/km</Text>
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

const styles = StyleSheet.create({
    leftText: {
        fontWeight: '600'
    }
})