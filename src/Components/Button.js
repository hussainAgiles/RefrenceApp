import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';

export default function Button({text, onPress, leftIcon}) {
  return (
    <View style={[styles.button]}>
      {Boolean(leftIcon) && (
        <Entypo
          name={leftIcon}
          size={18}
          style={{
            marginRight:10
          }}
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
    backgroundColor: '#F57C00',
    width: 120,
    borderRadius: 10,
    marginLeft: 10,
  },
});
