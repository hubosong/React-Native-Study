import React from 'react'
import { View, Text } from 'react-native'

import { Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'

export default function ElementsComponents() {

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{fontSize: 30, fontWeight: 'bold', marginBottom: 10}}>BUTTONS</Text>
            
            <Button title="Button" />
            
            <Button title="Button with ICON" icon={<Icon name="arrow-right" size={15} color="white" />}/>
            
            <Button iconRight title="Button with RIGHT ICON" icon={<Icon name="arrow-right" size={15} color="white"/>}/>
            
            <Button loading/>

            <Text style={{fontSize: 30, fontWeight: 'bold', margin: 10}}>RADIOBUTTONS</Text>
        </View>
    )

}