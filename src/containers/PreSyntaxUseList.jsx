import React, {useContext} from 'react';
import InputTextContext from '../context/InputTextContext'

const PreSyntaxUseList = () => {

    const { addSyntaxPreBuild } = useContext(InputTextContext);

    const addSyntax = (e) => {
        console.log(e.target.value)
        addSyntaxPreBuild(e.target.value);
    }
    
    return (
        <aside>
            <button onClick={addSyntax} value={` \n ***bold***`}>Bold Button</button>
        </aside>
    );
};

export default PreSyntaxUseList;