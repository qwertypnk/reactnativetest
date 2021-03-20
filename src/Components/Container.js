import React from 'react'
import { View, Text,ImageBackground } from 'react-native'
import { Background } from '../Assets/Images'

const Container = ({children,style}) => {
    return (
        <View style={{flex:1}}>
            <ImageBackground style={[{flex:1},{...style}]} source={Background}>
            {children}
            </ImageBackground>
        </View>
    )
}

export default Container
