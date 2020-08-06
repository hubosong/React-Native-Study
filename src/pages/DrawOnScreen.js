import React from 'react'
import { Alert, Button, View } from 'react-native'

import DrawView from 'react-native-draw-view'
//https://www.npmjs.com/package/react-native-draw-view

export default class DrawOnScreen extends React.Component {

    drawer

    save = () => {
        this.drawer.save()
    }

    reset = () => {
        this.drawer.reset()
    }

    render() {
        return (
            <View style={{ flex: 1 }}>

                <Button title="Reset" onPress={this.reset} />

                <DrawView
                    style={{ flex: 1, backgroundColor: '#ddd' }}
                    onRef={el => this.drawer = el}
                    strokeWidth={20}
                    color='#a0000f'/>

                <Button title="Save" onPress={this.save} />

            </View>
        )
    }

}