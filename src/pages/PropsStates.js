import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default class PropsStates extends Component {

    constructor(props) {
        super(props)
        this.state = { myText: 'Text from STATE' }
    }

    changeMyText(value) {
        this.setState({ myText: value })
    }

    render() {
        return (
            <View>
                <Text>Hello World</Text>

                <Text>-----------</Text>

                {/** texto usando parametrizacao do PROPS */}
                <SomeText someText='Text from PROPS'></SomeText>

                <Text>-----------</Text>

                {/** texto buscando do STATE */}
                <Text>{this.state.myText}</Text>

                <Text>-----------</Text>

                {/** setando STATE */}
                <View>
                    <Text
                        onPress={() => { this.changeMyText('Text from STATE changed') }}>
                        Change text to 'changed'
                    </Text>

                    <Text
                        onPress={() => { this.changeMyText('Text from STATE') }}>
                        Change text to origin state
                    </Text>
                </View>

            </View>
        )
    }
}


class SomeText extends Component {
    render() {
        return (
            <Text>{this.props.someText}</Text>
        )
    }
}
