import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// root 태그에 App virtual Dom을 렌더링함
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);