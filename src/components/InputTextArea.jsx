import React, {useContext} from "react";
import InputTextContext from "../context/InputTextContext";
import ToggleContext from "../context/ToggleContext";
import "../styles/inputTextArea.css";
import CloseButton from "../components/CloseButton";

const InputTextArea = () => {

  const { inputText ,inputTextHandler, clearInputText } = useContext(InputTextContext);
  const { handleEditorToggle} = useContext(ToggleContext);

  return(
    <div id="editor">
      <div className="editorHeader">
        <h2 className="editorTitle">Input Text Area</h2>
        <CloseButton func={handleEditorToggle} />
      </div>
      <textarea 
        className="textAreaInput"
        onChange={inputTextHandler} 
        value={inputText}>
      </textarea>
      <button className="clearButton" onClick={clearInputText}>Clear</button>
    </div>
  );
};

export default InputTextArea;