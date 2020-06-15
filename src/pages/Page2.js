import React from 'react';
import { View, Text, Button } from 'react-native';

export default function Page2 ({ route }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            
            <Text style={{fontSize:50, marginBottom:20}}>Page 2</Text>
            
            <Text style={{fontSize:30}}>Param: {route.params?.nome} </Text>
            {/** se usa params? com interrogacao para proteger caso venha vazio */}

        </View>
    )
}
