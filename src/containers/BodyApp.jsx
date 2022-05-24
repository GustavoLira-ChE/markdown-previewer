import React from 'react';
import InputTextArea from '../components/InputTextArea';
import PreviewerArea from '../components/PreviewerArea';
import PreSyntaxUseList from './PreSyntaxUseList';


const BodyApp = () => {
    return (
        <div className="body-container">
            <InputTextArea />
            <PreviewerArea />
            <PreSyntaxUseList />
        </div>
    );
};

export default BodyApp;