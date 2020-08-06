import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

/**
 * https://github.com/react-native-community/react-native-webview/blob/master/docs/Getting-Started.md
 * npm install --save react-native-webview
 * react-native link react-native-webview
 */


export default function NEW (){
    return (
       <View style={styles.container}>
          <Text>NEW</Text>
       </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})