import React from "react";
import "../styles/showButton.css";

const ShowButton = ({buttonName ,state, func}) => {
    
    
  return (
    <li className='li-button'>
      {state ? <button className='disabledButton' disabled>{buttonName}</button> : <button className='showButton' onClick={func}>{buttonName}</button>}
    </li>
  );
};

export default ShowButton;