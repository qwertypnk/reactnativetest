import {createStackNavigator} from '@react-navigation/stack'
import LoginScreen from '../Screens/LoginScreen'
import RegisterScreen from '../Screens/RegisterScreen'

const Stack = createStackNavigator()

export default AuthStack = () =>(
    <Stack.Navigator>
        <Stack.Screen name='Login' component={LoginScreen}/>
        <Stack.Screen name='Register' component={RegisterScreen}/>
    </Stack.Navigator>
)