import React, { Component } from 'react';

class LifeCyleComponent extends Component {
  state = {
    number: 0,
    color: null,
  };

  myRef = null;

  constructor(props) {
    super(props);
    console.log('constructor');
  }

  static getDrivedStateFromProps(nextProps, prevState) {
    console.log('getDrivedStateFromProps');
    if (nextProps.color !== prevState.color) {
      return { color: nextProps.color };
    }
    return null;
  }

  componentDidMount() {
    console.log('componentDisMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponetUpdate', nextProps, nextState);
    //숫자의 마지막 자리가 4면 리렌더링하지 않습니다.
    return nextState.number % 10 !== 4;
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  hadleClick = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };

  getSnapshotBeforeUpdate(preProps, prevState) {
    console.log('getStnapshotBeofreUpdate');
    if (preProps.color !== this.state.color) {
      return this.myRef.style.color;
    }
    return null;
  }

  componentDidUpdate(preProps, prevState, snapshot) {
    console.log('componentDidUpdate', preProps, prevState);

    if (snapshot) {
      console.log('업데이트되기 직전 색상', snapshot);
    }
  }

  render() {
    console.log('render');

    const style = {
      color: this.props.color,
    };

    return (
      <div>
        <h1 style={style} ref={(ref) => (this.myRef = ref)}>
          {this.state.number}
        </h1>
        <p>color: {this.state.color}</p>
        <button onClick={this.hadleClick}>더하기</button>
      </div>
    );
  }
}

export default LifeCyleComponent;
