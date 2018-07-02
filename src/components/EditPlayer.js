import React, { Component } from 'react';
import { View } from 'react-native';
import _ from 'lodash';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import { ButtonComponent, Card, CardSection, Confirm } from './common';
import PlayerForm from './PlayerForm';
import { updatePlayer, updatePlayerDetails, deletePlayer } from '../actions';

class EditPlayer extends Component {

  state = {
    showModal: false,
  };

  componentWillMount() {
    _.each(this.props.player, (value, prop) => {
      this.props.updatePlayer({ prop, value });
    });
  }

  savePlayerChanges = () => {
    const { name, phone, skill } = this.props;

    this.props.updatePlayerDetails({ name, phone, skill, uid: this.props.player.uid });
  }

  sendTextMessage = () => {
    const { name, phone, skill } = this.props;
    Communications.text(phone, `Congratulations ${name}! You have been selected as ${skill} and details has been updated accordingly.`);
  }

  onAccept = () => {
    const { uid } = this.props.player;

    this.props.deletePlayer({ uid });
  }

  onDecline = () => {
    this.setState({
      showModal: false,
    });
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
        <CardSection>
          <ButtonComponent
            text="Send message"
            onPress={this.sendTextMessage}
          />
        </CardSection>
        <CardSection>
          <ButtonComponent
            text="Delete"
            onPress={() => this.setState({ showModal: true })}
          />
        </CardSection>
        <Confirm
          visible={this.state.showModal}
          onAccept={this.onAccept}
          onDecline={this.onDecline}>
          Are you sure you want to delete this?
        </Confirm>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, phone, skill } = state.playerUpdate;

  return { name, phone, skill };
};

export default connect(mapStateToProps, { updatePlayer, updatePlayerDetails, deletePlayer })(EditPlayer);
