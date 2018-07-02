import React, { Component } from 'react';
import { View } from 'react-native';
import _ from 'lodash';
import { connect } from 'react-redux';
import { ButtonComponent, Card, CardSection } from './common';
import PlayerForm from './PlayerForm';
import { updatePlayer, updatePlayerDetails } from '../actions';

class EditPlayer extends Component {

  componentWillMount() {
    _.each(this.props.player, (value, prop) => {
      this.props.updatePlayer({ prop, value });
    });
  }

  savePlayerChanges = () => {
    const { name, phone, skill } = this.props;

    this.props.updatePlayerDetails({ name, phone, skill, uid: this.props.player.uid });
  }

  render() {
    return (
      <Card>
        <PlayerForm { ...this.props } />
        <CardSection>
          <ButtonComponent
            text="Save Changes"
            onPress={this.savePlayerChanges}
          />
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, phone, skill } = state.playerUpdate;

  return { name, phone, skill };
};

export default connect(mapStateToProps, { updatePlayer, updatePlayerDetails })(EditPlayer);
