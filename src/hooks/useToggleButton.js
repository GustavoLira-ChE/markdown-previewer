import { useState } from "react";

const useToggleButton = () => {
  const [previewerToggle, setPreviewerToggle] = useState(true);
  const [editorToggle, setEditorToggle] = useState(true);
  const [builtInToggle, setBuiltInToggle] = useState(true);

  const handlePreviewerToggle = () => {
    setPreviewerToggle(!previewerToggle);
  };
  const handleEditorToggle = () => {
    setEditorToggle(!editorToggle);
  };
  const handleBuiltInToggle = () => {
    setBuiltInToggle(!builtInToggle);
  };
  return {
    previewerToggle,
    handlePreviewerToggle,
    editorToggle,
    handleEditorToggle,
    builtInToggle,
    handleBuiltInToggle
  };
};

export default useToggleButton;