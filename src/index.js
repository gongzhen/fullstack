import React from 'react';
import ReactDOM from 'react-dom';

// Header component is reuseable component.
const Header = ({ message }) => {
    return (
        <h2 className = 'text-center'>
            {message}
        </h2>
    );
};

Header.protoTypes = {
    // check if header's props type is string.
    message: React.PropTypes.string
};

const App = () => {
    return(
        <div>
            <Header message = "Header Naming Contests" />
            <div>
                ...
            </div>
        </div>
    );};

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
