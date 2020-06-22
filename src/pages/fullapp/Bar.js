import React from 'react'
import { View, Text, StyleSheet, ToastAndroid } from 'react-native'

export default function Bar() {
    return (
        <View style={styles.bar}>

            <View style={[styles.barItem, styles.barSeparator]}
                onStartShouldSetResponder={() => ToastAndroid.show('View Clicada..', ToastAndroid.SHORT)}>
                <Text style={styles.barTop}>12k</Text>
                <Text style={styles.barBottom}>Followers</Text>
            </View>

            <View style={styles.barItem}>
                <Text style={styles.barTop}>322</Text>
                <Text style={styles.barBottom}>Following</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    bar: {
        borderTopColor: '#fff',
        borderTopWidth: 5,
        backgroundColor: '#a0f',
        flexDirection: 'row',
    },
    barItem: {
        flex: 1,
        padding: 18,
        alignItems: 'center',
    },
    barSeparator: {
        borderRightWidth: 4,
        borderColor: '#fff'
    },
    barTop: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        fontStyle: 'italic',
    },
    barBottom: {
        color: '#000',
        fontSize: 14,
        fontWeight: 'bold',
    },
})