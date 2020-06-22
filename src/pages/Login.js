import React, { Component } from 'react'
import { View, Text, TextInput, ImageBackground, StyleSheet, Image, Dimensions, TouchableOpacity, ToastAndroid } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import bgImage from '../bg.jpg'
import logo from '../react.png'

const { width: WIDTH } = Dimensions.get('window')

export default class Login extends Component {

    constructor(){
        super()
        this.state = {
            showPass: true,
            press: false
        }
    }

    showPass = () => {
        if(this.state.press == false){
            this.setState({ showPass: false, press: true})
        } else {
            this.setState({ showPass: true, press: false})
        }
    }

    render(){

        return (
            <ImageBackground source={bgImage} style={styles.bgContainer}>
                <View style={styles.logoContainer}>
                    <Image source={logo} style={styles.logo}></Image>
                    <Text style={styles.logoText}>React Native</Text>
                </View>
    
                <View style={styles.inputContainer}>
                    <Icon name={'person-outline'} size={28} color={'rgba(255,255,255,.9)'} style={styles.inputIcon} />
                    <TextInput
                        style={styles.input}
                        placeholder={'Username'}
                        placeholderTextColor={'rgba(255,255,255,0.8)'}
                        underlineColorAndroid='transparent' />
                </View>
    
                <View style={styles.inputContainer}>
                    <Icon name={'lock-outline'} size={28} color={'rgba(255,255,255,.9)'} style={styles.inputIcon} />
                    <TextInput
                        style={styles.input}
                        placeholder={'Password'}
                        secureTextEntry={this.state.showPass}
                        placeholderTextColor={'rgba(255,255,255,0.8)'}
                        underlineColorAndroid='transparent' />
    
                    <TouchableOpacity onPress={this.showPass.bind(this)} style={styles.btnPass}>
                        <Icon name={this.state.press == false ? 'visibility' : 'visibility_off'} size={28} color={'rgba(255,255,255,.5)'} />
                    </TouchableOpacity>
                </View>
    
                <TouchableOpacity style={styles.btnLogin} onPress={() => ToastAndroid.show('Button Clicado..', ToastAndroid.SHORT)}>
                    <Text style={styles.btnText}>LOGIN</Text>
                </TouchableOpacity>
    
            </ImageBackground>
        )

    }
    
    
}


const styles = StyleSheet.create({
    bgContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: null,
        height: null,
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    logo: {
        width: 120,
        height: 120,
    },
    logoText: {
        color: 'white',
        fontSize: 30,
        fontWeight: '500',
        marginTop: 10,
        opacity: .7,
    },
    inputContainer: {
        marginTop: 10,
        flexDirection: 'row',
        position: 'relative',
    },
    input: {
        width: WIDTH - 55,
        height: 45,
        borderRadius: 25,
        fontSize: 16,
        paddingStart: 45,
        backgroundColor: 'rgba(0,0,0,0.35)',
        color: 'rgba(255,255,255,0.7)',
        marginHorizontal: 25,
    },
    inputIcon: {
        position: 'absolute',
        top: 8,
        left: 37,
    },
    btnPass: {
        position: 'absolute',
        top: 8,
        right: 37,
        zIndex: 5
    },
    btnLogin: {
        width: WIDTH - 55,
        height: 45,
        borderRadius: 25,
        backgroundColor: 'rgba(0,0,0,0.7)',
        justifyContent: 'center',
        marginTop: 20,
    },
    btnText: {
        color: 'rgba(255,255,255,0.7)',
        fontSize: 16,
        textAlign: 'center',
    }

})
