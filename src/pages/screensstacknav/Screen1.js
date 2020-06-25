import React, { Component } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import styles from './styles'

export default class Screen1 extends Component {

    /*
    state = {
        animatePress: new Animated.Value(1)
    }

    animate() {
        Animated.timing(this.state.animatePress, {
            toValue: 0.8,
            duration: 500,
            useNativeDriver: true,
        }).start()
    }
    */

    render() {
        return (
            <View style={[styles.mainContainer, { backgroundColor: '#0af' }]}>
                <TouchableHighlight
                    style={styles.btn}
                    onPress={() => { this.props.navigation.navigate('Screen2') }}>
                    <Text style={styles.btnText}>Acessar SCREEN1</Text>
                </TouchableHighlight>
            </View>
        )
    }

}
