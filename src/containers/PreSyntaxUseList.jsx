import React, {useContext} from 'react';
import InputTextContext from '../context/InputTextContext';
import '../styles/preSyntaxUseList.css';

const syntaxObject = [
    {id: 1, buttonTitle: "Heading1", buttonValue: " \n # Heading level 1"},
    {id: 2, buttonTitle: "Heading2", buttonValue: " \n ## Heading level 2"},
    {id: 3, buttonTitle: "Heading3", buttonValue: " \n ### Heading level 3"},
    {id: 4, buttonTitle: "Heading4", buttonValue: " \n #### Heading level 4"},
    {id: 5, buttonTitle: "Heading5", buttonValue: " \n ##### Heading level 5"},
    {id: 6, buttonTitle: "Heading6", buttonValue: " \n ###### Heading level 6"},
    {id: 7, buttonTitle: "Bold", buttonValue: " \n **bold text**"},
    {id: 8, buttonTitle: "Italic", buttonValue: " \n _italic_"},
    {id: 9, buttonTitle: "Bold-Italic", buttonValue: " \n **_really important_**"},
    {id: 10, buttonTitle: "Blockquotes", buttonValue: " \n > Dorothy followed her through many of the beautiful rooms in her castle."},
    { id: 11, buttonTitle: "BlockquotesExtra", buttonValue: ` \n > #### The quarterly results look great!
    >
    > - Revenue was off the chart.
    > - Profits were higher than ever.
    >
    >  *Everything* is going according to **plan**.`}
]

const PreSyntaxUseList = () => {

    const { addSyntaxPreBuild } = useContext(InputTextContext);

    const addSyntax = (e) => {
        addSyntaxPreBuild(e.target.value);
    }
    
    return (
        <aside className='prebuilt-syntax'>
            <h2 className='prebuiltsTitle'>PreBuilts</h2>
            <ul>
                {syntaxObject.map(buttonItem => (
                    <li key={buttonItem.id}>
                        <button className='button-syntax' onClick={addSyntax} value={buttonItem.buttonValue} key={buttonItem.id}>{buttonItem.buttonTitle}</button>
                    </li>
                ))}
            </ul>
        </aside>
    );
};

export default PreSyntaxUseList;