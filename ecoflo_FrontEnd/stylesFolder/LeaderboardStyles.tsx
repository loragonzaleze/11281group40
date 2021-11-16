import { StyleSheet, Dimensions} from 'react-native'
const windowWidth = Dimensions.get('screen').width
const windowHeight = Dimensions.get('screen').height


const LeaderboardStyles = StyleSheet.create({
    
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    top: {
        backgroundColor: '#50D9E3',
        alignItems: 'center',
        justifyContent: 'center',
        width: windowWidth,
        flex: 5
    },
    podiumImage: {
        flex:1,
        resizeMode: 'contain'
    },
    rank: {
        flex: 1.5,
        alignItems: 'center',
        justifyContent: 'center',
        //borderWidth: 0.4,
        //borderColor: '#9b9b9b',
    },
    pfp: {
        flex: 1.5,
        alignItems: 'center',
        justifyContent: 'center',
        //borderWidth: 0.4,
        //borderColor: '#9b9b9b',
    },
    userName: {
        flex: 4,
        alignItems: 'center',
        justifyContent: 'center',
        //borderWidth: 0.4,
        //borderColor: '#9b9b9b',
    },
    Steps:
    {
        flex: 2,
        marginHorizontal: 1,
        alignItems: 'center',
        justifyContent: 'center',
        //borderWidth: 0.4,
        //borderColor: '#9b9b9b',
    },
    CO2:
    {
        flex: 2,
        marginLeft: 1,
        marginRight: 1,
        alignItems: 'center',
        justifyContent: 'center',
        //borderWidth: 0.4,
        //borderColor: '#9b9b9b',

    },
    text: {
        fontWeight: 'bold',
        textAlign:'center'
    },
    RankText: {
        fontSize: 17,
        fontWeight: 'bold'
    },
    UserNameText: {
        fontWeight: 'bold'
    },
    StepsText: {

    },
    CO2Text: {

    },
    pfpImage: {
        width: windowWidth * 0.11,
        height: windowWidth * 0.11,
        borderRadius: windowWidth * 0.22,
    },
    rows: {
        flex: 1,
        borderWidth: 0.4,
        borderColor: '#9b9b9b',
        backgroundColor: '#fff',
        width: windowWidth,
        flexDirection: 'row'
    }

});

export default LeaderboardStyles;