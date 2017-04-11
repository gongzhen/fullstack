import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
// Eventually we have to grap data from API.
// so we assume we don't have data yet.
// import data from './testData';

ReactDOM.render(
    <App contests={[]} />,
    document.getElementById('root')
);


