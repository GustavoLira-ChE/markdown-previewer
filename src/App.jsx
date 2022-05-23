import React from "react";
import InputTextArea from "./components/InputTextArea";
import PreviewerArea from "./components/PreviewerArea";
import Header from "./containers/Header";
import PreSyntaxUseList from "./containers/PreSyntaxUseList";
import { InputTextProvider } from "./context/InputTextContext";

const App = () => {
    return(
        <div>
            <InputTextProvider>
                <Header />
                <InputTextArea />
                <PreviewerArea />
                <PreSyntaxUseList />
            </InputTextProvider>
        </div>
    );
};

export default App;