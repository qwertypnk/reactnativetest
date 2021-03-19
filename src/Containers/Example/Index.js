import React, { useState,useContext } from 'react'
import { useDispatch } from 'react-redux'
import {
  View,
  ActivityIndicator,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import { Brand } from '@/Components'
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
    <View style={[Layout.fill, Layout.colCenter, Gutters.smallHPadding]}>
      <View style={[[Layout.colCenter, Gutters.smallHPadding]]}>
        <Brand />
          <Text style={Fonts.textRegular}>
            {t('example.helloUser', { name: userLoggedIn?.username })}
          </Text>
      </View>
      <View
        style={[
          Layout.row,
          Layout.rowHCenter,
          Gutters.smallHPadding,
          Gutters.largeVMargin,
          Common.backgroundPrimary,
        ]}
      >
        <Text style={[Layout.fill, Fonts.textCenter, Fonts.textSmall]}>
          {t('example.labels.userId')}
        </Text>
        <TextInput
          onChangeText={(text) => fetch(text)}
          // editable={!fetchOneUserLoading}
          keyboardType={'number-pad'}
          maxLength={1}
          value={userId}
          selectTextOnFocus
          style={[Layout.fill, Common.textInput]}
        />
      </View>
      <Text style={[Fonts.textRegular, Gutters.smallBMargin]}>DarkMode :</Text>

      <TouchableOpacity
        style={[Common.button.rounded, Gutters.regularBMargin]}
        onPress={() => changeTheme({ darkMode: null })}
      >
        <Text style={Fonts.textRegular}>Auto</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[Common.button.outlineRounded, Gutters.regularBMargin]}
        onPress={() => changeTheme({ darkMode: true })}
      >
        <Text style={Fonts.textRegular}>Dark</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[Common.button.outline, Gutters.regularBMargin]}
        onPress={() => changeTheme({ darkMode: false })}
      >
        <Text style={Fonts.textRegular}>Light</Text>
      </TouchableOpacity>
      <TouchableOpacity
      // style={[Common.button.outline, Gutters.regularBMargin]}
       onPress={logout}>
         <Text>Log out</Text>
      </TouchableOpacity>
    </View>
  )
}

export default IndexExampleContainer
