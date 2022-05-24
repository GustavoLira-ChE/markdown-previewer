import React from "react";
import useToggleButton from "../hooks/useToggleButton";

const ToggleContext = React.createContext({});

const ToggleContextProvider = ( {children} ) => {
    const toggleObject = useToggleButton();
    
    return(
        <ToggleContext.Provider value={toggleObject}>
            {children}
        </ToggleContext.Provider>
    );
};

export default ToggleContext;
export {ToggleContextProvider};