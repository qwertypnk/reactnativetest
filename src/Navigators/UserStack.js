import {createStackNavigator} from '@react-navigation/stack'
import UserScreen from '@/Screens/UserScreen'
import UsersScreen from '../Screens/UsersScreen'
import React from 'react'

const Stack = createStackNavigator()

export default UserStack = () =>(
    <Stack.Navigator headerMode={'none'}>
        <Stack.Screen name='Users' component={UsersScreen}/>
        <Stack.Screen name='User' component={UserScreen}/>
    </Stack.Navigator>
)