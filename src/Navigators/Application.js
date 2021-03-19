import React, { useEffect, useState,useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { IndexStartupContainer } from '@/Containers'
import { useSelector } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { navigationRef } from '@/Navigators/Root'
import { SafeAreaView, StatusBar } from 'react-native'
import { useTheme } from '@/Theme'
import { AppearanceProvider } from 'react-native-appearance'
import AsyncStorage from '@react-native-async-storage/async-storage'
import MainNavigator from '@/Navigators/Main'
import LoginScreen from '../Screens/LoginScreen'
import RegisterScreen from '../Screens/RegisterScreen'
import { LoginContext } from '../Context/LoginContext'

const Stack = createStackNavigator()

//let MainNavigator

// @refresh reset
const ApplicationNavigator = () => {
  const { Layout, darkMode, NavigationTheme } = useTheme()
  const { colors } = NavigationTheme
  const [isApplicationLoaded, setIsApplicationLoaded] = useState(false)
  // const [userLoggedIn,setUserLoggedIn]=useState(false)
  const [firstLoad,setFirstLoad]=useState(true)
  const applicationIsLoading = useSelector((state) => state.startup.loading)
  const {userLoggedIn,setUserLoggedIn}=useContext(LoginContext)
  // useEffect(() => {
  //   if (MainNavigator == null && !applicationIsLoading) {
  //     MainNavigator = require('@/Navigators/Main').default
  //     setIsApplicationLoaded(true)
  //   }
  // }, [applicationIsLoading])

  // on destroy needed to be able to reset when app close in background (Android)
  const getUser=async()=>{
    let usr=await AsyncStorage.getItem('user')
    if(usr)
    setUserLoggedIn(JSON.parse(usr))
    else
    setUserLoggedIn(null)
  }

  useEffect(()=>{
    getUser()
  },[])
  // useEffect(
  //   () => () => {
  //     setIsApplicationLoaded(false)
  //     MainNavigator = null
  //   },
  //   [],
  // )

  return (
    <AppearanceProvider>
      <SafeAreaView style={[Layout.fill, { backgroundColor: colors.card }]}>
        <NavigationContainer theme={NavigationTheme} ref={navigationRef}>
          <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} />
          <Stack.Navigator headerMode={'none'}>
            {userLoggedIn===false?
              <Stack.Screen name="Startup" component={IndexStartupContainer} />:
            userLoggedIn==null?
            <>
              <Stack.Screen name='Login' component={LoginScreen}/>
              <Stack.Screen name='Register' component={RegisterScreen}/>
            </>:
                <Stack.Screen
                name="Main"
                component={MainNavigator}
                options={{
                  animationEnabled: false,
                }}
              />
            }
            {/* {isApplicationLoaded && MainNavigator != null && (
              <Stack.Screen
                name="Main"
                component={MainNavigator}
                options={{
                  animationEnabled: false,
                }}
              />
            )} */}
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </AppearanceProvider>
  )
}

export default ApplicationNavigator
