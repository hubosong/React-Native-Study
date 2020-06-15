import React from 'react'

//usado para navegacao entre telas
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack' //modelo simples de navegacao entre telas


//importar telas
import Home from './pages/Home'
import Views from './pages/Views'
import IMC from './pages/IMC'
import About from './pages/About'
import Tabs from './pages/Tabs'

//navegador das telas Stack
const Stack = createStackNavigator()

export default function Routes() {
    return (
        <NavigationContainer>

            <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#555' }, headerTintColor: '#fff' }}>

                {/** colocar todas as telas */}
                <Stack.Screen name='Home' component={Home} options={{ title: 'Dashboard' }} />
                <Stack.Screen name='Views' component={Views} />
                <Stack.Screen name='IMC' component={IMC} />
                <Stack.Screen name='About' component={About} />
                <Stack.Screen name='Tabs' component={Tabs} />

            </Stack.Navigator>

        </NavigationContainer>

    )
}
