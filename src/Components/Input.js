import React from 'react'
import { TextInput,StyleSheet } from 'react-native'
const Input = (props) => <TextInput {...props} style={localStyles.textInput}/>


const localStyles=StyleSheet.create({
    textInput:{
        height:50,
        width:'100%',
        borderRadius:5,
        borderWidth:1,
        borderColor:'#E14032'
    }
})
export default Input
