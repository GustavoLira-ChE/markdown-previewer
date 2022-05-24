import React from 'react';
import '../styles/closebutton.css';

const CloseButton = ( {func} ) => {
    return (
        <button className="closeButton" onClick={func}>X</button>
    );
};

export default CloseButton;