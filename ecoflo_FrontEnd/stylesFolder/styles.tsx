import { StyleSheet, Dimensions} from 'react-native'
const windowWidth = Dimensions.get('screen').width


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#03fc56',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    inputForm: {
      backgroundColor: '#fff',
      fontSize: 20,
      width: windowWidth / 1.5,
      marginVertical: 10,
      borderRadius: 15,
      paddingHorizontal: 10,
      paddingVertical: 12,
    },
  
    loginButton: {
      backgroundColor: '#fff'
    }
  });

export default styles;