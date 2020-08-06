import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList, ActivityIndicator, TextInput, TouchableOpacity } from 'react-native'

export default function NEW() {

    const [isLoading, setLoading] = useState(true)
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://reactnative.dev/movies.json')
            .then((response) => response.json())
            .then((json) => setData(json.movies))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, [])


    const [cep, setCep] = useState('')
    const [bairro, setBairro] = useState('')
    const [cidade, setCidade] = useState('')

    function verificarCEP(numCep) {
        let url = 'https://viacep.com.br/ws/' + numCep + '/json/';

        fetch(url)
            .then((response) => response.json())

            .then((json) => { setCep(json.cep), setBairro(json.bairro), setCidade(json.localidade) })

            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }

    
    //2
  function changeText(inputText) {      
      if(inputText.length < 5){
        const formattedText = inputText;
        setCep(formattedText)
      } else if(inputText.length == 5 ) {
        const formattedText = inputText + '-';
        setCep(formattedText)
      } else {
        const formattedText = inputText;
        setCep(formattedText)
      } 
        
    //const formattedText = "\u{1F632}" + inputText;
    //setCep(formattedText)
  }

        

    return (
        <View style={styles.container}>

            <View style={{ width: '88%' }}>
                <TextInput style={{ backgroundColor: '#ff0', color: '#000' }}
                    placeholder='CEP'
                    placeholderTextColor='#555'
                    keyboardType='numeric'
                    maxLength={9}
                    value={cep}
                    onChangeText={text => changeText(text) } />

                <Text style={{ backgroundColor: '#fff', color: '#000', padding: 10 }}>CEP: {cep.replace('-', '')}</Text>
                <Text style={{ backgroundColor: '#fff', color: '#000', padding: 10 }}>BAIRRO: {bairro}</Text>
                <Text style={{ backgroundColor: '#fff', color: '#000', padding: 10 }}>CIDADE: {cidade}</Text>

                <TouchableOpacity style={{ backgroundColor: '#f0f', padding: 10, margin: 10 }}
                    onPress={() => verificarCEP(cep)}>
                    <Text>Buscar Dados VIACEP</Text>
                </TouchableOpacity>
            </View>


            {isLoading ? <ActivityIndicator /> : (
                <FlatList
                    data={data}
                    keyExtractor={({ id }, index) => id}
                    renderItem={({ item }) => (
                        <Text>{item.title}, {item.releaseYear}</Text>
                    )}
                />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ccc'
    },
})

