import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
    mainContainer: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    mainDark: {
        width: '100%', 
        height: '100%', 
        backgroundColor: 'rgba(0,0,0,0.5)', 
        alignItems: 'center'
    },
    mainView: {
        padding: 20, 
        marginTop: 50, 
        alignItems: 'center'
    },
    mainTXT: {
        fontSize: 25, 
        fontWeight: 'bold', 
        marginTop: 20, 
        marginBottom: 100, 
        color: '#fff'
    },
    btn: {
        width: Dimensions.get('window').width/1 -50,
        backgroundColor: '#a0f',
        padding: 16,
        borderRadius: 10,
    },
    btnText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
        alignSelf: 'center',
    }

})
