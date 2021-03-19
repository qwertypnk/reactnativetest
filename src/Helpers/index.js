import AsyncStorage from "@react-native-async-storage/async-storage"

export const addNewUser=async(fullName,username,password)=>{
    let users=JSON.parse(await AsyncStorage.getItem('users'))||[]
    console.log('all users')
    console.log(users)
    let filtered=users.filter(u=>u.username===username)
    console.log('ovo je filtered')
    console.log(filtered)
    if(filtered.length>0)
    console.log('User already exists')
    else{
        users.push({fullName,username,password})
        await AsyncStorage.setItem('users',JSON.stringify(users))
    }
}
