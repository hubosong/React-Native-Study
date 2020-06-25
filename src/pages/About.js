import React from 'react'
import { View, Button, StyleSheet, ImageBackground } from 'react-native'

export default function About({ navigation }) {
    return (
        <ImageBackground source={require('../assets/bg.jpg')} style={styles.imgBG}>
            <View style={styles.inner}>
                <Button
                    title="<< Voltar HOME SCREEN"
                    onPress={() => navigation.navigate('Home')} />
            </View>
        </ImageBackground>

    )
}

const styles = StyleSheet.create({
    imgBG: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    inner: {
        width: '80%',
        height: '80%',
        backgroundColor: 'rgba(0,0,0, .5)',
        alignItems: 'center',
        justifyContent: 'center',
    },
})