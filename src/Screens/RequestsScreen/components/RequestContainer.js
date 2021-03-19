import React from 'react'
import { View, Text,Pressable } from 'react-native'
import RoundButton from './RoundButton'
import Icon from 'react-native-vector-icons/Feather'

const RequestContainer = ({user}) => (
    <View style={{height:90,width:'100%',paddingHorizontal:'5%',paddingVertical:5,borderBottomColor:'black',borderBottomWidth:0.5}}>
        <View style={{flexDirection:'row',justifyContent:'space-between',flex:1}}>
            <Text>
            {user.fullName}
            </Text>
            <Text>
                20 mins ago
            </Text>
        </View>
        <View style={{flex:1,justifyContent:'flex-end',alignItems:'flex-end',flexDirection:'row'}}>
        <RoundButton icon={<Icon size={25} name='check' />} yes/>
        <View style={{width:15}}/>
        <RoundButton icon={<Icon size={25} name='x'/>}/>
        </View>
    </View>
)

export default RequestContainer
