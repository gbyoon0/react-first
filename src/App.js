import React from 'react';
import MyComponent from './MyComponent';
import Counter from './Counter';
import Say from './Say';
import EventPracticeClass from './EventPracticeClass';
import EventPracticeFun from './EventPracticeFun';
import ValidationSample from './ValidationSample';

const App = () => {
  return (
    <div>
      <MyComponent name="react" age={20}>
        {' '}
        노드값 입니다.{' '}
      </MyComponent>
      <Counter />
      <Say />
      <EventPracticeClass />
      <EventPracticeFun />
      <hr />
      <br />s
      <ValidationSample />
    </div>
  );
};

export default App;
