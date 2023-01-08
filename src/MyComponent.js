import React, { Component } from 'react';
import ProsTypes from 'prop-types';

// const MyComponent = ({ name, age, children }) => {
//   return (
//     <div>
//       안녕하세요, 제 이름은 {name} 입니다. <br />
//       childen은 {children} 입니다. 저의 나이는 {age} 입니다.
//     </div>
//   );
// };

class MyComponent extends Component {
  render() {
    const { name, age, children } = this.props;
    return (
      <div>
        안녕하세요, 제 이름은 {name} 입니다. <br />
        childen은 {children} 입니다. 저의 나이는 {age} 입니다.
      </div>
    );
  }
}

let name = '리엑트11';
MyComponent.defaultProps = {
  name: name,
};

MyComponent.propTypes = {
  name: ProsTypes.string,
  age: ProsTypes.number.isRequired,
};
export default MyComponent;
