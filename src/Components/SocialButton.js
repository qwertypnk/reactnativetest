import React from 'react'
import { Pressable,StyleSheet,Text } from 'react-native'

const SocialButton = ({onPress,isFriend}) => 
<Pressable onPress={onPress} style={isFriend?localStyles.grayButton:localStyles.button}>
    <Text style={{color:'white',fontSize:14}}>{isFriend?'Leave a comment':'Add as a friend'}</Text>
</Pressable>


const localStyles=StyleSheet.create({
    button:{
        height:28,
        width:160,
        borderRadius:10,
        backgroundColor:'#EB5757',
        alignItems:'center',
        justifyContent:'center'
    },
    grayButton:{
        height:28,
        width:160,
        borderRadius:10,
        backgroundColor:'#AEAEAE',
        alignItems:'center',
        justifyContent:'center'
    }
})

export default SocialButton
