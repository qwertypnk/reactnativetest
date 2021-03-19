import React from 'react'
import { View, Text } from 'react-native'

const RoundButton = ({icon,yes}) => 
<View style={{height:32,width:32,borderRadius:16,alignItems:'center',justifyContent:'center',borderColor:yes?'green':'red',borderWidth:1}}>
{icon}
</View>

export default RoundButton
