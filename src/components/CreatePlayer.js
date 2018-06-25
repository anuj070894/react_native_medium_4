import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Picker } from 'react-native';

import { updatePlayer } from '../actions';
import { Card, CardSection, Input, ButtonComponent } from './common';

class CreatePlayer extends Component {


  updatePlayerField = ({ prop, value }) => {
    this.props.updatePlayer({ prop, value });
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Name"
            placeholder="Sachin"
            onChangeText={(value) => this.updatePlayerField({ prop: "name", value })}
            value={this.props.name}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Phone"
            placeholder="555-555-5555"
            onChangeText={(value) => this.updatePlayerField({ prop: "phone", value })}
            value={this.props.phone}
          />
        </CardSection>

        <CardSection>
          <Picker
            selectedValue={this.props.skill}
            style={{ flex: 1 }}
            onValueChange={(value) => this.updatePlayerField({ prop: "skill", value })}
          >
            <Picker.Item label="Batsman" value="Batsman" />
            <Picker.Item label="Bowler" value="Bowler" />
            <Picker.Item label="AllRounder" value="AllRounder" />
          </Picker>
        </CardSection>

        <CardSection>
          <ButtonComponent
            text="Save"
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

export default connect(mapStateToProps, { updatePlayer })(CreatePlayer);
