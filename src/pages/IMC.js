import React, { Component } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';

export default class App extends Component {

    constructor(props) {
        super(props)
        this.state = { altura: 0, massa: 0, resultado: 0, resultadoText: "" }
        this.calcular = this.calcular.bind(this) //chama metodo
    }

    //metodo criado e chamado na linha acima
    calcular() {
        //calcula
        let imc = this.state.massa / (this.state.altura * this.state.altura)
        
        //coloca imc na variavel resultado e seta resultadoText
        let s = this.state
        s.resultado = imc
        
        /**
         * < 16 Magreza Grave
         * 16 a < 17 Magreza Moderada
         * 17 a < 18,5 Magreza Leve
         * 18,5 a < 25 Saudável
         * 25 a < 30 Sobrepeso
         * 30 a < 35 Obesidade Grau I
         * 35 a < 40 Obesidade Grau II (severa)
         * > 40 Obesidade Grau III (mórbida)
         */
        
        if(s.resultado < 16){
            s.resultadoText = "Magreza Grave"
        } else if(s.resultado < 17){
            s.resultadoText = "Magreza Moderada"
        } else if(s.resultado < 18.5){
            s.resultadoText = "Magreza Leve"
        } else if(s.resultado < 25){
            s.resultadoText = "Saudável"
        } else if(s.resultado < 30){
            s.resultadoText = "Sobrepeso"
        } else if(s.resultado < 35){
            s.resultadoText = "Obesidade Grau I"
        } else if(s.resultado < 40){
            s.resultadoText = "Obesidade Grau II (severa)"
        } else{
            s.resultadoText = "Obesidade Grau III (mórbida)"
        }

        this.setState(s)       


    }


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.entradas}>
                    <TextInput placeholder="Altura" keyboardType="numeric" style={styles.input}
                        onChangeText={(altura) => { this.setState({ altura }) }} />
                    <TextInput placeholder="KG" keyboardType="numeric" style={styles.input}
                        onChangeText={(massa) => { this.setState({ massa }) }} />
                </View>

                <TouchableOpacity onPress={this.calcular} style={styles.button}>
                    <Text style={styles.buttonText}>
                        Calcular
                    </Text>
                </TouchableOpacity>

                <Text style={styles.resultado}>
                    {this.state.resultado.toFixed(2)} {/** tofixed coloca apenas 2 casas apos a virgula */}
                </Text>
                <Text style={[styles.resultado, { fontSize: 40 }]}>
                    {this.state.resultadoText}
                </Text>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ddd',
    },

    entradas: {
        flexDirection: 'row',
    },

    input: {
        height: 80,
        textAlign: 'center',
        width: '50%',
        fontSize: 50,
        marginTop: 25,
    },

    button: {
        backgroundColor: '#f0f',
    },

    buttonText: {
        alignSelf: 'center',
        padding: 20,
        fontSize: 25,
        color: '#fff',
        fontWeight: 'bold',
    },

    resultado: {
        alignSelf: 'center',
        color: 'darkgray',
        fontSize: 65,
        padding: 15,
    },


})
