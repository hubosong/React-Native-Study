import React from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import styles from './styles'

export default function Screen2({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <TouchableHighlight
                style={styles.btn}
                underlayColor='#555'
                onPress={() => { navigation.navigate('Main') }}>

                <Text style={styles.btnText}>Voltar para MAIN</Text>
                
            </TouchableHighlight>
        </View>
    )
}