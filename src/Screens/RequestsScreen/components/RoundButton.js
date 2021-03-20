import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

const RoundButton = ({yes}) => 
<View 
style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
    {yes?<Icon size={22} name='check-circle' color='white'/>:<Icon size={22} name='x-circle' color='white'/>}
    <Text style={[localStyles.text,{marginLeft:5}]}>{yes?'Accept':'Reject'}</Text>
</View>

const localStyles=StyleSheet.create({
    text:{
        color:'white'
    }
})
export default RoundButton
