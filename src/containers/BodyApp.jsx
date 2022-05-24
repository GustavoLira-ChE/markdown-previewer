import React, {useContext} from 'react';
import InputTextArea from '../components/InputTextArea';
import PreviewerArea from '../components/PreviewerArea';
import PreSyntaxUseList from './PreSyntaxUseList';
import ToggleContext from "../context/ToggleContext";


const BodyApp = () => {
    const { editorToggle, previewerToggle, builtInToggle } = useContext(ToggleContext);
    return (
        <div className="body-container">
            {editorToggle && <InputTextArea />}
            {previewerToggle && <PreviewerArea />}
            {builtInToggle && <PreSyntaxUseList />}
        </div>
    );
};

export default BodyApp;