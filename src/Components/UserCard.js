import React from 'react'
import { View, Text,Image, Pressable } from 'react-native'
import {User} from '@/Assets/Images'
import {UserSVG} from '@/Assets/Svgs'
import SocialButton from './SocialButton'

const UserCard = ({name,onPress,isFriend}) => (
    <Pressable style={{width:'100%',marginTop:15,paddingVertical:10,alignItems:'center'}} onPress={onPress}>
        <View>
            <UserSVG height={120} width={120}/>
            <Text style={{textAlign:'center',fontSize:18,fontWeight:'bold',color:'white',marginVertical:10}}>{name}</Text>
        </View>
        <SocialButton isFriend={isFriend}/>
    </Pressable>
)

export default UserCard
