import React, { Component, PropTypes } from 'react';
import routeConfig from './config/routeConfig';
import { connect } from 'react-redux';
import Nav from '../components/Nav';

@connect((state) => ({
  isAuthenticated: state.auth.isAuthenticated
}))
class App extends Component {
  render () {
    return (
      <div className="app">
        <h1>My Awesome Project!</h1>
        <Nav routes={routeConfig} isAuthenticated={this.props.isAuthenticated}/>
        <div className="page-container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node,
}

export default App;