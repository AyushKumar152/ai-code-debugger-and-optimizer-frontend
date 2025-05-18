import React from 'react';

const LanguageDropdown = ({ language, setLanguage }) => (
  <select
    className="p-2 rounded-md bg-gray-800 text-white"
    value={language}
    onChange={(e) => setLanguage(e.target.value)}
  >
    {['javascript', 'python', 'java', 'c', 'cpp'].map((lang) => (
      <option key={lang} value={lang}>
        {lang.charAt(0).toUpperCase() + lang.slice(1)}
      </option>
    ))}
  </select>
);

export default LanguageDropdown;
