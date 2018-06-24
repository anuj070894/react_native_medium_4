import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

import { Card, CardSection, ButtonComponent, Input } from './common';
import * as actions from '../actions';

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
  }
};

class LoginForm extends Component {

  onPasswordChange = (pwd) => {
    this.props.passwordChanged(pwd);
  }

  onEmailChange = (text) => {
    this.props.emailChanged(text);
  }

  onLoginPress = () => {
    const { email, password, loginUser } = this.props;

    loginUser(email, password);
  }

  renderError = () => {
    return (
      <View style={{ backgroundColor: 'white' }}>
        <Text style={styles.errorTextStyle}>
          {this.props.error}
        </Text>
      </View>
    );
  }

  render() {
    const { email, password, loginUser } = this.props;
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            onChangeText={this.onEmailChange}
            placeholder="user@gmail.com"
            value={email}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Password"
            secureTextEntry
            onChangeText={this.onPasswordChange}
            placeholder="password"
            value={password}
          />
        </CardSection>

        { this.renderError() }

        <CardSection>
          <ButtonComponent
            text="Log In"
            onPress={this.onLoginPress}
          />
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { email, password, error } = state.auth;
  return {
    email,
    password,
    error,
  }
}

export default connect(mapStateToProps, actions)(LoginForm);
