import React from 'react'
import { View, Text,Pressable,StyleSheet } from 'react-native'
import RoundButton from './RoundButton'

import {UserSVG} from '@/Assets/Svgs'

const RequestContainer = ({user}) => (
    <View style={{width:'100%',paddingVertical:20,flexDirection:'row'}}>
        <View style={{justifyContent:'center',alignItems:'center',width:'30%'}}>
            <UserSVG height={70} width={70}/>
        </View>
        <View style={{width:'70%',paddingRight:'5%'}}>
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
            <Text style={[localStyles.text,{fontWeight:'bold',fontSize:18}]}>
            {user.fullName}
            </Text>
            <Text style={localStyles.text}>
                20min ago
            </Text>
            </View>
        <View style={{flex:1,justifyContent:'flex-end',alignItems:'flex-end',flexDirection:'row'}}>
        <RoundButton yes/>
        <View style={{width:25}}/>
        <RoundButton />
        </View>
        </View>
    </View>
)

const localStyles = StyleSheet.create({
    text:{
        color:'white'
    }
})
export default RequestContainer
