import React from 'react';
import ReactDOM from 'react-dom';

const Header = ({message}) => {
    return (
        <h2 className = 'text-center'>
            {message}
        </h2>
    );
};

const App = (props) => {
    return(
        <div>
            <Header message = "Naming Contests" />
            <div>
                ...
            </div>
        </div>
    );
};

App.protoTypes = {
    // check the proto type has to be string.
    headerMessage: React.PropTypes.string
    // check props is required.
    // headerMessage: React.PropTypes.string.isRequired
};

App.defaultProps = {
    headerMessage: 'Hello Defaupt Props!'
};

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
