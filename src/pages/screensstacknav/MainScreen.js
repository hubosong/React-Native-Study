import React from 'react'
import { View, Text, TouchableHighlight, ImageBackground, Image, StatusBar } from 'react-native'
import styles from './styles'

import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack'
const StackNav = createStackNavigator()

//screens
import Screen1 from './Screen1'
import Screen2 from './Screen2'

import bg from '../../assets/bg.jpg'
import logo from '../../assets/react.png'

//let a1 = 'Anim1'
const nav = {
    main: 'Main',
    screen1: 'Screen1',
    screen2: ['Screen2', Screen2]
}

//Main Page
function Main({ navigation }) {
    return (
        <ImageBackground source={bg} style={styles.mainContainer}>
            <View style={styles.mainDark}>
                <View style={styles.mainView}>
                    <Image source={logo} style={{ width: 130, height: 150 }} />
                    <Text style={styles.mainTXT}>Navigation APP</Text>
                    <TouchableHighlight style={styles.btn} onPress={() => { navigation.navigate('Screen1') }}>
                        <Text style={styles.btnText}>A C E S S A R</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </ImageBackground>
    )
}

//Routes Page
export default function MainScreen({ route }) {
    return (
        <>
            <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />
            <StackNav.Navigator
                headerMode='none'
                screenOptions={{
                    gestureEnabled: true,
                    gestureDirection: 'horizontal',
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
                }}>
                <StackNav.Screen name={nav.main} component={Main} />
                <StackNav.Screen name={'Screen1'} component={Screen1} />
                <StackNav.Screen name={nav.screen2[0]} component={nav.screen2[1]} />
            </StackNav.Navigator>
        </>
    )
}

/**
 * export default Routes = createStackNavigator({
    Main: {screen: Main},
    Screen1: {screen: Screen1},
    Screen2: {screen: Screen2},
   })
 */