import React,{useState} from 'react'
import { View, Text, Pressable } from 'react-native'
import { Container,Input,Button } from '@/Components'
import {addNewUser,showAlert} from '@/Helpers'
import { Divider } from '../../Components'

const RegisterScreen = ({navigation}) => {
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const [fullName,setFullName]=useState('')
    const register=async()=>{
       if(fullName.split(' ').length<2)
       showAlert('Full name has to contain at least 2 words','error')
       else if(username.length<3)
       showAlert('Username has to have at least 3 characters','error')
       else if(password.length<5)
       showAlert('Password has to have at least 5 characters','error')
       else{
        let res=await addNewUser(fullName,username,password)
        if(res)
        navigation.navigate('Login')
       }
    }
    return (
                <Container style={{justifyContent:'center'}}>
                {/* <View style={{height:'20%'}}/> */}
                <View style={{height:'60%',width:'100%',alignItems:'center',justifyContent:'center',paddingHorizontal:'10%'}}>
                <Text style={{fontSize:24,color:'white',fontWeight:'bold'}}>Register</Text>
                <Divider h={25}/>
                <Input placeholder='Full name' value={fullName} onChangeText={setFullName}/>
                <Divider/>
                <Input placeholder='Username' value={username} onChangeText={setUsername}/>
                <Divider/>
                <Input placeholder='Password' value={password} onChangeText={setPassword} secureTextEntry/>
                <Divider h={30}/>
                <Button onPress={register} title='Register'/>
                <Divider/>
                </View>
                {/* <View style={{height:'20%'}}/> */}
            </Container>
    )
}

// const localStyles=StyleSheet.create({
//     text:{
//         color:'white',
//         fontSize:16
//     }  
//   })

export default RegisterScreen
