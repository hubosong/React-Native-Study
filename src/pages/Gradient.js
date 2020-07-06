import React from 'react'
import { View, Text } from 'react-native'

export default class Gradient extends React.Component {

    render() {

        const gradientHeight = 500
        const data = Array.from({ length: gradientHeight })

        const data1 = Array.from({ length: 40 })

        return (
            <View style={{ flex: 1, backgroundColor: '#ccc' }}>
                {data.map((_, i) => (
                    <View
                        key={i}
                        style={{
                            position: 'absolute',
                            backgroundColor: 'darkorange',
                            height: 1,
                            bottom: (gradientHeight - i),
                            right: 0,
                            left: 0,
                            //zIndex: 2,
                            opacity: (1 / gradientHeight) * (i + 1)
                        }}
                    />
                ))}

                <Text>teste</Text>

                <View style={{ height: 40, marginHorizontal: 25, backgroundColor: '#000' }}>
                {data1.map((_, i) => (
                    <View
                        key={i}
                        style={{
                            position: 'absolute',
                            backgroundColor: 'darkorange',
                            height: 1,
                            bottom: (40 - i),
                            right: 0,
                            left: 0,
                            //zIndex: 2,
                            opacity: (1 / 40) * (i + 1)
                        }}
                    />
                ))}

                </View>
            </View>
        )
    }

}


class fGradient extends React.Component {

    render() {

        const gradientHeight = 500
        const data = Array.from({ length: gradientHeight })

        return (
            <>
                {data.map((_, i) => (
                    <View
                        key={i}
                        style={{
                            position: 'absolute',
                            backgroundColor: 'darkorange',
                            height: 1,
                            bottom: (gradientHeight - i),
                            right: 0,
                            left: 0,
                            //zIndex: 2,
                            opacity: (1 / gradientHeight) * (i + 1)
                        }}
                    />
                ))}

            </>
        )
    }

}