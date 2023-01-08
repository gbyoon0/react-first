import React, { Component } from 'react';
import './ValidationSample.css';

class ValidationSample extends Component {
  state = {
    password: '',
    clicked: false,
    validate: false,
  };

  handleChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleClick = () => {
    alert(this.state.password);
    this.setState({
      clicked: true,
      validate: this.state.password === '0000',
    });
  };

  render() {
    return (
      <div>
        <input
          type="password"
          onChange={this.handleChange}
          value={this.state.password}
          className={
            this.state.clicked
              ? this.state.validate
                ? 'success'
                : 'failure'
              : ''
          }
        />
        <button onClick={this.handleClick}> 검증하기</button>
      </div>
    );
  }
}

export default ValidationSample;
