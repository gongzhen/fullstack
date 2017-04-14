import React from 'react';
import ReactDOMServer from 'react-dom/server'; 

import App from './src/components/App';

// fetch the data from api.
import config from './config';
import axios from 'axios';

// return url
// if contestId avaiable, return contests/contestId url.
const getApiUrl = contestId => {
  if (contestId) {
    return `${config.serverUrl}/api/contests/${contestId}`;
  }
  return `${config.serverUrl}/api/contests`;
};

// return contests: apiData.contests
// if contestId avaiable, return [apiData.id: apiData].
const getInitialData = (contestId, apiData) => {
    if(contestId) {
        return {
            CurrentContestId: apiData.id,
            contests: {
                [apiData.id] : apiData
            }
        }
    }
    return {
        contests:apiData.contests
    }
}

// 
const serverRender = (contestId) => 
    axios.get(getApiUrl(contestId)) // get method
    .then(resp => {    // response data
        const initialData = getInitialData(contestId, resp.data);
        return {
            initialMarkup:ReactDOMServer.renderToString(
                <App initialData={initialData} /> // passing resp data to App.
            ),
            initialData   // initialData: resp.data
        }                    
    });

export default serverRender;