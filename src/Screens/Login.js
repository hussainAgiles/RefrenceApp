import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import CTextInput from '../Components/CustTextInput';
import Button from '../Components/Button';
import ButtonIcon from '../Components/ButtonIcon';
import {useNavigation} from '@react-navigation/native'
import Entypo from 'react-native-vector-icons/Entypo'



export default function Login() {

    const navigation = useNavigation()

    const handleSignIn = ()=>{
        navigation.navigate('Dashboard')
    }

    const handleRegister = ()=>{
        navigation.navigate('Register')
    }

    const handleForgotPassword = () =>{
        navigation.navigate('forgotpassword')
    }
    


  return (
    <>
      <View style={styles.maincontainer}>
        <View style={{marginBottom: 20}}>
          <Image source={require('../../assets/Images/dish.jpg')}/>
        </View>
      </View>

      <View style={styles.subcontainer}>
        <View style={{marginTop: 20, marginBottom: 5}}>
          {/* <Text
            style={{
              textAlign: 'center',
              color: '#FFFFFF',
              fontSize: 20,
              fontWeight: 800,
            }}>
            Fast Cook
          </Text> */}
        </View>

        <View style={styles.formContainer}>
          <View style={{marginBottom: 20}}>
            {/* <Text>Email : </Text> */}
            <CTextInput placeholder="Email" keyboardType='email-address' autoCapitalize='none' />
          </View>
          <View style={{marginBottom: 20}}>
            {/* <Text>Password : </Text> */}
            <CTextInput placeholder="Password" secureTextEntry={true} />
          </View>
          <View style={{flexDirection:"row",justifyContent:"space-between"}}>
            <Button text='Sign In' onPress={handleSignIn} />
            <Button text='Sign Up' onPress={handleRegister} />
          </View>
          <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:10}}>
            <TouchableOpacity onPress={handleForgotPassword}>
                <Text style={{color:'#1565C0',textDecorationLine:'underline'}}>Forgot Password ?</Text>
            </TouchableOpacity>
          </View>

          <View style={{flexDirection:"column",justifyContent:"center",marginTop:10}}>
            <View style={{marginBottom:10}}><ButtonIcon text='Sign up with Facebook' onPress={handleSignIn} leftIcon='facebook' iconColor="#FFFFFF" outerStyle={{backgroundColor: '#1565C0'}} /></View>
            <View><ButtonIcon text='Sign up with Google' onPress={handleRegister} leftIcon='google-' iconColor="#BF360C" outerStyle={{backgroundColor:'#FF7043'}}/></View>
            
          </View>
          
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  maincontainer: {
    flex: 0.5,
    // backgroundColor: '#F57C00',
   borderBottomLeftRadius:60,
   borderBottomRightRadius:60,

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
