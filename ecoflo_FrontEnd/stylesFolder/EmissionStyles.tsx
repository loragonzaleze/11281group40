import { StyleSheet, Dimensions} from 'react-native'
const windowWidth = Dimensions.get('screen').width
const windowHeight = Dimensions.get('screen').height


const EmissionStyles = StyleSheet.create({
    
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container2: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container3: {
      flexDirection: "row",
      backgroundColor: '#000',
      alignItems: 'center',
      justifyContent: 'center',
      width: windowWidth,
  },
  container4: {
    flexDirection: "row",
    backgroundColor: '#000',
    width: windowWidth,
},
container5: {
  flexDirection: "row",
  alignItems: 'center',
  justifyContent: 'center',
  width: windowWidth,
},
    stepsText: {
      color: "#00694d",
      fontSize: 90
    },
    stepsText2: {
      color: "#00694d",
      fontSize: 25
    },
    leaderboardHeader: {
      color: "#50E3C2",
      fontWeight: 'bold',
      fontSize: 25
    },
    leaderboardSquare: {
      borderWidth: 4,
      borderColor: '#00B5DE',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 10,
      borderRadius: 15,
      width: windowWidth / 6,
      height: windowWidth / 6,
    },
    leaderboardRect: {
      borderWidth: 4,
      flexDirection: "row",
      borderColor: '#00B5DE',
      alignItems: 'center',
      marginLeft: 10,
      borderRadius: 15,
      width: windowWidth / 1.31,
      height: windowWidth / 6,
    },
    Rank: {
      color: "#F5A623",
      fontSize: 30,
      fontWeight: 'bold'
    },
    usernameText: {
      color: "#8BFDB9",
      marginHorizontal: 10,
      flexDirection: 'row',
      fontWeight: 'bold',
      fontSize: 17,
    },
    stepsText3: {
      color: "#C5C5C5",
      fontSize: 18,
      alignItems: "center"
    },
    stepsText4: {
      color: "#8BFDB9",
      marginHorizontal: 5,
      fontWeight: 'bold',
      fontSize: 17
    },
    invBox: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    invBox2: {
      alignItems: 'center',
      justifyContent: 'center',
      width: windowWidth / 3,
    },
    stepsText5: {
      color: "#8BFDB9",
      fontSize: 13
    },
    verticalDate: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    Button: {
      backgroundColor: '#00694d',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 30,
      width: windowWidth / 1.75,
      height: 40,
    },
    Button2: {
      backgroundColor: '#50D9E3',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 30,
      marginHorizontal: 8,
      width: windowWidth / 2.3,
      height: 40,
    },
    StepDataBox: {
      borderWidth: 2,
      borderColor: '#00B5DE',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 15,
      width: windowWidth / 2.2,
      height: 75,
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
    buttonText2: {
      color: "#000",
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
        backgroundColor: '#F0F0F0',
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