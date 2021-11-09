import { StyleSheet, Dimensions} from 'react-native'
const windowWidth = Dimensions.get('screen').width
const windowHeight = Dimensions.get('screen').height


const EmissionStyles = StyleSheet.create({
    
    container: {
        flex: 1,
        backgroundColor: '#8BFDB9',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container2: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container3: {
      flexDirection: "row",
      backgroundColor: '#000',
      alignItems: 'center',
      justifyContent: 'center',
  },
    stepsText: {
      color: "#8BFDB9",
      fontSize: 90
    },
    stepsText2: {
      color: "#8BFDB9",
      fontSize: 25
    },
    stepsText3: {
      color: "#8BFDB9",
      fontSize: 18
    },
    Button: {
      backgroundColor: '#00694d',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 30,
      width: windowWidth / 1.75,
      height: 40,
    },
    output: {
      height: 42,
      margin: 12,
      width: windowWidth / 2,
      borderWidth: 1,
      padding: 10,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 15,
      textAlign: 'center'
    },
    outputText: {
      color: "#9B9B9B",
      fontSize: 16
    },
    buttonText: {
      color: "#FFF",
      fontSize: 16
    },
    detailsTouchable: {
      backgroundColor: '#07E4EE',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
      width: windowWidth / 1.25,
      paddingVertical: 10
    },
    detailsText: {
      color: "#000",
      fontSize: 14
    },
    picker: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 25,
        borderRadius: 15,
        width: windowWidth / 1.25,
        height: 50,
        paddingHorizontal: 30,
        textAlignVertical: 'center' 
    },
    input: {
      height: 42,
      margin: 12,
      width: windowWidth / 2,
      borderWidth: 1,
      padding: 10,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 15,
      textAlign: 'center'
    },
    spacer: {
        backgroundColor: '#03fc56',
        height: 20
    },
  
    header: {
        fontSize: 20
    },

    logo: {
      resizeMode: 'contain',
      width: windowWidth / 2,
      height: windowHeight / 10
    }





  });

export default EmissionStyles;