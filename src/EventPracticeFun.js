import React, { useState } from 'react';

const EventPracticeFun = () => {
  const [form, setForm] = useState({
    username: '',
    message: '',
  });
  const { username, message } = form;

  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onClick = () => {
    alert(username + ':' + message);
    setForm({
      username: '',
      message: '',
    });
  };

  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      onClick();
    }
  };

  return (
    <div>
      <h1>이벤트 엽습</h1>
      <input type="text" name="username" onChange={onChange} value={username} />
      <input
        type="text"
        name="message"
        onChange={onChange}
        value={message}
        onKeyUp={onKeyPress}
      />
      <button onClick={onClick}>확인</button>
    </div>
  );
};

export default EventPracticeFun;
