import React from 'react';
import ReactDOM from 'react-dom';

const color = Math.random() > 0.5 ? 'green' : 'red';

ReactDOM.render(
    <h2 style = {{color: color}}>
        Hello React with JSX! -- {Math.random()}
    </h2>,
    document.getElementById('root')
);

// class Layout extends React.Component {
//     render() {
//         return(
//             <h1>It Works</h1>
//         );
//     }
// }

// const app = document.getElementById('root');
// ReactDOM.render(<Layout/>, app);