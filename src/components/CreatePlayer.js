import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Picker } from 'react-native';

import { updatePlayer, createPlayer } from '../actions';
import { Card, CardSection, Input, ButtonComponent } from './common';
import PlayerForm from './PlayerForm';

class CreatePlayer extends Component {

  createPlayer = () => {
    const { name, phone, skill } = this.props;

    this.props.createPlayer({ name, phone, skill: skill || 'Batsman' });
  }

  render() {
    return (
      <Card>
        <PlayerForm {...this.props} />
        <CardSection>
          <ButtonComponent
            text="Save"
            onPress={this.createPlayer}
          />
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, phone, skill } = state.playerUpdate;

  return { name, phone, skill };
}

export default connect(mapStateToProps, { updatePlayer, createPlayer })(CreatePlayer);
