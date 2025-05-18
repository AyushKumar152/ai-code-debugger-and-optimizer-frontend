import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:5000';

export const runCode = async (sourceCode, languageId) => {
  const response = await axios.post(`${BASE_URL}/run`, {
    source_code: sourceCode,
    language_id: languageId,
  });
  return response.data;
};

export const debugCode = async (code, language) => {
  const response = await axios.post(`${BASE_URL}/debug`, {
    code,
    language,
  });
  return response.data.result;
};

export const optimizeCode = async (code, language) => {
  const response = await axios.post(`${BASE_URL}/optimize`, {
    code,
    language,
  });
  return response.data.result;
};
