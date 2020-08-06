import React, { PureComponent } from 'react';
import { View, Animated, Text, StyleSheet, TouchableOpacity } from 'react-native';

//https://github.com/rashidthedeveloper/react-native-animation-examples/tree/master/src/screens


export default class AnimScale extends PureComponent {

  state = {
    startValue: new Animated.Value(1),
    initialMove: new Animated.Value(0),
  }

  _interpolation = () => {
    Animated.timing(this.state.startValue, {
      toValue: 0,
      duration: 2000,
      useNativeDriver: true,
    }).start()
  }
  _scale = () => {
    Animated.timing(this.state.startValue, {
      toValue: 8,
      duration: 2000,
      useNativeDriver: true,
    }).start()
  }
  _spring = () => {
    Animated.timing(this.state.startValue, {
      toValue: 8,
      friction: 1,
      useNativeDriver: true,
    }).start()
  }
  _startstop = () => {
    Animated.timing(this.state.startValue, {
      toValue: 8,
      duration: 5000,
      useNativeDriver: true,
    }).start()
    setTimeout(() => {
      Animated.timing(this.state.startValue).stop();
    }, 2000)
  }
  _multipleDelay = () => {
    Animated.sequence([
      Animated.timing(this.state.initialMove, {
        toValue: 100,
        duration: 2000,
        useNativeDriver: true,
      }),

      Animated.delay(500),

      Animated.timing(this.state.startValue, {
        toValue: 0,
        duration: 2000,
        useNativeDriver: true,
      }),
    ]).start()
  }
  _multipleStagger = () => {
    Animated.stagger(1000, [
      Animated.timing(this.state.initialMove, {
        toValue: 100,
        duration: 2000,
        useNativeDriver: true,
      }),
      Animated.timing(this.state.startValue, {
        toValue: 0,
        duration: 2000,
        useNativeDriver: true,
      }),
    ]).start()
  }
  _multipleParallel = () => {
    Animated.parallel([
      Animated.timing(this.state.initialMove, {
        toValue: 100,
        duration: 2000,
        useNativeDriver: true,
      }),
      Animated.timing(this.state.startValue, {
        toValue: 0,
        duration: 2000,
        useNativeDriver: true,
      }),
    ]).start()
  }

  _reset = () => {
    this.state.startValue.setValue(1)
    this.state.initialMove.setValue(0)
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center' }}>

        <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', marginTop: 50, }}>
          <TouchableOpacity onPress={this._interpolation} style={{ ...styles.btn }}>
            <Text>INTERPOLATION</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._scale} style={{ ...styles.btn }}>
            <Text>SCALE</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._spring} style={styles.btn}>
            <Text>SPRING</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._startstop} style={styles.btn}>
            <Text>START STOP</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._multipleDelay} style={styles.btn}>
            <Text>MULTIPLE DELAY</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._multipleStagger} style={styles.btn}>
            <Text>MULTIPLE STAGGER</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._multipleParallel} style={styles.btn}>
            <Text>MULTIPLE PARALLEL</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._reset} style={{ ...styles.btn, backgroundColor: '#fd0' }}>
            <Text>RESET</Text>
          </TouchableOpacity>

        </View>



        <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>

          <Animated.View style={{
            ...styles.square, marginTop: 50, backgroundColor: 'green',
            transform: [{ scale: this.state.startValue }]
          }} />

          <Animated.View style={{
            ...styles.square, backgroundColor: 'red',
            transform: [{ scaleY: this.state.startValue }]
          }} />

          <Animated.View style={{
            ...styles.square, backgroundColor: 'blue',
            transform: [{ scaleX: this.state.startValue }]
          }} />

          <Animated.View style={{
            ...styles.square, backgroundColor: 'black', width: 80,
            opacity: this.state.startValue,
            translateX: this.state.initialMove,
          }} />

          <Animated.View style={{
            ...styles.square, backgroundColor: 'grey', width: 50,
            opacity: this.state.startValue,
            transform: [
              {
                translateY: this.state.startValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [150, 0], // 0 : 150, 0.5 : 75, 1 : 0
                  extrapolate: 'clamp',
                })
              }
            ]
          }} />

        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  btn: {
    margin: 5,
    backgroundColor: 'yellow',
    alignItems: 'center',
    padding: 15
  },
  square: {
    height: 30,
    width: 30,
    borderRadius: 30,
    margin: 10
  },
});