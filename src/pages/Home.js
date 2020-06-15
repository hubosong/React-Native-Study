import React from 'react'
import { View, Text, Button } from 'react-native'

export default function Home({ navigation }) {

    /*
    function navigateToAbout(){
        navigation.navigate('About')
    }
    */

    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            
            <Text style={{ fontSize: 50, margin: 50 }}>HOME</Text>

            <Button title="VIEWS" onPress={() => navigation.navigate('Views')} />
            <Button title="IMC" onPress={() => navigation.navigate('IMC')} />
            <Button title="ABOUT" onPress={() => navigation.navigate('About')} />
            <Button title="TABS" onPress={() => navigation.navigate('Tabs')} />

        </View>
    )
}