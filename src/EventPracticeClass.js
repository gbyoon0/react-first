import React, { Component } from 'react';

class EventPracticeClass extends Component {
  state = {
    message: '',
    username: '',
  };

  // constructor(props) {
  //   super(props);
  //   this.handelChange = this.handelChange.bind(this);
  //   this.handleClick = this.handleClick.bind(this);
  // }

  // handelChange(e) {
  //   this.setState({
  //     message: e.target.value,
  //   });
  // }

  // handleClick() {
  //   alert(this.state.message);
  //   this.setState({
  //     message: '',
  //   });
  // }

  handelChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value, //객체안에서 KEY를 []감싸면 그 값이 실제 KEY 값으로 사용 됨
    });
  };

  handleClick = () => {
    alert(this.state.username + ':' + this.state.message);
    this.setState({
      message: '',
      username: '',
    });
  };

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleClick();
    }
  };

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="message"
          value={this.state.message}
          onChange={this.handelChange}
        />
        <input
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.handelChange}
          onKeyUp={this.handleKeyPress}
        />
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}

export default EventPracticeClass;
