import React from 'react'
import { View, Image, TextInput, StyleSheet, KeyboardAvoidingView, Dimensions, StatusBar } from 'react-native'

/*
const window = Dimensions.get('window')
const IMAGE_HEIGHT = window.width / 2
const IMAGE_HEIGHT_SMALL = window.width / 7
*/

import logo from '../assets/react.png'

export default function NEW() {
    return (

        /*
        // sem ajuste de teclado
        <View style={styles.container}>
            <Image source={logo} style={styles.logo} />
            <TextInput
                placeholder="Email"
                style={styles.input}/>
            <TextInput
                placeholder="Username"
                style={styles.input}/>
            <TextInput
                placeholder="Password"
                style={styles.input}/>
            <TextInput
                placeholder="Confirm Password"
                style={styles.input}/>
            <View style={{ height: 60 }} />
        </View>
        */

        // sem ajuste de teclado
        <KeyboardAvoidingView
            style={styles.container}
            //behavior="padding"
            >
            <StatusBar barStyle='light-content' translucent />
            <Image source={logo} style={styles.logo} />
            <TextInput
                placeholder="Email"
                style={styles.input}/>
            <TextInput
                placeholder="Username"
                style={styles.input}/>
            <TextInput
                placeholder="Password"
                style={styles.input}/>
            <TextInput
                placeholder="Confirm Password"
                style={styles.input}/>
            <View style={{ height: 60 }} />
        </KeyboardAvoidingView>
        
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#4c69a5',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        height: 50,
        backgroundColor: '#fff',
        marginHorizontal: 10,
        marginVertical: 5,
        //width: window.width - 30,
        width: '90%',
    },
    logo: {
        //height: IMAGE_HEIGHT,
        height: '30%',
        resizeMode: 'contain',
        marginBottom: 20,
        padding: 10,
        marginTop: 20
    },
    register: {
        marginBottom: 20,
        //width: window.width - 100,
        width: '95%',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        backgroundColor: '#ffae',
    }
})