import React, { useContext } from "react";
import InputTextContext from "../context/InputTextContext";
import { marked } from "marked";
import DOMPurify from 'dompurify';
import '../styles/previewerArea.css';
import hljs from "highlight.js";
import { Renderer } from "marked";


const PreviewerArea = () => {

    const { inputText } = useContext(InputTextContext);

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
            <h2 className="previewerTitle">
                Preview Area
            </h2>
            <div className="previewerDisplay" dangerouslySetInnerHTML={updateMarkdown()}></div>
        </div>
    );
};

export default PreviewerArea;