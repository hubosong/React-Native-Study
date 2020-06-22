import React from 'react'
import { View, StyleSheet } from 'react-native'

import Header from './fullapp/Header'
import Bar from './fullapp/Bar'
import PhotoGrid from './fullapp/PhotoGrid'

export default function FullAPP() {
    return (
        <View style={styles.container}>
            <Header />
            <Bar />
            <PhotoGrid />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#a0f',
    }
})