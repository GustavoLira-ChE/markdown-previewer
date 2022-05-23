import React from "react";
import InputTextArea from "./components/InputTextArea";
import PreviewerArea from "./components/PreviewerArea";
import Header from "./containers/Header";
import PreSyntaxUseList from "./containers/PreSyntaxUseList";
import { InputTextProvider } from "./context/InputTextContext";
import './styles/global.css'

const App = () => {
    return(
        <div>
            <InputTextProvider>
                <Header />
                <div className="body-container">
                    <InputTextArea />
                    <PreviewerArea />
                    <PreSyntaxUseList />
                </div>
            </InputTextProvider>
        </div>
    );
};

export default App;