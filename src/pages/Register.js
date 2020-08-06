import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

export default function Register() {
    return (
        <View style={styles.container}>
            <View style={styles.regForm}>
                <Text style={styles.header}>Register</Text>

                <TextInput style={styles.input}
                    placeholder='Your Name' underlineColorAndroid='transparent' />

                <TextInput style={styles.input}
                    placeholder='Your E-mail' underlineColorAndroid='transparent' />

                <TextInput style={styles.input}
                    placeholder='Your Address' underlineColorAndroid='transparent' />

                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnText}>Sign Out</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#36485f',
        paddingLeft: 60,
        paddingRight: 60
    },
    regForm: {
        alignSelf: 'stretch',
    },
    header: {
        fontSize: 24,
        color: '#fff',
        paddingBottom: 40,
    },
    input: {
        alignSelf: 'stretch',
        height: 40,
        marginBottom: 30,
        color: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#f8f8f8'
    },
    btn: {
        alignSelf: 'stretch',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#59cbbd',
        marginTop: 30,
    },
    btnText: {
        color: '#fff',
        fontWeight: 'bold',
    }
})