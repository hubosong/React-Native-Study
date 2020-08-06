import React from 'react'
import { StyleSheet, Animated, View, Text, Dimensions } from 'react-native'

import { PanGestureHandler, State } from 'react-native-gesture-handler'

//https://codedaily.io/tutorials/55/Create-a-Draggable-Opacity-Changing-Circle-with-Reanimated-in-React-Native
//https://blog.bitsrc.io/using-the-gesture-handler-in-react-native-c07f84ddfa49


export default class DragDrop extends React.PureComponent {

    //constructoar ou state
    dragX = new Animated.Value(0)
    dragY = new Animated.Value(0)
    onGestureEvent = Animated.event([
        {
            nativeEvent: { translationX: this.dragX, translationY: this.dragY }
        }
    ], { useNativeDriver: true })

    //faz voltar para posicao inicial
    onHandlerStateChange = event => {
        if (event.nativeEvent.oldState == State.ACTIVE) {
            Animated.timing(this.dragX, {
                toValue: 0,
                duration: 500,
                useNativeDriver: true
            }).start()
            Animated.timing(this.dragY, {
                toValue: 0,
                duration: 500,
                useNativeDriver: true
            }).start()
        }
    }

    renderDraggable() {
        return (
            <View style={styles.draggableContainer}>

                <PanGestureHandler
                    maxPointers={1}
                    onGestureEvent={this.onGestureEvent}
                    onHandlerStateChange={this.onHandlerStateChange}>
                    <Animated.View
                        style={{
                            ...styles.circle,
                            transform: [{
                                translateX: this.dragX, 
                                translateY: this.dragY
                            }]
                        }}>

                        <Text style={styles.text}>Drag me!</Text>
                    </Animated.View>
                </PanGestureHandler>

            </View>
        )
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                
                {this.renderDraggable()}
                
                <View style={styles.dropZone}>
                    <Text style={styles.text}>Drop me here!</Text>
                </View>
            </View>
        )
    }
}

const CIRCLE_RADIUS = 36;
const Window = Dimensions.get('window');
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    dropZone: {
        height: 100,
        backgroundColor: '#2c3e50'
    },
    text: {
        marginTop: 25,
        marginLeft: 5,
        marginRight: 5,
        textAlign: 'center',
        color: '#fff'
    },
    draggableContainer: {
        position: 'absolute',
        top: Window.height / 2 - CIRCLE_RADIUS,
        left: Window.width / 2 - CIRCLE_RADIUS,
    },
    circle: {
        backgroundColor: '#1abc9c',
        width: CIRCLE_RADIUS * 2,
        height: CIRCLE_RADIUS * 2,
        borderRadius: CIRCLE_RADIUS
    }
});