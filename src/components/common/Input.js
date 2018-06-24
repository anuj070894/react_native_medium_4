import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = (props) => {
  const { label, value, onChangeText, placeholder, secureTextEntry } = props;
  const { inputStyles, labelStyles, containerStyles } = styles;
  return (
    <View style={containerStyles}>
      <Text style={labelStyles}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        autoCorrect={false}
        placeholder={placeholder}
        style={inputStyles}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = {
  inputStyles: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2, // flex - 2 .. see below flex-1 is specified, therefore these child components of...
    height: 20, // ...the view will be present in 2/3 and 1/3rd respectively of the parent component
    width: 100,
  },
  labelStyles: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1, // flex - 1
  },
  containerStyles: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
};

export { Input };
