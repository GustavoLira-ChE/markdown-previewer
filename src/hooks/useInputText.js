import { useState } from "react";

const placeholder = `
 
# Heading level 1 
## Heading level 2 
**bold text** 
_italic_ 
**_really important_** 
> Dorothy followed her through many of the beautiful rooms in her castle. 
> #### The quarterly results look great!
   >
   > - Revenue was off the chart.
   > - Profits were higher than ever.
   >
   >  *Everything* is going according to **plan**.
`;

const useInputText = () => {
    const [inputText, setInputText] = useState(placeholder);

    const inputTextHandler = (event) => {
        setInputText(event.target.value);
    }

    const addSyntaxPreBuild = (value) => {
        setInputText(inputText + value);
    }

    const clearInputText = () => {
      setInputText(``);
    }

    return{
        inputText,
        inputTextHandler,
        addSyntaxPreBuild,
        clearInputText
    }
};

export default useInputText;