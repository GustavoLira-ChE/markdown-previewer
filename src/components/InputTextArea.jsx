import React, {useContext} from "react";
import InputTextContext from "../context/InputTextContext";
import DOMPurify from "dompurify";

const InputTextArea = () => {

    const { inputText ,inputTextHandler } = useContext(InputTextContext);

    return(
        <div id="editor">
            <h1>
                Input Text Area
            </h1>
            <textarea rows="4" cols="50" style={{resize: "none"}} onChange={inputTextHandler} value={inputText}></textarea>
        </div>
    );
};

export default InputTextArea;