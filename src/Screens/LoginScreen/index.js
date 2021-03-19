import React,{useState,useContext} from 'react'
import { View, Text, Pressable } from 'react-native'
import { Container,Input,Button } from '@/Components'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { LoginContext } from '../../Context/LoginContext'
import { Divider } from '../../Components'

const LoginScreen = ({navigation}) => {
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const {setUserLoggedIn}=useContext(LoginContext)
    const goToRegister=()=>{
        navigation.navigate('Register')
    }
    const login=async()=>{
        let users=await JSON.parse(await AsyncStorage.getItem('users'))||[]
        let i=users.findIndex(e=>e.username===username && e.password===password)
        if(i!==-1)
        {
            console.log('Moze dalje')
            await AsyncStorage.setItem('user',JSON.stringify(users[i]))
            setUserLoggedIn(users[i])
        }
    }
    return (
        <Container style={{justifyContent:'center'}}>
            {/* <View style={{height:'20%'}}/> */}
            <View style={{height:'60%',width:'100%',alignItems:'center',justifyContent:'center',paddingHorizontal:'5%'}}>
            <Text style={{fontSize:20}}>Login</Text>
            <Divider h={25}/>
            <Input placeholder='Username' value={username} onChangeText={setUsername}/>
            <Divider/>
            <Input placeholder='Password' value={password} onChangeText={setPassword} secureTextEntry/>
            <Divider/>
            <Button onPress={login} title='Log in'/>
            <Divider/>
            <Pressable style={{alignItems:'center'}} onPress={goToRegister}>
                <Text>
                    Don't have an account?
                </Text>
                <Text>
                    Register now!
                </Text>
            </Pressable>
            </View>
            {/* <View style={{height:'20%'}}/> */}
        </Container>
    )
}

export default LoginScreen
