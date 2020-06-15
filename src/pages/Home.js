import React from 'react'
import { View, Text, Button, TouchableOpacity, StyleSheet, TouchableHighlight } from 'react-native'

export default function Home({ navigation }) {

    /*
    function navigateToAbout(){
        navigation.navigate('About')
    }
    */

    return (

        <View style={{ flex: 1, alignItems: 'center' }}>

            <Text style={{ fontSize: 50, margin: 50 }}>HOME</Text>

            <TouchableHighlight
                onPress={() => navigation.navigate('Views')}
                style={{ ...styles.btn }}
                underlayColor='#555'>

                <Text style={{ ...styles.btnText }}>VIEWS</Text>
            </TouchableHighlight>

            <Button title="IMC" onPress={() => navigation.navigate('IMC')} />
            <Button title="ABOUT" onPress={() => navigation.navigate('About')} />
            <Button title="TABS" onPress={() => navigation.navigate('Tabs')} />

        </View>
    )
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: "darkorange",
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 25,
        marginBottom: 10,
    },
    btnActive: {
        backgroundColor: '#555'
    },
    btnText: {
        color: "white",
        fontSize: 18,
    }
})