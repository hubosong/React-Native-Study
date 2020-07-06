import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

export default class Json extends React.PureComponent {

    state = {
        data: [],
        data1: [
            {
                name: 'Caroline',
                contact: '999',
            },
            {
                name: 'Robson',
                contact: '888',
            },
        ]
    }

    componentDidMount(){
        this.fetchData()
    }

    fetchData = async () => {
        const response = await fetch('https://randomuser.me/api?results=50')
        const json = await response.json()

        this.setState({data: json.results})
    }
    
    render(){
        return (
            <View>
                <Text style={{marginTop: 15, fontWeight: 'bold', alignSelf: 'center'}}>Display JSON Data</Text>

                <FlatList
                    style={{margin:15, alignSelf: 'center'}}
                    data={this.state.data1}
                    keyExtractor={(x, i) => i}
                    renderItem={({ item }) =>
                        <Text>
                            {`${item.name} ${item.contact}`}
                        </Text>
                    }
                />
    
                <FlatList
                    data={this.state.data}
                    keyExtractor={(x, i) => i}
                    renderItem={({ item }) =>
                        <Text>
                            {`${item.name.first} ${item.name.last}`}
                        </Text>
                    }
                />
    
            </View>
        )
    }   

}

/*
export default function Json () {

    const data =
        [
            {
                name: 'sam',
                contact: '999',
            },
            {
                name: 'kely',
                contact: '888',
            },
            {
                name: 'hu',
                contact: '777',
            },
            {
                name: 'carol',
                contact: '555',
            },
            {
                name: 'su',
                contact: '333',
            },
        ]
    
    
    return (
        <View style={styles.container}>
            <Text>Display JSON Data</Text>

            <FlatList
                data={data}
                keyExtractor={(x, i) => i}
                renderItem={({ item }) =>
                    <Text>{item.name} -- {item.contact}</Text>
                }
            />

        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
*/