import React from 'react';

const Rules = () => {
  return (
    <div className="mx-auto bg-red-600 p-8 bg-[url('/bg.jpg')] h-[100vh] w-full flex justify-center items-center">
        <div className=' container font-bold'>
      <h1 className="text-4xl font-bold mb-6">Hangman Game Rules</h1>
      <p className="mb-4">
        Hangman is a word-guessing game where one player thinks of a word and the other player tries to guess it by suggesting letters.
      </p>
      <h2 className="text-2xl font-bold mb-3">How to Play</h2>
      <ol className="list-decimal ml-6">
        <li>One player thinks of a word and visualizes a series of underscores representing each letter in the word.</li>
        <li>The other player starts guessing letters one at a time.</li>
        <li>If the guessed letter is in the word, it is revealed in its correct position(s).</li>
        <li>If the guessed letter is not in the word, a part of the hangman is drawn. The game typically has a set number of attempts before the hangman is fully drawn.</li>
        <li>The game continues until the word is guessed correctly or the hangman is fully drawn.</li>
      </ol>
      <h2 className="text-2xl font-bold mb-3 mt-6">Rules and Tips</h2>
      <ul className="list-disc ml-6">
        <li>Words are often chosen from categories like animals, countries, or common nouns.</li>
        <li>Players usually agree on a set number of incorrect guesses allowed before the game ends.</li>
        <li>Commonly used letters like vowels are often guessed first.</li>
        <li>The hangman typically consists of elements like a head, body, arms, and legs. The game ends when all elements are drawn.</li>
        <li>Players can decide on variations, such as using phrases or allowing additional hints.</li>
      </ul>
      </div>
    </div>
  );
};

export default Rules;
