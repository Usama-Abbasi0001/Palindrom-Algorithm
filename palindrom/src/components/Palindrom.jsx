import React, { useState } from "react";

function Palindrom() {
  const [input, setInput] = useState("");
  const [isPalindrome, setIsPalindrome] = useState(null);

  const isPal2 = (str) => {
    let newRvs = str.toLowerCase();
    let left = 0;
    let right = newRvs.length - 1;
    while (left < right) {
      if (newRvs[left] !== newRvs[right]) {
        return false;
      }
      left++;
      right--;
    }
    return true;
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);
    if (value) {
      setIsPalindrome(isPal2(value));
    } else {
      setIsPalindrome(null);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Palindrome Checker</h1>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Enter a word"
        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      {isPalindrome !== null && (
        <p
          className={`mt-4 text-xl ${
            isPalindrome ? "text-green-500" : "text-red-500"
          }`}
        >
          {isPalindrome
            ? `"${input}" is a palindrome!`
            : `"${input}" is not a palindrome.`}
        </p>
      )}
    </div>
  );
}

export default Palindrom;
