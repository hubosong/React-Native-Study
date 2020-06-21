import React, { Component } from 'react';
import { View, Text, Animated } from 'react-native';

export default class Page3 extends Component {

    state = {
        fadeAnim: new Animated.Value(1)
    }

    componentDidMount() {
        Animated.timing(this.state.fadeAnim, {
            toValue: 0,
            duration: 2000,
        }).start()
    }

    render() {
        let { fadeAnim } = this.state

        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Animated.View style={{ width: 250, height: 100, opacity: fadeAnim, backgroundColor: 'red', }}>
                    <Text style={{ fontSize: 30, textAlign: 'center', margin: 30 }}>Fadding In</Text>
                </Animated.View>

                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 50 }}>Page3</Text>
                </View>
            </View>
        )
    }
}


/**
 * <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 50 }}>Page3</Text>
        </View>
 */