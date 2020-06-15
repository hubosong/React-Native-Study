import React from 'react'
import { View, Text } from 'react-native'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs' //outro modelo de navegacao


import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'

const TabN = createBottomTabNavigator()

export default function Tabs() {
    return (
        <TabN.Navigator tabBarOptions={{activeBackgroundColor: '#555', activeTintColor: '#fff'}}>
            <TabN.Screen name="Page1" component={Page1} />
            <TabN.Screen name="Page2" component={Page2} />
            <TabN.Screen name="Page3" component={Page3} />
        </TabN.Navigator>
    )
}