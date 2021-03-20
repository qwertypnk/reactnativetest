import AsyncStorage from "@react-native-async-storage/async-storage"
import { showMessage } from 'react-native-flash-message'

const chooseColor = (type) => {
    switch (type) {
      case 'error':
        return '#BE2335'
      case 'warning':
        return '#e3c322'
      default:
        return '#23BC76'
    }
  }
export const showAlert = (message, type = '#23BC76') => {
    showMessage({
      message,
      type: 'info',
      backgroundColor: chooseColor(type),
      color: '#FFF',
      duration: 5000,
      animationDuration: 500,
      floating: true,
      textStyle: { fontSize: 16 },
    })
  }

export const addNewUser=async(fullName,username,password)=>{
    let users=JSON.parse(await AsyncStorage.getItem('users'))||[]
    let filtered=users.filter(u=>u.username===username)
    if(filtered.length>0){
        showAlert('User already exists','error')
        return false
    }
    else{
        users.push({fullName,username,password})
        await AsyncStorage.setItem('users',JSON.stringify(users))
        showAlert('User created successfuly')
        return true
    }
}



