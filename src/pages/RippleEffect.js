import React from 'react'
import { View, Text, Platform, TouchableNativeFeedback, StyleSheet } from 'react-native'

//npm install --save react-native-material-ripple
import Ripple from 'react-native-material-ripple';

export default class RippleEffect extends React.Component {

    /*
    //verificar se eh ios ou android
    componentDidMount() {
        if (Platform.OS === 'ios') {
            alert('IOS')
        }
        if (Platform.OS === 'android') {
            alert('ANDROID')
        }
    }
    */

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('#fff')}>
                    <View style={styles.btn}>
                        <Text style={styles.btnText}>touch me</Text>
                    </View>
                </TouchableNativeFeedback>

                <Ripple style={styles.btn} rippleColor='#fff' rippleDuration={1200} rippleOpacity={0.8}>
                    <Text style={styles.btnText}>touch me</Text>
                </Ripple>

            </View >

        )

    }

}

const styles = StyleSheet.create({
    btn: {
        width: '95%',
        margin: 20,
        borderRadius: 25, 
        backgroundColor: '#5300e8',
        padding: 20,
        color: '#ffffff',
    },
    btnText: {
        textAlign: 'center',
        color: '#fff'
    }
})