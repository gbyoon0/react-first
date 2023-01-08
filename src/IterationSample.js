import React, { useState } from 'react';

const IterationSample = () => {
  //const names = ['눈사람', '얼음', '눈', '바람'];
  const [names, setNames] = useState([
    { id: 1, text: '눈사람' },
    { id: 2, text: '얼음' },
    { id: 3, text: '눈' },
    { id: 4, text: '바람' },
  ]);

  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState('5');

  const onChange = (e) => setInputText(e.target.value);
  const onClick = () => {
    const nextNames = names.concat({
      id: nextId,
      text: inputText,
    });
    setNextId(nextId + 1);
    setNames(nextNames);
    setInputText('');
  };

  const onKeyUp = (e) => {
    if (e.key === 'Enter') {
      onClick();
    }
  };

  const onRemove = (id) => {
    const newNames = names.filter((a) => a.id !== id);
    setNames(newNames);
  };

  // 인자를 전달하는 이벤트함수를 호출할때는 화살표함수로
  const nameList = names.map((a) => (
    <li key={a.id} onDoubleClick={() => onRemove(a.id)}>
      {a.text}
    </li>
  ));

  return (
    <>
      <input
        type="text"
        onKeyUp={onKeyUp}
        value={inputText}
        onChange={onChange}
      />
      <button onClick={onClick}>추가</button>
      <ul>{nameList}</ul>
    </>
  );
};

export default IterationSample;
