import React from 'react'
import { View, Text, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native'

export default function Home({ navigation }) {

    /*
    function navigateToAbout(){
        navigation.navigate('About')
    }
    */

    return (

        <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#ddd' }}>

            <Text style={{ fontSize: 50, margin: 50 }}>HOME</Text>

            <TouchableHighlight onPress={() => navigation.navigate('Views')} style={{ ...styles.btn }} underlayColor='#555'>
                <Text style={{ ...styles.btnText }}>VIEWS</Text>
            </TouchableHighlight>

            <TouchableHighlight onPress={() => navigation.navigate('IMC')} style={{ ...styles.btn }} underlayColor='#555'>
                <Text style={{ ...styles.btnText }}>IMC</Text>
            </TouchableHighlight>

            <TouchableHighlight onPress={() => navigation.navigate('Tabs')} style={{ ...styles.btn }} underlayColor='#555'>
                <Text style={{ ...styles.btnText }}>TABS</Text>
            </TouchableHighlight>

            <TouchableHighlight onPress={() => navigation.navigate('About')} style={{ ...styles.btn }} underlayColor='#555'>
                <Text style={{ ...styles.btnText }}>ABOUT</Text>
            </TouchableHighlight>

            <TouchableOpacity onPress={() => navigation.navigate('Grid')} style={{ ...styles.btn, marginTop: 10 }}>
                <Text style={{ ...styles.btnText }}>GRID</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('ElementsComponents')} style={{ ...styles.btn, marginTop: 10 }}>
                <Text style={{ ...styles.btnText }}>ElementsComponents</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{ ...styles.btn, marginTop: 10 }}>
                <Text style={{ ...styles.btnText }}>Login</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: "darkorange",
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 25,
        marginBottom: 10,
    },
    btnActive: {
        backgroundColor: '#555'
    },
    btnText: {
        color: "white",
        fontSize: 18,
    }
})