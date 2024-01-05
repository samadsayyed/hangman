import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[url('/bg.jpg')]">
      <h1 className="text-4xl font-bold mb-6">Hangman Game</h1>
      <Link to={"/login"}>
    <button className=' p-3 border-2 rounded-3xl text-2xl font-semibold border-black'>Start</button>
    </Link>
    </div>
  );
};

export default Welcome;
