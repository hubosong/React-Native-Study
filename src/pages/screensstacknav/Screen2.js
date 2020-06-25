import React from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import styles from './styles'

export default function Screen2({navigation}){
    return(
        <View style={[styles.mainContainer, {backgroundColor: '#5a5'}]}>
            <TouchableHighlight style={styles.btn} onPress={() => navigation.navigate('Main')}>
                <Text style={styles.btnText}>Voltar MAIN</Text>
            </TouchableHighlight>

            <TouchableHighlight style={[styles.btn, {marginTop: 20, backgroundColor: '#07f'}]} onPress={() => navigation.goBack()}>
                <Text style={styles.btnText}>Voltar para SCREEN1</Text>
            </TouchableHighlight>
        </View>
    )
}