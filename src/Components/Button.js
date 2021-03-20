import React from 'react'
import { Pressable,StyleSheet,Text } from 'react-native'

const Button = ({onPress,title,withMargin=false,transparent=false}) => 
<Pressable onPress={onPress} style={[transparent?localStyles.transparentButton:localStyles.button,withMargin&&{marginVertical:8}]}>
    <Text style={{color:transparent?'rgba(255, 255, 255, 0.5)':'white',fontSize:16}}>{title}</Text>
</Pressable>


const localStyles=StyleSheet.create({
    button:{
        height:36,
        width:120,
        borderRadius:10,
        backgroundColor:'#EB5757',
        alignItems:'center',
        justifyContent:'center'
    },
    transparentButton:{
        height:36,
        width:120,
        borderRadius:10,
        borderColor:'rgba(255, 255, 255, 0.5)',
        borderWidth:1,
        alignItems:'center',
        justifyContent:'center'
    }
})
export default Button
