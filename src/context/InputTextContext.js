import React from "react";
import useInputText from "../hooks/useInputText";

const InputTextContext = React.createContext({});

const InputTextProvider = ( {children} ) => {

  const textInputObject = useInputText();

  return(
    <InputTextContext.Provider value={textInputObject}>
      { children }
    </InputTextContext.Provider>
  );
};

export default InputTextContext;
export { InputTextProvider };