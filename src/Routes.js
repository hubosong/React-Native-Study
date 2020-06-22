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

//navegador das telas Stack
const Stack = createStackNavigator()

export default function Routes() {
    return (
        <NavigationContainer>

            <Stack.Navigator
                //headerMode="none"
                screenOptions={{
                    headerStyle: { backgroundColor: '#555' },
                    headerTintColor: '#fff'
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

            </Stack.Navigator>

        </NavigationContainer>

    )
}
