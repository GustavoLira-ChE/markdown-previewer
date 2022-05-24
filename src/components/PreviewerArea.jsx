import React, { useContext } from "react";
import InputTextContext from "../context/InputTextContext";
import ToggleContext from "../context/ToggleContext";
import { marked } from "marked";
import DOMPurify from 'dompurify';
import '../styles/previewerArea.css';
import hljs from "highlight.js";
import { Renderer } from "marked";
import CloseButton from "./CloseButton";


const PreviewerArea = () => {

    const { inputText } = useContext(InputTextContext);
    const { handlePreviewerToggle } = useContext(ToggleContext);

    const updateMarkdown = () => {
        const textTransform = DOMPurify.sanitize(inputText);
        const __html = marked(textTransform);
        return { __html };
    };
    marked.setOptions({
        render: new Renderer(),
        highlight: function (code) {
            return hljs.highlightAuto(code).value;
        },
        gfm: true,
        tables: true,
        breaks: true,
        smartLists: true,
        smartypants: true,
        xhtml: true
    });
    return(
        <div id="preview">
            <div className="previewHeader">
                <h2 className="previewerTitle">Preview Area</h2>
                <CloseButton func={handlePreviewerToggle} />
            </div>
            <div className="previewerDisplay" dangerouslySetInnerHTML={updateMarkdown()}></div>
        </div>
    );
};

export default PreviewerArea;