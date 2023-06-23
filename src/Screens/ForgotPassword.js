import {StyleSheet, Text, View,Alert} from 'react-native';
import React,{useState} from 'react';
import CTextInput from '../Components/CustTextInput';
import Button from '../Components/Button';
import {useNavigation} from '@react-navigation/native'
import { Toast } from 'react-native-toast-message/lib/src/Toast';


export default function ForgotPassword() {

  const navigation = useNavigation()

// Handling reset password

const resetPassword = ()=>{
  if(email == null || email==''){
    Toast.show('Fields cannot be empty')
  }else{
    navigation.navigate('otp')
    
  }
    
}

// handling cancel 
const cancelReset = ()=>{
  navigation.navigate('Login')
}

const [email,userEmail]= useState()



  return (
    <>
      <View style={styles.maincontainer}>
        <View style={{marginTop: 20, marginBottom: 20}}>
          <Text style={{color:"#FFFFFF",fontSize:20,fontWeight:800}}>Forgot Password</Text>
        </View>
      </View>
      <View style={styles.formContainer}>
        <View style={{marginBottom: 20}}>
          {/* <Text>Email : </Text> */}
          <CTextInput placeholder="Email" value={email}/>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Button text="Reset" onPress={resetPassword} />
          <Button text="Cancel" onPress={cancelReset}/>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
    maincontainer: {
        flex: 0.5,
        backgroundColor: '#F57C00',
       borderBottomLeftRadius:60,
       borderBottomRightRadius:60,
       marginBottom:40,justifyContent:"center",
       alignItems:"center"
    
      },
  subcontainer: {
    flex: 0.5,
  },
  formContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
