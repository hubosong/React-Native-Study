import React from 'react'
import { View, Text, ToastAndroid } from 'react-native'

import { Button, ButtonGroup } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class ElementsComponents extends React.Component {

    // radiobuttons
    constructor() {
        super()
        this.state = {
            selectedIndex: null // colocar o vetor do item a estar selecionado no inicio
        }
        this.radiochoose = this.radiochoose.bind(this)
    }

    radiochoose(selectedIndex) {
        this.setState({ selectedIndex })
        if(selectedIndex === 0){
            ToastAndroid.show('SIM', ToastAndroid.SHORT)        
        } else {
            ToastAndroid.show('NÃO', ToastAndroid.SHORT)        
        }        
    }

    

    render() {
        //const buttons = ['Hello', 'World', 'Buttons']
        const { selectedIndex } = this.state

        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 30, fontWeight: 'bold', marginBottom: 10 }}>BUTTONS</Text>
                <Button title="Button" />
                <Button title="Button with ICON" icon={<Icon name="arrow-right" size={15} color="white" />} />
                <Button iconRight title="Button with RIGHT ICON" icon={<Icon name="arrow-right" size={15} color="white" />} />
                <Button loading />


                <Text style={{ fontSize: 30, fontWeight: 'bold', margin: 10 }}>RADIOBUTTONS</Text>
                <ButtonGroup
                    onPress={this.radiochoose}
                    selectedIndex={selectedIndex}
                    buttons={['SIM', 'NÃO']}
                    containerStyle={{ height: 50 }}
                />
            </View>
        )
    }


}