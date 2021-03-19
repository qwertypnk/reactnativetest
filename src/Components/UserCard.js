import React from 'react'
import { View, Text,Image, Pressable } from 'react-native'
import {User} from '@/Assets/Images'

const UserCard = ({name,onPress}) => (
    <Pressable style={{width:'100%',marginTop:15,borderWidth:0.3,paddingVertical:10}} onPress={onPress}>
        <View>
            <Text style={{textAlign:'center',fontSize:20}}>{name}</Text>
            {/* <View style={{height:0.3,backgroundColor:'black'}}/> */}
            <Image source={User} resizeMode='contain' style={{height:200,width:'100%'}}/>
        </View>
    </Pressable>
)

export default UserCard
