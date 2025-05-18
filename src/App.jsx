// import React, { useState } from 'react';
// import LanguageDropdown from './components/LanguageDropdown';
// import CodeEditor from './components/CodeEditor';
// import Footer from './components/Footer';
// import Output from './components/Output';
// import ActionButton from './components/ActionButton';
// import { runCode, debugCode, optimizeCode } from './utils/runCode';
// import { languageIds } from './utils/languageIds';
// import { boilerplateCode } from './utils/boilerplates';
// import { Helmet } from 'react-helmet';

// const App = () => {
//   const [language, setLanguage] = useState('javascript');
//   const [code, setCode] = useState(boilerplateCode['javascript']);
//   const [output, setOutput] = useState('');
//   const [isRunning, setIsRunning] = useState(false);
//   const [isDebugging, setIsDebugging] = useState(false);
//   const [isOptimizing, setIsOptimizing] = useState(false);

//   const isAnyActionRunning = isRunning || isDebugging || isOptimizing;

//   const handleRunCode = async () => {
//     setIsRunning(true);
//     try {
//       const result = await runCode(code, languageIds[language]);
//       if (result.compile_output) {
//         setOutput(`Compilation Error: ${result.compile_output}`);
//       } else if (result.stderr) {
//         setOutput(`Runtime Error: ${result.stderr}`);
//       } else if (result.stdout) {
//         setOutput(result.stdout);
//       } else {
//         setOutput('No output from code execution.');
//       }
//     } catch (err) {
//       setOutput('Execution error: ' + err.message);
//     } finally {
//       setIsRunning(false);
//     }
//   };

//   const handleDebugCode = async () => {
//     setIsDebugging(true);
//     try {
//       const result = await debugCode(code, language);
//       setOutput(result.result?.trim() || 'No suggestions from AI.');
//     } catch (err) {
//       setOutput('Debug error: ' + err.message);
//     } finally {
//       setIsDebugging(false);
//     }
//   };

//   const handleOptimizeCode = async () => {
//     setIsOptimizing(true);
//     try {
//       const result = await optimizeCode(code, language);
//       setOutput(result.result?.trim() || 'No optimization from AI.');
//     } catch (err) {
//       setOutput('Optimization error: ' + err.message);
//     } finally {
//       setIsOptimizing(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col overflow-x-hidden bg-gray-900 text-white">
//       <Helmet>
//         <title>AI Powered Code Debugger</title>
//       </Helmet>
//       <main className="flex-grow p-4">
//         <h1 className="text-3xl font-bold mb-6 text-center">AI Code Debugger</h1>

//         <div className="flex flex-col md:flex-row gap-4">
//           <div className="flex-1">
//             <div className="flex justify-between items-center mb-2 gap-2 flex-wrap">
//               <LanguageDropdown
//                 language={language}
//                 setLanguage={(newLang) => {
//                   setLanguage(newLang);
//                   setCode(boilerplateCode[newLang] || '// Start typing your code here...');
//                 }}
//               />
//               <div className="flex gap-2">
//                 <ActionButton
//                   onClick={handleRunCode}
//                   label="Run Code"
//                   loadingLabel="Running..."
//                   isLoading={isRunning}
//                   bgColor="bg-blue-500"
//                   disabled={isAnyActionRunning}
//                 />
//                 <ActionButton
//                   onClick={handleDebugCode}
//                   label="Debug Code"
//                   loadingLabel="Debugging..."
//                   isLoading={isDebugging}
//                   bgColor="bg-yellow-500"
//                   disabled={isAnyActionRunning}
//                 />
//                 <ActionButton
//                   onClick={handleOptimizeCode}
//                   label="Optimize Code"
//                   loadingLabel="Optimizing..."
//                   isLoading={isOptimizing}
//                   bgColor="bg-green-500"
//                   disabled={isAnyActionRunning}
//                 />
//               </div>
//             </div>

