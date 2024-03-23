"use client"
import React, { useState } from 'react';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-green-400 to-blue-500 p-4 md:p-4 lg:p-4 xl:p-4 flex justify-between items-center shadow-md" style={{ padding: '4% 7%' }}>
      <h1 className="text-white text-2xl font-bold">Business Analysis</h1>
      <button
        className="hidden md:block bg-purple-600 hover:bg-purple-700 text-white font-semibold px-4 py-2 rounded"
      >
        Sign Up / Login
      </button>
      <button
        className="md:hidden block bg-purple-600 hover:bg-purple-700 text-white font-semibold px-4 py-2 rounded"
        onClick={() => setShowMenu(!showMenu)}
      >
        {showMenu ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        )}
      </button>
      {showMenu && (
        <div className="md:hidden absolute top-16 right-4 bg-white p-4 rounded shadow">
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-4 py-2 rounded">
            Sign Up / Login
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;