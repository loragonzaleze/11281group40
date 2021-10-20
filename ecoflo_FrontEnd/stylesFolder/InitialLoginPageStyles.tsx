import { StyleSheet, Dimensions} from 'react-native'
const windowWidth = Dimensions.get('screen').width
const windowHeight = Dimensions.get('screen').height


const InitialLoginPageStyles = StyleSheet.create({
    header: {
      flex: 1,
      backgroundColor: '#FFFFFF',
      alignItems: 'center',
      justifyContent: 'center',
    },
    footer: {
        flex: 2,
        backgroundColor: "#00694d",
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
    },
    joinNowButton: {
      backgroundColor: '#00694d',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 30,
      width: windowWidth / 1.25,
      height: 40,
      position: 'absolute',
      bottom: windowHeight / 8
    },
    joinNowText: {
      color: "#FFF",
      fontSize: 16
    },
    loginButton: {
      position: 'absolute',
      backgroundColor: "transparent",
      alignItems: 'center',
      justifyContent: 'center',
      width: windowWidth / 1.25,
      height: 40,
      bottom: (windowHeight / 8) - 45
    },
    loginText: {
      color: "#00694d",
      fontSize: 16,
      fontWeight: 'bold'
    },
    logo: {
      resizeMode: 'contain',
      width: windowWidth / 2,
      height: windowHeight / 10
  }





  });

export default InitialLoginPageStyles;