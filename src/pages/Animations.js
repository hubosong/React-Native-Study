import React from 'react'
import { View, StyleSheet, Animated, Dimensions, TouchableOpacity, Text } from 'react-native'

import { PanGestureHandler, State } from 'react-native-gesture-handler'

export default class Animations extends React.PureComponent {

    // fadein fadeout
    state = {
        fadeValue: new Animated.Value(0)
    }

    fadein = () => {
        Animated.timing(this.state.fadeValue, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true
        }).start();
    }
    fadeout = () => {
        Animated.timing(this.state.fadeValue, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true
        }).start();
    };

    // slide in out top bottom
    constructor() {
        super()
        this.translateX = new Animated.Value(0)
        this.translateY = new Animated.Value(0)
        this.onGestureEvent = Animated.event([
            {
                nativeEvent: { translationX: this.translateX, translationY: this.translateY }
            }
        ], { useNativeDriver: true })

        this.animatedValue = new Animated.Value(0)
    }

    //faz animacao voltar ao estado inicial
    onHandlerStateChange = event => {
        if (event.nativeEvent.oldState == State.ACTIVE) {

            Animated.timing(this.translateX, {
                toValue: 0,
                duration: 1000,
                useNativeDriver: true //usado para utilizar o hardware do celular
            }).start()

            Animated.timing(this.translateY, {
                toValue: 0,
                duration: 1000,
                useNativeDriver: true //usado para utilizar o hardware do celular
            }).start()

        }
    }


    //zoom
    zoom = () => {
        Animated.timing(this.animatedValue, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true
        }).start()
    }


    render() {
        return (
            <View style={styles.container}>

                <View style={styles.layout1}>
                    <PanGestureHandler
                        onGestureEvent={this.onGestureEvent}
                        onHandlerStateChange={this.onHandlerStateChange}>

                        <Animated.View
                            style={[
                                styles.box,
                                {
                                    transform: [{ translateX: this.translateX, translateY: this.translateY }]

                                }
                            ]}
                        />
                    </PanGestureHandler>
                </View>


                <View style={styles.layout2}>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity style={styles.btn} onPress={() => this.fadein()}>
                            <Text style={styles.textBtn}>FadeIN</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btn} onPress={() => this.fadeout()}>
                            <Text style={styles.textBtn}>FadeOUT</Text>
                        </TouchableOpacity>
                    </View>

                    <Animated.View style={{ opacity: this.state.fadeValue, height: 30, width: 200, backgroundColor: "#ff0", justifyContent: "center" }} />
                </View>

                <View style={styles.layout3}>

                    <TouchableOpacity style={styles.btn} onPress={() => this.zoom()}>
                        <Text style={styles.textBtn}>ZoomIN</Text>
                    </TouchableOpacity>

                    <View style={{ flexDirection: 'row' }}>
                        <Animated.View
                            style={{
                                width: 10,
                                height: 10,
                                backgroundColor: '#ff0',
                                marginTop: 30,
                                transform: [
                                    {
                                        scaleX: this.animatedValue.interpolate({
                                            inputRange: [0, 1],
                                            outputRange: [1, 20]
                                        })
                                    },
                                    {
                                        scaleY: this.animatedValue.interpolate({
                                            inputRange: [0, 1],
                                            outputRange: [1, 5]
                                        })
                                    }
                                ]
                            }} />

                        <Animated.Image
                            source={require('../assets/react.png')}
                            resizeMode='cover'
                            style={{
                                //position: 'absolute',
                                height: 10,
                                width: 10,
                                top: 30,
                                left: 10,
                                transform: [
                                    {
                                        translateX: this.animatedValue.interpolate({
                                            inputRange: [0, 1],
                                            outputRange: [0, 100]
                                        })
                                    },
                                    {
                                        translateY: this.animatedValue.interpolate({
                                            inputRange: [0, 1],
                                            outputRange: [0, -8]
                                        })
                                    },
                                    {
                                        scaleX: this.animatedValue.interpolate({
                                            inputRange: [0, 1],
                                            outputRange: [1, 15]
                                        })
                                    },
                                    {
                                        scaleY: this.animatedValue.interpolate({
                                            inputRange: [0, 1],
                                            outputRange: [1, 12.5]
                                        })
                                    }
                                ]
                            }}
                        />

                    </View>

                </View>

            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    box: {
        height: 100,
        width: 100,
        backgroundColor: '#a0f',
        borderRadius: 30,
    },

    layout1: {
        flex: 2,
        height: Dimensions.get('window').height - 0,
        width: Dimensions.get('window').width - 0,
        backgroundColor: '#ddd',
        alignItems: 'center',
        justifyContent: 'center'
    },
    layout2: {
        flex: 1,
        height: Dimensions.get('window').height - 0,
        width: Dimensions.get('window').width - 0,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center'
    },
    layout3: {
        flex: 1,
        height: Dimensions.get('window').height - 0,
        width: Dimensions.get('window').width - 0,
        backgroundColor: 'darkorange',
        alignItems: 'center',
        justifyContent: 'center'
    },

    btn: {
        backgroundColor: "#a0f",
        width: 100,
        height: 40,
        padding: 3,
        justifyContent: "center",
        borderRadius: 20,
        marginBottom: 10,
        marginLeft: 5,
        marginRight: 5,
        marginTop: -20
    },
    textBtn: {
        color: "#f4f4f4",
        fontWeight: "bold",
        textAlign: "center"
    }

})
