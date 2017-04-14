import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

// ajax function here.
// data is being loaded through ajax call.

// first solution here waste a API call.
ReactDOM.render(
  <App initialData={window.initialData} />,
  document.getElementById('root')
);
