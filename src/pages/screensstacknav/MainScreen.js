import React from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import styles from './styles'

import { createStackNavigator } from '@react-navigation/stack'
const StackNav = createStackNavigator()

import Screen1 from './Screen1'
import Screen2 from './Screen2'

//let a1 = 'Anim1'
const nav = {
    main: 'Main',
    screen1: 'Screen1', 
    screen2: ['Screen2', Screen2]
}


function Main({navigation}) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <TouchableHighlight style={styles.btn} underlayColor='#555' onPress={() => {navigation.navigate('Screen1')}}>
                <Text style={styles.btnText}>Acessar Screen 1</Text>
            </TouchableHighlight>
        </View>
    )
}

export default function MainScreen({route}) {
    return (
        <StackNav.Navigator>
            <StackNav.Screen name={nav.main} component={Main} />
            <StackNav.Screen name={'Screen1'} component={Screen1} />
            <StackNav.Screen name={nav.screen2[0]} component={nav.screen2[1]} />
        </StackNav.Navigator>

    )
}
