import React,{useState,useContext} from 'react'
import { View, Text, Pressable,StyleSheet } from 'react-native'
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
            await AsyncStorage.setItem('user',JSON.stringify(users[i]))
            setUserLoggedIn(users[i])
        }
    }
    return (
        <Container style={{justifyContent:'center'}}>
            {/* <View style={{height:'20%'}}/> */}
            <View style={{height:'60%',width:'100%',alignItems:'center',justifyContent:'center',paddingHorizontal:'10%'}}>
            <Text style={{fontSize:24,color:'white',fontWeight:'bold'}}>Login</Text>
            <Divider h={25}/>
            <Input placeholder='Username' value={username} onChangeText={setUsername}/>
            <Divider/>
            <Input placeholder='Password' value={password} onChangeText={setPassword} secureTextEntry/>
            <Divider h={30}/>
            <Button onPress={login} title='Login'/>
            <Divider/>
            <Pressable style={{alignItems:'center',flexDirection:'row'}} onPress={goToRegister}>
                <Text style={localStyles.text}>
                    Don't have an account?
                </Text>
                <Text style={[localStyles.text,{fontWeight:'bold'}]}>
                    {' '}Register now
                </Text>
            </Pressable>
            </View>
            {/* <View style={{height:'20%'}}/> */}
        </Container>
    )
}

const localStyles=StyleSheet.create({
  text:{
      color:'white',
      fontSize:16
  }  
})
export default LoginScreen
