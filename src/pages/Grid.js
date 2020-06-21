import React from 'react'
import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native'

export default function Grid() {
    return (
        <ScrollView style={styles.scrollContainer}>
            <View style={styles.container}>
                <View style={styles.box1}><Text>Box1</Text></View>
                <View style={styles.box2}><Text>Box2</Text></View>
                <View style={styles.box2}><Text>Box3</Text></View>
                <View style={styles.box3}><Text>Box4</Text></View>
                <View style={styles.box3}><Text>Box5</Text></View>
                <View style={styles.box3}><Text>Box6</Text></View>
                <View style={styles.box4}><Text>Box7</Text></View>
                <View style={styles.box4}><Text>Box8</Text></View>
                <View style={styles.box4}><Text>Box9</Text></View>
                <View style={styles.box4}><Text>Box10</Text></View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scrollContainer: {
        flex: 1,
        backgroundColor: "#aaa",
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 2,
        backgroundColor: "#aaa",
    },
    box1: {
        margin: 2,
        height: 200,
        width: Dimensions.get('window').width / 1 -6,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    box2: {
        margin: 2,
        height: 200,
        width: Dimensions.get('window').width / 2 -6,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    box3: {
        margin: 2,
        height: 200,
        width: Dimensions.get('window').width / 3 -6,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    box4: {
        margin: 2,
        height: 200,
        width: Dimensions.get('window').width / 4 -6,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
})