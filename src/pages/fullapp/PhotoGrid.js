import React from 'react'
import { View, Image, ScrollView, StyleSheet, Dimensions } from 'react-native'

export default function PhotoGrid() {
    return (
        <ScrollView style={{backgroundColor: '#fff', height: 0}}>
                <View style={styles.photogrid}>
                    
                    <View style={styles.photoWrap}>
                        <Image style={styles.photo} source={require('../../bg.jpg')} />
                    </View>
                    <View style={styles.photoWrap}><Image style={styles.photo} source={require('../../bg.jpg')}/></View>
                    <View style={styles.photoWrap}><Image style={styles.photo} source={require('../../bg.jpg')}/></View>
                    <View style={styles.photoWrap}><Image style={styles.photo} source={require('../../bg.jpg')}/></View>
                    <View style={styles.photoWrap}><Image style={styles.photo} source={require('../../bg.jpg')}/></View>
                    <View style={styles.photoWrap}><Image style={styles.photo} source={require('../../bg.jpg')}/></View>
                    <View style={styles.photoWrap}><Image style={styles.photo} source={require('../../bg.jpg')}/></View>
                    <View style={styles.photoWrap}><Image style={styles.photo} source={require('../../bg.jpg')}/></View>
                    <View style={styles.photoWrap}><Image style={styles.photo} source={require('../../bg.jpg')}/></View>
                    <View style={styles.photoWrap}><Image style={styles.photo} source={require('../../bg.jpg')}/></View>
                    <View style={styles.photoWrap}><Image style={styles.photo} source={require('../../bg.jpg')}/></View>   

            </View>
        </ScrollView>
    
    )
}

const styles = StyleSheet.create({
    photogrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 3
    },
    photoWrap: {
        margin: 2,
        height: 120,
        width: (Dimensions.get('window').width / 2) - 4,
    },
    photo: {
        flex: 1,
        width: null,
        alignSelf: 'stretch',
    },
})