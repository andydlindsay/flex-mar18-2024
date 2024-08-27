import './App.css';
import React, { useState } from 'react';

function App() {
  const [targetNumber, setTargetNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [userGuess, setUserGuess] = useState('');
  const [message, setMessage] = useState('');
  const [guessCount, setGuessCount] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const maxGuesses = 6;

  const handleGuess = (e) => {
    e.preventDefault();
    if (gameOver) return;

    const guess = parseInt(userGuess, 10);
    const newGuessCount = guessCount + 1;
    setGuessCount(newGuessCount);

    if (guess < targetNumber) {
      setMessage('Too low!');
    } else if (guess > targetNumber) {
      setMessage('Too high!');
    } else {
      setMessage(`Correct! You guessed it in ${newGuessCount} tries.`);
      setGameOver(true);
    }

    if (newGuessCount >= maxGuesses && guess !== targetNumber) {
      setMessage(`Game Over! The correct number was ${targetNumber}.`);
      setGameOver(true);
    }
  };

  const resetGame = () => {
    setTargetNumber(Math.floor(Math.random() * 100) + 1);
    setUserGuess('');
    setMessage('');
    setGuessCount(0);
    setGameOver(false);
  };

  return (
    <div>
      <h1>Number Guessing Game</h1>
      <form onSubmit={handleGuess}>
        <input
          type="number"
          value={userGuess}
          onChange={(e) => setUserGuess(e.target.value)}
          disabled={gameOver}
        />
        <button type="submit" disabled={gameOver}>Guess</button>
      </form>
      <p>{message}</p>
      {gameOver && <button onClick={resetGame}>Reset Game</button>}
    </div>
  );
}

export default App;
