import React from 'react';
import {Text, View, Modal } from 'react-native';
import { ButtonComponent } from './Button';
import { CardSection } from './CardSection';

const Confirm = ({ children, visible, onAccept, onDecline, }) => {

  const { cardSectionStyle, textStyle, containerStyle } = styles;
  return (
    <Modal
          animationType="slide"
          transparent={false}
          visible={visible}
          onRequestClose={() => { }}>
          <View style={containerStyle}>
            <CardSection style={cardSectionStyle}>
              <Text style={textStyle}>{children}</Text>
            </CardSection>

            <CardSection style={cardSectionStyle}>
              <ButtonComponent onPress={onAccept} text="Yes"></ButtonComponent>
              <ButtonComponent onPress={onDecline} text="No"></ButtonComponent>
            </CardSection>
          </View>
        </Modal>
  )
}

const styles = {
  cardSectionStyle: {
    justifyContent: 'center',
  },
  textStyle: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 40,
  },
  containerStyle: {
	marginTop: 65,
	backgroundColor: 'rgba(0, 0, 0, 0.75)',
	flex: 1,
  },
}

export { Confirm };
