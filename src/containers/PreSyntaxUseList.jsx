import React, {useContext} from 'react';
import CloseButton from '../components/CloseButton';
import InputTextContext from '../context/InputTextContext';
import '../styles/preSyntaxUseList.css';
import ToggleContext from '../context/ToggleContext';

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
    >  *Everything* is going according to **plan**.`},
    {id: 12, buttonTitle: 'Ordered List', buttonValue:`\n 1. First item \n 2. Second item \n 3. Third item`},
    {id: 13, buttonTitle:'Unordered List', buttonValue:`\n- First item \n- Second item \n- Third item`},
    {id:14, buttonTitle:'Link', buttonValue:`\n [title](https://www.example.com)`},
    {id: 15, buttonTitle:'Image', buttonValue:`\n ![alt text](image.jpg)`},
    {id:16, buttonTitle:'Table', buttonValue:` \n | Syntax | Description |
| ----------- | ----------- |
| Header | Title |
| Paragraph | Text |`},
    {id: 17, buttonTitle:'Footnote', buttonValue:`
    \n Here's a sentence with a footnote. [^1] \n [^1]: This is the footnote.`},
    {id: 18, buttonTitle:'Definition List', buttonValue:`term \n : definition`},
    {id: 19, buttonTitle:'Strikethrough', buttonValue:`\n ~~The world is flat.~~`},
    {id: 20, buttonTitle:'Task List', buttonValue:`\n - [x] Write the press release \n- [ ] Update the website \n- [ ] Contact the media`},
    {id: 21, buttonTitle:'Highlight', buttonValue:`\n ==very important words==`},
    {id: 22, buttonTitle:'Subscript', buttonValue:`H~2~O`},
    {id: 23, buttonTitle:'Superscript', buttonValue:`	X^2^`},

]

const PreSyntaxUseList = () => {

    const { addSyntaxPreBuild } = useContext(InputTextContext);
    const { handleBuiltInToggle } = useContext(ToggleContext);

    const addSyntax = (e) => {
        addSyntaxPreBuild(e.target.value);
    }
    
    return (
        <aside className='prebuilt-syntax'>
            <div className='prebuiltHeader'>
                <h2 className='prebuiltsTitle'>PreBuilts</h2>
                <CloseButton func={handleBuiltInToggle}/>
            </div>
            <ul className='buttonList'>
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