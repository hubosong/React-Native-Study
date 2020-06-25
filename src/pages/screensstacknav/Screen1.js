import React from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import styles from './styles'

export default function Screen1({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <TouchableHighlight
                style={styles.btn}
                underlayColor='#555'
                onPress={() => { navigation.navigate('Screen2') }}>

                <Text style={styles.btnText}>Screen 2</Text>
                
            </TouchableHighlight>
        </View>
    )
}