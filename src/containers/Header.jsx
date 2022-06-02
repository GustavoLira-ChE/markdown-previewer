import React, {useContext} from "react";
import ShowButton from "../components/ShowButton";
import ToggleContext from "../context/ToggleContext";
import "../styles/header.css";


const Header = () => {
  const {previewerToggle, handlePreviewerToggle, editorToggle, handleEditorToggle, builtInToggle, handleBuiltInToggle} = useContext(ToggleContext);
  return (
    <div className='header-container'>
      <h1 className='main-title'>Markdown Previewer</h1>
      <nav className='navbar-button'>
        <ShowButton buttonName={"Editor"} state={editorToggle} func={handleEditorToggle} />
        <ShowButton buttonName={"Previewer"} state={previewerToggle} func={handlePreviewerToggle} />
        <ShowButton buttonName={"BuiltIn"} state={builtInToggle} func={handleBuiltInToggle} />
      </nav>
    </div>
  );
};

export default Header;