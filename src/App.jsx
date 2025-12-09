import { useState } from 'react';
import './App.css';

function App() {
  const [targetNumber] = useState(Math.floor(Math.random() * 10) + 1); 
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    const guessNumber = parseInt(guess, 10); 
    if (!guess || isNaN(guessNumber)) {
      setMessage('Please enter number!');
      console.log('No number entered or invalid input.');
    } else if (guessNumber === targetNumber) {
      setMessage(`You guessed it! The number was ${targetNumber}.`);
      console.log('Correct guess!');
    } else if (guessNumber < targetNumber) {
      setMessage('Too low! Try again.');
      console.log('Too low!');
    } else {
      setMessage('Too high! Try again.');
      console.log('Too high!');
    }

    // Clear the input field after submission
    setGuess('');
  };

  return (
    <div className="game-container">
      <h1 className='text-3xl'>Guess the Number</h1>
      <input
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)} 
        placeholder="Enter a number"
      />
      <button onClick={handleSubmit} className='text-xl'>Submit Guess</button>
      <p>{message}</p> 
    </div>
  );
}

export default App;
