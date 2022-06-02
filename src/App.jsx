import React from "react";
import BodyApp from "./containers/BodyApp";
import Header from "./containers/Header";
import { InputTextProvider } from "./context/InputTextContext";
import { ToggleContextProvider } from "./context/ToggleContext";
import "./styles/global.css"

const App = () => {
  return(
    <div>
      <InputTextProvider>
        <ToggleContextProvider>
          <Header />
          <BodyApp />    
        </ToggleContextProvider>
      </InputTextProvider>
    </div>
  );
};

export default App;