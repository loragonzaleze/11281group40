import { StyleSheet, Dimensions} from 'react-native'
const windowWidth = Dimensions.get('screen').width
const windowHeight = Dimensions.get('screen').height

const UserProfilePageStyles = StyleSheet.create({
    pfp: {
        width: windowWidth / 5,
        height: windowWidth / 5,
        borderRadius: windowWidth / 10
    },
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
    },


})

export default UserProfilePageStyles;