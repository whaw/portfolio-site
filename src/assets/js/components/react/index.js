import React from 'react';
import ReactDOM from 'react-dom';
import Joke from './Joke/Joke';

ReactDOM.render(
  <React.StrictMode>
    <Joke />
  </React.StrictMode>,
  document.getElementById('js_joke')
);