import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import {useNavigation} from '@react-navigation/native'

export default function SplashScreen() {

    const navigation = useNavigation()
    useEffect(() => {
      setTimeout(() => {
        navigation.replace('Login')
      }, 2000);
    }, [])
    
  return (
    <View style={styles.maincontainer}>
            <Text style={styles.title}>India's First Home Kitchen</Text>
            <Image  source={require('../../assets/Images/foodD.webp')} style={{width:400,height:400}}/>
    </View>
  )
}

const styles = StyleSheet.create({
    maincontainer:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:'#F57C00'

    },
    title:{fontSize:15,fontWeight:800,color:"#FFFFFF"}
})