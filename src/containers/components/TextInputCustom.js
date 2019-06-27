import React from 'react';
import {
  View,
  Text,
  TextInput
} from 'react-native';


const TextInputCustom = ({
  styleContainer = {},
  styleTextInput = {},
  stylesText = {},
  placeholder = '',
  textLabel = '',
  placeholderTextColor = '',
  value = 0,
  maxLength = 30,
  key = '',
  onChangeText = () => null
}) => (
  <View style={styleContainer}>
    <Text style={stylesText}> { textLabel } </Text>
    <TextInput
      style={styleTextInput}
      value={0}
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
      editable = {true}
      maxLength = {30}
      onChange={() => onChangeText()}
    />
  </View>
);

export default TextInputCustom;
