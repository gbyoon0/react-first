import React, { Component } from 'react';
import LifeCyleComponent from './LifeCycleComponent';

function getRandom() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class LifeCycleComponentCall extends Component {
  state = {
    color: '#000000',
  };

  handleClick = () => {
    this.setState({
      color: getRandom(),
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>랜덤색상</button>
        <LifeCyleComponent color={this.state.color} />
      </div>
    );
  }
}

export default LifeCycleComponentCall;
