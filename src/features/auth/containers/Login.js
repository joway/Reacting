import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions';

const mapStateToProps = (state) => ({
  isAuthenticating   : state.auth.isAuthenticating,
  statusText         : state.auth.statusText
});

const mapDispatchToProps = (dispatch) => ({
  actions : bindActionCreators(actionCreators, dispatch)
});


@connect(mapStateToProps, mapDispatchToProps)
class Login extends React.Component {
  constructor (props) {
    super(props);
    const redirectRoute = this.props.location.query.redirect || '/login';
    this.state = {
      email: '',
      password: '',
      redirectTo: redirectRoute
    };
  }

  login = (e) => {
    e.preventDefault();
    const { authUserLogin } = this.props.actions;
    authUserLogin(this.state.email, this.state.password, this.state.redirectTo);
  }

  render () {
    return (
      <div>
        <input type="text" placeholder="username"/>
        <input type="password" placeholder="password"/>
        <button onClick={this.login}>Login</button>
      </div>
    )
  }
}

export default Login
