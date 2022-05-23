import React, { useContext } from "react";
import InputTextContext from "../context/InputTextContext";
import { marked } from "marked";
import DOMPurify from 'dompurify';

const PreviewerArea = () => {

    const { inputText } = useContext(InputTextContext);

    const updateMarkdown = () => {
        const textTransform = DOMPurify.sanitize(inputText);
        const __html = marked(textTransform);
        return { __html };
    };
    
    return(
        <div id="preview">
            <h1>
                Preview Area
            </h1>
            <p dangerouslySetInnerHTML={updateMarkdown()}></p>
        </div>
    );
};

export default PreviewerArea;