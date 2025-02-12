import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Joke from './components/Joke';

function App() {
  const [joke, setJoke] = useState('');

  async function getWisdom() {
    try {
      const response = await fetch('https://api.chucknorris.io/jokes/random');

      if (!response.ok) {
        throw new Error(`Response error: ${response.status}`);
      }

      const data = await response.json();
      setJoke(data.value);
    } catch (error) {
      console.log(`An error occured: ${error}`);
    }
  }

  return (
    <div className="wrapper">
      <Button onClick={getWisdom}>Get Joke</Button>
      <Joke>{joke}</Joke>
    </div>
  );
}

export default App;
