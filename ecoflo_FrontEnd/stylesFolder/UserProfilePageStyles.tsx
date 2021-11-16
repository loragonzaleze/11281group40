import { StyleSheet, Dimensions} from 'react-native'
const windowWidth = Dimensions.get('screen').width
const windowHeight = Dimensions.get('screen').height

const UserProfilePageStyles = StyleSheet.create({
    pfp: {
        width: windowWidth / 5,
        height: windowWidth / 5,
        borderRadius: windowWidth / 10,
        alignSelf: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
    },
    weeklySum : {
        fontSize : 28,
        fontWeight: 'bold',
    },
    weeklySumView : {
        marginLeft : windowWidth / 25,

    },
    title : {
        fontSize : 17,
        marginLeft : windowWidth / 7,
        alignItems: 'center',
        padding: 10
    },
    profileNameView : {
        flex: 0.6,
        alignContent: 'flex-end',
        justifyContent: 'center',
        alignSelf : 'center',
        paddingTop : windowHeight / 8

    },
    username : {
        alignSelf : 'center',
        fontSize: 22,
        padding: 10
    },
    welcome: {
        paddingTop: 40,
        fontWeight: '500',
        fontSize: 30
    }


})

export default UserProfilePageStyles;