import React, { useState } from 'react';

const Event = () => {
  const [text, setText] = useState('');
  const [letterCount, setLetterCount] = useState(0);

  const handleUpperCase = () => {
    setText(text.toUpperCase());
    setLetterCount(text.length);
  };

  const handleLowerCase = () => {
    setText(text.toLowerCase());
    setLetterCount(text.length);
  };

  const handleRemoveText = () => {
    setText('');
    setLetterCount(0);
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(text);
    alert('Text copied to clipboard');
  };
  const handleChange = (event) => {
    const newText = event.target.value;
    setText(newText);
    setLetterCount(newText.length);
  };

  return (
    <div className="container mx-auto p-4 text-center">
      <h2 className="text-2xl font-bold mb-4">Text Case Converter</h2>
      <textarea
        value={text}
        onChange={handleChange}
        className="border p-2 w-full rounded mb-4"
        placeholder="Type your text here..."
        rows="4"
      />
      <div>
        <button
          onClick={handleUpperCase}
          className="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-700 transition duration-200"
        >
          Convert to Uppercase
        </button>
        <button
          onClick={handleLowerCase}
          className="bg-green-500 text-white px-4 py-2 rounded mr-2 hover:bg-green-700 transition duration-200"
        >
          Convert to Lowercase
        </button>
        <button
          onClick={handleRemoveText}
          className="bg-red-500 text-white px-4 py-2 rounded mr-2 hover:bg-red-700 transition duration-200"
        >
          Remove Text
        </button>
        <button
          onClick={handleCopyText}
          className="bg-yellow-500 text-white px-4 py-2 rounded mr-2 hover:bg-yellow-700 transition duration-200"
        >
          Copy Text
        </button>
      </div>
      <p className="mt-4 text-xl text-red-500 font-bold">{text}</p>
      <p className="mt-4 text-xl text-green-500 font-bold">Total letters: {letterCount}</p>
    </div>
  );
};

export default Event;
