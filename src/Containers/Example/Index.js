import React, { useState,useContext } from 'react'
import { useDispatch } from 'react-redux'
import {
  View,
  ActivityIndicator,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import { Brand,Button,Container,Input } from '@/Components'
import { useTheme } from '@/Theme'
import FetchOne from '@/Store/User/FetchOne'
import { useTranslation } from 'react-i18next'
import ChangeTheme from '@/Store/Theme/ChangeTheme'
import { LoginContext } from '../../Context/LoginContext'
import AsyncStorage from '@react-native-async-storage/async-storage'


const IndexExampleContainer = () => {
  const { t } = useTranslation()
  const { Common, Fonts, Gutters, Layout } = useTheme()
  const dispatch = useDispatch()
  const {userLoggedIn,setUserLoggedIn} = useContext(LoginContext)
 // const user = useSelector((state) => state.user.item)
  // const fetchOneUserLoading = useSelector(
  //   (state) => state.user.fetchOne.loading,
  // )
  // const fetchOneUserError = useSelector((state) => state.user.fetchOne.error)

  const [userId, setUserId] = useState('1')

  const fetch = (id) => {
    // setUserId(id)
  //  dispatch(FetchOne.action(id))
  }

  const changeTheme = ({ theme, darkMode }) => {
    dispatch(ChangeTheme.action({ theme, darkMode }))
  }
  const logout=async()=>{
    setUserLoggedIn(null)
    await AsyncStorage.removeItem('user')
  }
  return (
    <Container style={{paddingHorizontal:'10%'}}>
      <View style={[[Layout.colCenter, Gutters.smallHPadding,{marginTop:25,marginBottom:10}]]}>
        <Brand height={150} width={150}/>
          <Text style={[localStyles.textHeader,{marginVertical:0,fontSize:24,fontWeight:'bold'}]}>
           { userLoggedIn?.fullName }
          </Text>
      </View>
        <Text style={localStyles.textHeader}>
          User ID:
        </Text>
        <Input value={userId} onChangeText={(text) => fetch(text)}/>
      <Text style={localStyles.textHeader}>Mode:</Text>
      <View style={{alignItems:'center'}}>
      <Button title='Auto' onPress={() => changeTheme({ darkMode: null })} withMargin/>
      <Button title='Dark'  onPress={() => changeTheme({ darkMode: true })} withMargin transparent/>
      <Button title='Light' onPress={() => changeTheme({ darkMode: false })} withMargin transparent/>
      <TouchableOpacity
       onPress={logout}>
         <Text style={[localStyles.textHeader,{fontWeight:'bold',marginTop:35}]}>Log out</Text>
      </TouchableOpacity>
      </View>
    </Container>
  )
}

const localStyles=StyleSheet.create({
  textHeader:{
    fontSize:18,
    color:'white',
    marginVertical:15
  }
})
export default IndexExampleContainer
