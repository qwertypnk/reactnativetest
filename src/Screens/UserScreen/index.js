import React from 'react'
import { View, Text,Image, Pressable } from 'react-native'
import {Container,Header,UserCard} from '@/Components'
import Icon from 'react-native-vector-icons/Feather'
import { Woman } from '../../Assets/Images'

const UserScreen = ({route}) => {
    const {user}=route.params
    return (
        <Container>
            <Header title={user.fullName}/>
            <View style={{paddingHorizontal:20,paddingBottom:10}}>
                {/* <Image source={Woman} style={{height:80,width:80}}/>
                <View style={{height:5}}/>
                <Text style={{fontSize:16}}>@{user.username}</Text> */}
                <UserCard 
                onPress={()=>{}}
                name={user.username}
                isFriend={user.isFriend}
                />
                {/* <View style={{alignItems:'flex-end'}}>
                    {!user.isFriend?
                    <Pressable>
                        <Text>Add to friends</Text>
                    </Pressable>:
                    <Pressable>
                        <Text>Leave a comment</Text>    
                    </Pressable>}
                </View> */}
            </View>
        </Container>
    )
}

export default UserScreen
