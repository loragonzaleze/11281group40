import { StyleSheet, Dimensions} from 'react-native'
const windowWidth = Dimensions.get('screen').width
const windowHeight = Dimensions.get('screen').height


const ExistingUserLoginPageStyles = StyleSheet.create({
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
        backgroundColor: '#FFF',
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
    loginText: {
      color: "#FFF",
      fontSize: 16,
      fontWeight: 'bold'
    },
    inputForm: {
        backgroundColor: 'transparent',
        fontSize: 17,
        width: windowWidth / 1.25,
        marginVertical: 10,
        paddingHorizontal: 10,
        paddingVertical: 12,
        backfaceVisibility: 'hidden',
        textAlignVertical: 'center',
        flex: 5,
        paddingBottom: 10,
        paddingLeft: 0,
        color: '#000',
        borderBottomWidth: 1.5
    },
    inputFormIncorrect: {
        backgroundColor: 'transparent',
        fontSize: 17,
        width: windowWidth / 1.25,
        marginVertical: 10,
        paddingHorizontal: 10,
        paddingVertical: 12,
        backfaceVisibility: 'hidden',
        textAlignVertical: 'center',
        flex: 5,
        paddingBottom: 10,
        paddingLeft: 0,
        color: '#000',
        borderBottomWidth: 1.5,
        borderBottomColor: 'red'
    },
    icon: {
        padding: 10,
        alignSelf: 'center',
    },
 
    inputFormView: {
        alignContent: 'center',
       // borderBottomWidth: 1.5,
        borderBottomColor: 'gray',
        width: windowWidth / 1.4,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',

    },
    loginButton: {
        backgroundColor: '#00694d',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        width: windowWidth / 2,
        height: 40,
        top: (windowHeight / 80)
        
    },
    loginButtonView: {


    },
    correctPasswordText: {
        color: 'transparent'
    },
    incorrectPasswordText: {
        color: '#FF0000'
    },
    logo: {
        resizeMode: 'contain',
        width: windowWidth / 2,
        height: windowHeight / 10
    }

    



  });

export default ExistingUserLoginPageStyles;