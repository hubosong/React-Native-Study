import React from 'react'
import {View, Text, StyleSheet, Image, ImageBackground} from 'react-native'

export default function Header() {
    return(
        <ImageBackground style={styles.headerBG} source={require('../../assets/bg1.jpg')}>
            <View style={styles.header}>

                <View style={styles.profilePicWrap}>
                    <Image style={styles.profilePic} source={require('../../assets/react.png')}/>
                </View>

                <Text style={styles.name}>Robson Machczew</Text>
                <Text style={styles.pos}>- APP Developer -</Text>

            </View>
        </ImageBackground>
    )    
}

const styles = StyleSheet.create({
    headerBG: {
        flex: 1,
        width: null,
        alignSelf: 'stretch',
    },
    header: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    profilePicWrap: {
        width: 180,
        height: 180,
        borderRadius: 50,
        borderColor: 'rgba(255,255,255,0.2)',
        borderWidth: 10,

    },
    profilePic: {
        flex: 1,
        width: null,
        alignSelf: 'stretch',
    },
    name: {
        marginTop: 20,
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold',
    },
    pos: {
        fontSize: 14,
        color: '#f0f',
        fontWeight: 'bold',
        fontStyle: 'italic',
    },

})