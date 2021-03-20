import React from 'react'
import { TextInput,StyleSheet } from 'react-native'
const Input = (props) => <TextInput {...props} style={localStyles.textInput} placeholderTextColor='rgba(196, 196, 196, 0.5)' selectionColor='white'/>


const localStyles=StyleSheet.create({
    textInput:{
        height:50,
        width:'100%',
        borderRadius:10,
        borderWidth:1,
        borderColor:'white',
        paddingHorizontal:10,
        color:'white',
        fontSize:16
    }
})
export default Input
