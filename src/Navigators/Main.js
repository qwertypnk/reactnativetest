import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { IndexExampleContainer } from '@/Containers'
import UserStack from './UserStack.js'
import RequestsScreen from '@/Screens/RequestsScreen'
import Icon from 'react-native-vector-icons/Ionicons'
import FeatherIcon from 'react-native-vector-icons/Feather'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
const Tab = createBottomTabNavigator()

// @refresh reset
const MainNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={IndexExampleContainer} 
      options={{tabBarIcon:()=><Icon name='home' size={25}/>}}/>
      <Tab.Screen name="Users" component={UserStack}
       options={{tabBarIcon:()=><FeatherIcon name='users' size={25}/>}} />
      <Tab.Screen name="Requests" component={RequestsScreen}
       options={{tabBarIcon:()=><MaterialIcon name='add-task' size={25}/>}} />
    </Tab.Navigator>
  )
}

export default MainNavigator
