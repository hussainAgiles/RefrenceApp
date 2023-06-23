import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CTextInput from '../Components/CustTextInput';
import Button from '../Components/Button';
import {useNavigation} from '@react-navigation/native';

export default function Register() {
  const navigation = useNavigation();

  const handleSignUp = () => {
    console.log('signUp');
  };

  const handleBack = () => {
    navigation.navigate('Login');
  };

  return (
    <>
      <View style={styles.maincontainer}>
        <Text style={{color: '#FFFFFF', fontSize: 20, fontWeight: 800}}>
          Register
        </Text>
      </View>

      <View style={styles.Registerform}>

          <View style={{marginBottom: 20, marginTop: 20}}>
            <CTextInput placeholder="First Name" />
          </View>
          <View style={{marginBottom: 20}}>
            <CTextInput placeholder="Lastname" />
          </View>
          <View style={{marginBottom: 20}}>
            <CTextInput placeholder="Email" />
          </View>
          <View style={{marginBottom: 20}}>
            <CTextInput placeholder="Password" />
          </View>
          <View style={{marginBottom: 20}}>
            <CTextInput placeholder="Confirm Password" />
          </View>
          <View style={{marginBottom: 20}}>
            <CTextInput placeholder="Phone Number" />
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Button text="Register" onPress={handleSignUp} />
            <Button text="Back" onPress={handleBack} />
          </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  maincontainer: {
    flex: 0.3,
    backgroundColor: '#F57C00',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Registerform: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
