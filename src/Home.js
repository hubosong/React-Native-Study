import React from 'react'
import { View, Text, StyleSheet, TouchableHighlight, TouchableOpacity, ScrollView } from 'react-native'

export default function Home({ navigation }) {

    /*
    function navigateToAbout(){
        navigation.navigate('About')
    }
    */

    return (

        <ScrollView style={{ backgroundColor: '#ddd' }}>
            <View style={{ flex: 1, alignItems: 'center' }}>

                <Text style={{ fontSize: 30, margin: 20 }}>React Native Studies</Text>

                <TouchableHighlight onPress={() => navigation.navigate('MainScreen')} style={{ ...styles.btn }} underlayColor='#555'>
                    <Text style={{ ...styles.btnText }}>MainScreen</Text>
                </TouchableHighlight>

                <TouchableHighlight onPress={() => navigation.navigate('Animations')} style={{ ...styles.btn }} underlayColor='#555'>
                    <Text style={{ ...styles.btnText }}>Animations</Text>
                </TouchableHighlight>

                <TouchableHighlight onPress={() => navigation.navigate('FullAPP')} style={{ ...styles.btn }} underlayColor='#555'>
                    <Text style={{ ...styles.btnText }}>FullAPP</Text>
                </TouchableHighlight>

                <TouchableHighlight onPress={() => navigation.navigate('PropsStates')} style={{ ...styles.btn }} underlayColor='#555'>
                    <Text style={{ ...styles.btnText }}>PropsStates</Text>
                </TouchableHighlight>



                <Text style={{ marginBottom: 10 }}>------------------</Text>



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
        </ScrollView>


    )
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: "#a0f",
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