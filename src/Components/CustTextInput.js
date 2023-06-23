import { StyleSheet, Text, View,TextInput} from 'react-native'
import React from 'react'

export default function CTextInput({
  autoComplete,
  autoCorrect,
  autoCapitalize,
  autoFocus,
  editable,
  keyboardType,
  maxLength,
  multiline,
  onBlur,
  onChange,
  onChangeText,
  onFocus,
  placeholderTextColor,
  placeholder,
  readOnly,
  secureTextEntry,
  value


}) {
  return (
    <View style={styles.container}>
     <TextInput autoComplete={autoComplete}
     autoCorrect={autoCorrect}
     autoCapitalize={autoCapitalize}
     autoFocus={autoFocus}
     keyboardType={keyboardType}
     maxLength={maxLength}
     multiline={multiline}
     onChangeText={onChangeText}
     placeholderTextColor={placeholderTextColor}
     placeholder={placeholder}
     secureTextEntry={secureTextEntry}
     value={value}
     />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    width:300,
    height:50,
    borderColor:"#000000",
    borderWidth:1, 
    borderRadius:10 
  }
})