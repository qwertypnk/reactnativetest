import React from 'react'
import { Pressable,StyleSheet,Text } from 'react-native'

const Button = ({onPress,title}) => 
<Pressable onPress={onPress} style={localStyles.button}>
    <Text>{title}</Text>
</Pressable>


const localStyles=StyleSheet.create({
    button:{
        height:50,
        width:120,
        borderRadius:15,
        borderColor:'#E14032',
        borderWidth:1,
        alignItems:'center',
        justifyContent:'center'
    }
})
export default Button
