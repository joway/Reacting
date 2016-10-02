import React, { Component, PropTypes } from 'react';
import routeConfig from './routeConfig';
import Nav from '../components/Nav';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    return (
      <div className="app">
        <h1>My Awesome Project!</h1>
        <Nav routes={routeConfig} />
        <div className="page-container">
          {this.props.children}
        </div>
      </div>
    );
  }
}