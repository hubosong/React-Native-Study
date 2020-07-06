import React from 'react'

//usado para navegacao entre telas
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack' //modelo simples de navegacao entre telas


//importar telas
import Home from './Home'
import Views from './pages/Views'
import IMC from './pages/IMC'
import About from './pages/About'
import Tabs from './pages/Tabs'
import Grid from './pages/Grid'
import ElementsComponents from './pages/ElementsComponents'
import Login from './pages/Login'
import PropsStates from './pages/PropsStates'
import FullAPP from './pages/FullAPP'
import Animations from './pages/Animations'
import MainScreen from './pages/screensstacknav/MainScreen'
import Netflix from './pages/clonenetflix/Netflix'
import RippleEffect from './pages/RippleEffect'
import LoginAirBnB from './pages/LoginAirBnB'
import Gradient from './pages/Gradient'
import KeyboardAvoidingView from './pages/KeyboardAvoidingView'
import Another from './pages/Another'
import Json from './pages/Json'
import Cam from './pages/Cam'


//navegador das telas Stack
const Stack = createStackNavigator()

export default function Routes() {
    return (
        <NavigationContainer>

            <Stack.Navigator
                headerMode="none"
                screenOptions={{
                    //headerStyle: { backgroundColor: '#555' },
                    //headerTintColor: '#fff',
                    gestureEnabled: true,
                    gestureDirection: 'horizontal',
                }}>

                {/** colocar todas as telas */}
                <Stack.Screen name='Home' component={Home} options={{ title: 'Dashboard' }} />
                <Stack.Screen name='Views' component={Views} />
                <Stack.Screen name='IMC' component={IMC} />
                <Stack.Screen name='About' component={About} />
                <Stack.Screen name='Tabs' component={Tabs} />
                <Stack.Screen name='Grid' component={Grid} />
                <Stack.Screen name='ElementsComponents' component={ElementsComponents} />
                <Stack.Screen name='Login' component={Login} />
                <Stack.Screen name='PropsStates' component={PropsStates} />
                <Stack.Screen name='FullAPP' component={FullAPP} />
                <Stack.Screen name='Animations' component={Animations} />
                <Stack.Screen name='MainScreen' component={MainScreen} />
                <Stack.Screen name='Netflix' component={Netflix} />
                <Stack.Screen name='RippleEffect' component={RippleEffect} />
                <Stack.Screen name='LoginAirBnB' component={LoginAirBnB} />
                <Stack.Screen name='Gradient' component={Gradient} />
                <Stack.Screen name='KeyboardAvoidingView' component={KeyboardAvoidingView} />
                <Stack.Screen name='Another' component={Another} />
                <Stack.Screen name='Json' component={Json} />
                <Stack.Screen name='Cam' component={Cam} />

            </Stack.Navigator>

        </NavigationContainer>

    )
}
