import React from 'react';

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

export default Header;