import React from 'react'
import { View, Text, StyleSheet, Switch, Platform, ProgressBarAndroid } from 'react-native'

export default class Another extends React.PureComponent {

    state = { switchValue: false }
    toggleSwitch = (value) => {
        if (this.state.switchValue === false) {
            this.setState({ switchValue: value })
            //alert('ligado')
        } else {
            this.setState({ switchValue: value })
            //alert('desligado')
        }

    }

    render() {
        return (
            <View style={styles.container}>


                <View style={{ width: '50%' }}>
                    <ProgressBarAndroid style={{ padding: 20 }} />
                    <ProgressBarAndroid styleAttr='Horizontal' color='#a0f' style={{ padding: 20 }} />
                    <ProgressBarAndroid styleAttr='Horizontal' color='#333' indeterminate={false} progress={0.5} />
                </View>


                <Text style={{ fontSize: 22, marginTop: 20 }}>
                    {this.state.switchValue ? 'Switch is ON' : 'Switch is OFF'}
                </Text>
                <Switch
                    style={{ margin: 30 }}
                    trackColor={{ false: "#888", true: "#a0f" }}
                    thumbColor={this.state.switchValue === false ? "#111" : "#fff"}
                    value={this.state.switchValue}
                    onValueChange={this.toggleSwitch} />

            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ddd'
    },
})