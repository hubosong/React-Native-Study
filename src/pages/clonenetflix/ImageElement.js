import React, { Component } from 'react'
import {View, Text, StyleSheet, Image } from 'react-native'

export default class ImageElement extends Component {
    render(){
        //this.props.imgsource passa o paramentro a ser setado pela outra tela
        return(
            <Image source={this.props.imgsource} style={styles.image}/>
        )
    }    
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        width: null,
        alignSelf: 'stretch',
    },
})