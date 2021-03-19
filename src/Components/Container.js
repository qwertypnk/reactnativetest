import React from 'react'
import { View, Text } from 'react-native'

const Container = ({children,style}) => {
    return (
        <View style={[{flex:1},{...style}]}>
            {children}
        </View>
    )
}

export default Container
