import React, { Component } from 'react';
import { Text } from 'react-native';
import { CardSection } from './common';

class ListItem extends Component {
  render() {
    const { player } = this.props;
    const { listItemTextStyles } = styles;
    return (
      <CardSection>
        <Text style={ listItemTextStyles }>
          { player.name }
        </Text>
      </CardSection>
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
