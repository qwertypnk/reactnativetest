import React,{useState,useEffect} from 'react'
import { View, Text,FlatList, Pressable } from 'react-native'
import {Container,Header,UserCard} from '@/Components'
import AsyncStorage from '@react-native-async-storage/async-storage'
import UsersJSON from './UsersJSON.json'

const UsersScreen = ({navigation}) => {
    const [users,setUsers]=useState([])
    const getUsers=async()=>{
       // setUsers(JSON.parse(await AsyncStorage.getItem('users')))
       setUsers(UsersJSON)
    }
    const renderItem=({item})=>
    <UserCard onPress={()=>navigation.navigate('User',{user:item})}
    name={item.username}
    isFriend={item.isFriend}/>
    useEffect(()=>{
        getUsers()
    },[])
    return (
        <Container>
            <Header title='Users'/>
            <FlatList
            data={users}
            keyExtractor={(item)=>item.username}
            renderItem={renderItem}
            />
        </Container>
    )
}

export default UsersScreen
