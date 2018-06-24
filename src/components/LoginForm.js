import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Card, CardSection, ButtonComponent, Input } from './common';
import * as actions from '../actions';

class LoginForm extends Component {

  onPasswordChange = (pwd) => {
    this.props.passwordChanged(pwd);
  }

  onEmailChange = (text) => {
    this.props.emailChanged(text);
  }

  render() {
    const { email, password } = this.props;
    console.log(email, " ", password);
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

        <CardSection>
          <ButtonComponent
            text="Log In"
          />
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { email, password } = state.auth;
  return {
    email,
    password,
  }
}

export default connect(mapStateToProps, actions)(LoginForm);
