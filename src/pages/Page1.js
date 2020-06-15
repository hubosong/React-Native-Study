import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default function Page1({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 50 }}>Page1</Text>

            <Button
                title="Acessar Page2"
                onPress={() => navigation.navigate('Page2', {nome: 'Machczew', idade: 30})} />
                {/** enviado parametro nome entao quando abrir a tela se pode usar */}

        </View>
    )
}
