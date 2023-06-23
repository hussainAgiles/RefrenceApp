import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';

export default function Button({text, onPress, leftIcon,iconColor,outerStyle}) {
  // console.log("color",outerStyle)
  return (
    <View style={[styles.button,{...outerStyle}]}>
      {Boolean(leftIcon) && (
        <Entypo
          name={leftIcon}
          size={20}
          style={{
            marginLeft:30,
          }}
          color={iconColor}
        />
      )}
      <TouchableOpacity onPress={onPress}>
        <Text
          style={{
            color: '#FFFFFF',
            textAlign: 'center',
            padding: 10,
            fontSize: 15,
            fontWeight: 800,
          }}>
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection:'row',
    alignItems:"center",
    width:300,
    borderRadius: 10,
    marginLeft: 10,
  },
});
