import React from 'react'
import { View, Text,Image, Pressable } from 'react-native'
import {Container,Header} from '@/Components'
import Icon from 'react-native-vector-icons/Feather'
import { Woman } from '../../Assets/Images'
const UserScreen = ({route}) => {
    const {user}=route.params
    return (
        <Container>
            <Header title={user.fullName}/>
            <View style={{borderBottomColor:'black',borderBottomWidth:0.3,paddingHorizontal:20,paddingBottom:10}}>
                <View style={{height:200,alignItems:'center',justifyContent:'center'}}>
                <Image source={Woman} style={{height:80,width:80}}/>
                <View style={{height:5}}/>
                <Text style={{fontSize:16}}>@{user.username}</Text>
                </View>
                <View style={{alignItems:'flex-end'}}>
                    {!user.isFriend?
                    <Pressable>
                        <Text>Add to friends</Text>
                    </Pressable>:
                    <Pressable>
                        <Text>Leave a comment</Text>    
                    </Pressable>}
                </View>
            </View>
        </Container>
    )
}

export default UserScreen