//             <div className="h-[500px] bg-gray-800 border border-gray-700 rounded-lg shadow-lg p-4">
//               <CodeEditor language={language} code={code} setCode={setCode} />
//             </div>
//           </div>

//           <div className="flex-1">
//             <Output result={output} />
//           </div>
//         </div>
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default App;
import React, { useState } from 'react';
import LanguageDropdown from './components/LanguageDropdown';
import CodeEditor from './components/CodeEditor';
import Footer from './components/Footer';
import Output from './components/Output';
import ActionButton from './components/ActionButton';
import { runCode, debugCode, optimizeCode } from './utils/runCode';
import { languageIds } from './utils/languageIds';
import { boilerplateCode } from './utils/boilerplates';
import { Helmet } from 'react-helmet';

const App = () => {
  const [language, setLanguage] = useState('javascript');
  const [code, setCode] = useState(boilerplateCode['javascript']);
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [isDebugging, setIsDebugging] = useState(false);
  const [isOptimizing, setIsOptimizing] = useState(false);

  const handleRunCode = async () => {
    setIsRunning(true);
    setOutput('Running code...');
    try {
      const result = await runCode(code, languageIds[language]);
      if (result.compile_output) {
        setOutput(`Compilation Error: ${result.compile_output}`);
      } else if (result.stderr) {
        setOutput(`Runtime Error: ${result.stderr}`);
      } else if (result.stdout) {
        setOutput(result.stdout);
      } else {
        setOutput('No output from code execution.');
      }
    } catch (err) {
      setOutput('Execution error: ' + err.message);
    } finally {
      setIsRunning(false);
    }
  };

  const handleDebugCode = async () => {
    setIsDebugging(true);
    setOutput('Debugging with AI...');
    try {
      const result = await debugCode(code, language);
      setOutput(result || 'No suggestions from AI.');
    } catch (err) {
      setOutput('Debug error: ' + err.message);
    } finally {
      setIsDebugging(false);
    }
  };

  const handleOptimizeCode = async () => {
    setIsOptimizing(true);
    setOutput('Optimizing with AI...');
    try {
      const result = await optimizeCode(code, language);
      setOutput(result || 'No optimization suggestions from AI.');
    } catch (err) {
      setOutput('Optimization error: ' + err.message);
    } finally {
      setIsOptimizing(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-gray-900 text-white">
      <Helmet>
        <title>AI Powered Code Debugger and Optimizer</title>
      </Helmet>
      <main className="flex-grow p-4">
        <h1 className="text-3xl font-bold mb-6 text-center">AI Code Debugger and Optimizer</h1>

        <div className="flex flex-col md:flex-row gap-4">
          {/* Code Editor */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-2 gap-2 flex-wrap">
              <LanguageDropdown
                language={language}
                setLanguage={(newLang) => {
                  setLanguage(newLang);
                  setCode(boilerplateCode[newLang] || '// Start typing your code here...');
                }}
              />
              <div className="flex gap-2">
                <ActionButton
                  onClick={handleRunCode}
                  label="Run Code"
                  loadingLabel="Running..."
                  isLoading={isRunning}
                  bgColor="bg-blue-500"
                />
                <ActionButton
                  onClick={handleDebugCode}
                  label="Debug Code"
                  loadingLabel="Debugging..."
                  isLoading={isDebugging}
                  bgColor="bg-yellow-500"
                />
                <ActionButton
                  onClick={handleOptimizeCode}
                  label="Optimize Code"
                  loadingLabel="Optimizing..."
                  isLoading={isOptimizing}
                  bgColor="bg-green-500"
                />
              </div>
            </div>

            <div className="h-[500px] bg-gray-800 border border-gray-700 rounded-lg shadow-lg p-4">
              <CodeEditor language={language} code={code} setCode={setCode} />
            </div>
          </div>

          {/* Output Panel */}
          <div className="flex-1">
            <Output result={output} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
