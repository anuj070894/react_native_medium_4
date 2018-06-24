import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const ButtonComponent = (props) => {
  const { buttonStyle, textStyle } = styles;
  const { onPress, text } = props;
  return (
    <TouchableOpacity
      style={buttonStyle}
      onPress={onPress}>
      <Text style={textStyle}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}

const styles = {
  textStyle: {
    color: '#007aff',
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5,
  }
}

export { ButtonComponent };
