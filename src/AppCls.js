import React, { Component } from 'react';
import ValidationSample from './ValidationSample';
import ScrollBox from './ScollBox';
import IterationSample from './IterationSample';
import LifeCycleComponentCall from './LifeCylcleComponentCall';

class AppCls extends Component {
  render() {
    return (
      <div>
        {' '}
        <ValidationSample />
        <ScrollBox />
        <IterationSample />
        <LifeCycleComponentCall />
      </div>
    );
  }
}
export default AppCls;
