import React from 'react'
import { View, Text, Button } from 'react-native'

export default function About({ navigation }) {
    return (
        <View>
            <Button
                title="Voltar HOME SCREEN"
                onPress={() => navigation.navigate('Home')} />
            <Text>ABOUT</Text>
        </View>
    )
}