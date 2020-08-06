import React from 'react'
import { View, Text, StyleSheet, TouchableHighlight, TouchableOpacity, ScrollView } from 'react-native'

export default function Home({ navigation }) {

    /*
    function navigateToAbout(){
        navigation.navigate('About')
    }
    */

    return (

        <ScrollView style={{ flex: 1 }}>
            <View style={styles.container}>

                <Text style={{ fontSize: 30, margin: 20 }}>React Native Studies</Text>

                <TouchableHighlight onPress={() => navigation.navigate('Webview')} style={{ ...styles.btn }} underlayColor='#555'>
                    <Text style={styles.btnText}>Webview</Text>
                </TouchableHighlight>
                
                <TouchableHighlight onPress={() => navigation.navigate('DrawOnScreen')} style={{ ...styles.btn }} underlayColor='#555'>
                    <Text style={styles.btnText}>DrawOnScreen</Text>
                </TouchableHighlight>

                <TouchableHighlight onPress={() => navigation.navigate('DragDrop')} style={{ ...styles.btn }} underlayColor='#555'>
                    <Text style={styles.btnText}>DragDrop</Text>
                </TouchableHighlight>

                <TouchableHighlight onPress={() => navigation.navigate('AnimScale')} style={{ ...styles.btn }} underlayColor='#555'>
                    <Text style={styles.btnText}>AnimScale</Text>
                </TouchableHighlight>
                
                <TouchableHighlight onPress={() => navigation.navigate('Register')} style={{ ...styles.btn }} underlayColor='#555'>
                    <Text style={styles.btnText}>Register</Text>
                </TouchableHighlight>

                <TouchableHighlight onPress={() => navigation.navigate('Cam')} style={{ ...styles.btn, backgroundColor: 'green' }} underlayColor='#555'>
                    <Text style={styles.btnText}>Camera</Text>
                </TouchableHighlight>

                <TouchableHighlight onPress={() => navigation.navigate('Json0')} style={styles.btn} underlayColor='#555'>
                    <Text style={styles.btnText}>Json0</Text>
                </TouchableHighlight>

                <TouchableHighlight onPress={() => navigation.navigate('Json')} style={styles.btn} underlayColor='#555'>
                    <Text style={styles.btnText}>Json</Text>
                </TouchableHighlight>

                <TouchableHighlight onPress={() => navigation.navigate('Another')} style={styles.btn} underlayColor='#555'>
                    <Text style={styles.btnText}>Another</Text>
                </TouchableHighlight>

                <TouchableHighlight onPress={() => navigation.navigate('KeyboardAvoidingView')} style={styles.btn} underlayColor='#555'>
                    <Text style={styles.btnText}>KeyboardAvoidingView</Text>
                </TouchableHighlight>

                <TouchableHighlight onPress={() => navigation.navigate('Gradient')} style={styles.btn} underlayColor='#555'>
                    <Text style={styles.btnText}>Gradient</Text>
                </TouchableHighlight>

                <TouchableHighlight onPress={() => navigation.navigate('LoginAirBnB')} style={styles.btn} underlayColor='#555'>
                    <Text style={styles.btnText}>LoginAirBnB</Text>
                </TouchableHighlight>

                <TouchableHighlight onPress={() => navigation.navigate('RippleEffect')} style={styles.btn} underlayColor='#555'>
                    <Text style={styles.btnText}>RippleEffect</Text>
                </TouchableHighlight>

                <TouchableHighlight onPress={() => navigation.navigate('Netflix')} style={styles.btn} underlayColor='#555'>
                    <Text style={styles.btnText}>Netflix</Text>
                </TouchableHighlight>

                <TouchableHighlight onPress={() => navigation.navigate('MainScreen')} style={styles.btn} underlayColor='#555'>
                    <Text style={styles.btnText}>MainScreen</Text>
                </TouchableHighlight>

                <TouchableHighlight onPress={() => navigation.navigate('Animations')} style={{ ...styles.btn, backgroundColor: 'green' }} underlayColor='#555'>
                    <Text style={styles.btnText}>Animations</Text>
                </TouchableHighlight>

                <TouchableHighlight onPress={() => navigation.navigate('FullAPP')} style={styles.btn} underlayColor='#555'>
                    <Text style={styles.btnText}>FullAPP</Text>
                </TouchableHighlight>

                <TouchableHighlight onPress={() => navigation.navigate('PropsStates')} style={styles.btn} underlayColor='#555'>
                    <Text style={styles.btnText}>PropsStates</Text>
                </TouchableHighlight>

                <TouchableHighlight onPress={() => navigation.navigate('Views')} style={styles.btn} underlayColor='#555'>
                    <Text style={styles.btnText}>VIEWS</Text>
                </TouchableHighlight>

                <TouchableHighlight onPress={() => navigation.navigate('IMC')} style={styles.btn} underlayColor='#555'>
                    <Text style={styles.btnText}>IMC</Text>
                </TouchableHighlight>

                <TouchableHighlight onPress={() => navigation.navigate('Tabs')} style={styles.btn} underlayColor='#555'>
                    <Text style={styles.btnText}>TABS</Text>
                </TouchableHighlight>

                <TouchableHighlight onPress={() => navigation.navigate('About')} style={styles.btn} underlayColor='#555'>
                    <Text style={styles.btnText}>ABOUT</Text>
                </TouchableHighlight>

                <TouchableOpacity onPress={() => navigation.navigate('Grid')} style={{ ...styles.btn, backgroundColor: 'green' }}>
                    <Text style={styles.btnText}>GRID</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('ElementsComponents')} style={styles.btn}>
                    <Text style={styles.btnText}>ElementsComponents</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.btn}>
                    <Text style={styles.btnText}>Login</Text>
                </TouchableOpacity>

            </View>
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', 
        flexWrap: 'wrap', 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    btn: {
        backgroundColor: "#a0f",
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 25,
        margin: 5,
    },
    btnActive: {
        backgroundColor: '#555'
    },
    btnText: {
        color: "white",
        fontSize: 18,
    }
})