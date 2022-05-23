import React, {useContext} from "react";
import InputTextContext from "../context/InputTextContext";
import '../styles/inputTextArea.css';

const InputTextArea = () => {

    const { inputText ,inputTextHandler, clearInputText } = useContext(InputTextContext);

    return(
        <div id="editor">
            <h2 className="inputTextAreaTitle">
                Input Text Area
            </h2>
            <textarea 
                rows="4" 
                cols="50" 
                className="textAreaInput"
                onChange={inputTextHandler} 
                value={inputText}>
            </textarea>
            <button className="clearButton" onClick={clearInputText}>Clear</button>
        </div>
    );
};

export default InputTextArea;