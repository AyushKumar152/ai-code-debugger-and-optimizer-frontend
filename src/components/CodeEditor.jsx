import React from 'react';
import Editor from '@monaco-editor/react';

const CodeEditor = ({ language, code, setCode }) => {
  const handleEditorChange = (value) => {
    setCode(value);
  };

  return (
 <div className="h-full w-full border border-gray-300 rounded-md overflow-hidden bg-[#1e1e1e] shadow-md">
      <Editor
        height="60vh"
        defaultLanguage={language}
        language={language}
        value={code}
        onChange={handleEditorChange}
        theme="vs-dark"
        options={{
          fontSize: 14,
          minimap: { enabled: false },
          scrollBeyondLastLine: false,
          wordWrap: 'on',
          autoClosingBrackets: 'always',
          formatOnType: true,
          formatOnPaste: true,
        }}
      />
    </div>
  );
};

export default CodeEditor;
