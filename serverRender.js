import React from 'react';
import ReactDOMServer from 'react-dom/server'; 

import App from './src/components/App';

// fetch the data from api.
import config from './config';
import axios from 'axios';

const serverRender = () => 
    axios.get(`${config.serverUrl}/api/contests`)
    .then(resp => {    
        return ReactDOMServer.renderToString(
        <App initialContests={resp.data.contests} />
    );
});

export default serverRender;