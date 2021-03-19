import React,{useState} from 'react'
import { View, Text, Pressable } from 'react-native'
import { Container,Input,Button } from '@/Components'
import {addNewUser} from '@/Helpers'
import { Divider } from '../../Components'

const RegisterScreen = ({navigation}) => {
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const [fullName,setFullName]=useState('')
    const register=()=>{
       if(fullName.split(' ').length<2)
       console.log('Full name has to contain at least 2 words')
       else if(username.length<3)
       console.log('Username has to have at elast 3 characters')
       else if(password.length<5)
       console.log('Password has to have at least 5 characters')
       else{
        addNewUser(fullName,username,password)
        navigation.navigate('Login')
       }
    }
    return (
                <Container style={{justifyContent:'center'}}>
                {/* <View style={{height:'20%'}}/> */}
                <View style={{height:'60%',width:'100%',alignItems:'center',justifyContent:'center',paddingHorizontal:'5%'}}>
                <Text style={{fontSize:20}}>Register</Text>
                <Divider h={25}/>
                <Input placeholder='Full name' value={fullName} onChangeText={setFullName}/>
                <Divider/>
                <Input placeholder='Username' value={username} onChangeText={setUsername}/>
                <Divider/>
                <Input placeholder='Password' value={password} onChangeText={setPassword} secureTextEntry/>
                <Divider/>
                <Button onPress={register} title='Register'/>
                <Divider/>
                </View>
                {/* <View style={{height:'20%'}}/> */}
            </Container>
    )
}

export default RegisterScreen
