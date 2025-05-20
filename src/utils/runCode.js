import axios from 'axios';

const backendUrl = "https://ai-code-debugger-and-optimizer-backend.onrender.com";


export const runCode = async (sourceCode, languageId) => {
  const response = await axios.post(`${backendUrl}/run`, {
    source_code: sourceCode,
    language_id: languageId,
  });
  return response.data;
};

export const debugCode = async (code, language) => {
  const response = await axios.post(`${backendUrl}/debug`, {
    code,
    language,
  });
  return response.data.result;
};

export const optimizeCode = async (code, language) => {
  const response = await axios.post(`${backendUrl}/optimize`, {
    code,
    language,
  });
  return response.data.result;
};
