import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// root 태그에 App virtual Dom을 렌더링함
// <App /> <-- Component라고 불림, HTML을 반환하는 함수
// HTML과 Javascript간의 이러한 구조를 jsx라고 불림
// React는 component로 동작함
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);