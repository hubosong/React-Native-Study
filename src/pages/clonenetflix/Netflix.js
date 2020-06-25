import React, { Component } from 'react'
import { ScrollView, View, Text, StyleSheet, Image, Dimensions, TextInput } from 'react-native'

import ImageElement from './ImageElement'

export default class Netflix extends Component {

    //definir estado, passando o endereco das imagens
    state = {
        images: [
            { title: 'One', img: require('./img/img3.jpg') },
            { title: 'Two', img: require('./img/img2.jpg') },
            { title: 'Three', img: require('./img/img1.jpg') },
            { title: 'Four', img: require('./img/img4.jpg') },
            { title: 'Five', img: require('./img/img5.jpg') },
            { title: 'Six', img: require('./img/img6.jpg') },
            { title: 'Seven', img: require('./img/img7.jpg') },
            { title: 'Eight', img: require('./img/img4.jpg') },
            { title: 'Nine', img: require('./img/img6.jpg') },
            { title: 'Ten', img: require('./img/img3.jpg') },
            { title: 'Eleven', img: require('./img/img2.jpg') },
            { title: 'Twelve', img: require('./img/img1.jpg') },
            { title: 'Thirteen', img: require('./img/img4.jpg') },
        ],
        imageReference: [],
        text: '',
    }

    // monsta todas as imagens no array imagereference
    componentDidMount() {
        this.setState({ imageReference: this.state.images })
    }

    search(text) {
        this.setState({ text: text })
        //alert('trying search')

        let imgArr = this.state.images

        for (var i = 0; i < imgArr.length; i++) {
            if (text == imgArr[i].title) {
                this.setState({ images: [imgArr[i]] })
            }
        }

        if (!text) {
            this.setState({ images: this.state.imageReference })
        }
    }

    render() {

        //loop images
        let images = this.state.images.map((val, key) => {
            return (
                /** passa chave unica para cada imagem do array */
                <View key={key} style={styles.imagewrap}>
                    {/** mostra as images no element imageElement */}
                    <ImageElement imgsource={val.img} />
                </View>
            )
        })


        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.txtInput}
                    underlineColorAndroid='transparent'
                    placeholder='Search Movies'
                    placeholderTextColor='#777'
                    onChangeText={(text) => this.search(text)}
                    value={this.state.text} />

                <ScrollView>
                    <View style={styles.photogrid}>
                        {images}
                    </View>

                </ScrollView>

            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#252525',
    },
    photogrid: {
        padding: 2,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    imagewrap: {
        padding: 2,
        height: null,
        width: Dimensions.get('window').width / 2 -2,
    },
    txtInput: {
        textAlign: 'center',
        marginTop: 18,
        marginBottom: 8,
        padding: 10,
        backgroundColor: '#fff',
        color: '#222',
        fontWeight: 'bold'
    },
})