import AsyncStorage from '@react-native-async-storage/async-storage'
import React,{useState,useEffect} from 'react'
import { View, Text,FlatList } from 'react-native'
import RequestContainer from './components/RequestContainer'
import {Container,Header} from '@/Components'

const RequestsScreen = () => {
    const [users,setUsers]=useState([])
    useEffect(()=>{
        const getUsers=async()=>{
            let data=await AsyncStorage.getItem('users')||[]
            setUsers(JSON.parse(data))
        }
        getUsers()
    },[])
    return (
        <Container>
            <Header title='Requests'/>
            <FlatList
           // contentContainerStyle={{paddingHorizontal:'3%'}}
            data={users}
            keyExtractor={(item)=>item.username}
            renderItem={({item})=><RequestContainer user={item}/>}
            />
        </Container>
    )
}

export default RequestsScreen
