import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
        Gondor UI
        {this.props.children}
      </div>
    );
  }
}
