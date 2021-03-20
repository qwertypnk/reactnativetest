import React from 'react'
import { View, Text, Pressable } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import {useNavigation} from '@react-navigation/native'
import {useTheme} from '@/Theme'
const Header = ({title}) => {
const navigation=useNavigation()
const { Common } = useTheme()
return <View style={{height:60,width:'100%',backgroundColor:'#EB5757',flexDirection:'row'}}>
<Pressable style={{width:'15%',alignItems:'center',justifyContent:'center'}} onPress={()=>navigation.goBack()}>
<Icon name='chevron-back' color='white' size={25}/>
</Pressable>
<View style={{width:'70%',alignItems:'center',justifyContent:'center'}}>
    <Text style={{color:'white',fontSize:18}}>
    {title}
    </Text>
</View>
<View style={{width:'15%'}}>

</View>
</View>}

export default Header
