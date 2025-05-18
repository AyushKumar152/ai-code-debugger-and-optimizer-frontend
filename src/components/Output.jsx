const Output = ({ result }) => {
  return (
    <div className="mt-4 p-4 bg-gray-800 rounded-lg shadow-lg border border-gray-700">
      <h2 className="text-xl font-semibold text-white mb-2">Output</h2>
      <div className="bg-gray-900 text-green-400 font-mono p-4 rounded-md h-[500px] overflow-auto">
        <pre className="whitespace-pre-wrap break-words">{result || "// Output will appear here after you run your code."}</pre>
      </div>
    </div>
  );
};

export default Output;
