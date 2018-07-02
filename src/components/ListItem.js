import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './common';

class ListItem extends Component {

  onPlayerClick = () => {
    Actions.editPlayer({ player: this.props.player });
  }

  render() {
    const { player } = this.props;
    const { listItemTextStyles } = styles;
    return (
      <TouchableWithoutFeedback onPress={this.onPlayerClick}>
        <View>
          <CardSection>
            <Text style={ listItemTextStyles }>
              { player.name }
            </Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = {
  listItemTextStyles: {
    fontSize: 18,
    paddingLeft: 15,
  }
}
export default ListItem;
