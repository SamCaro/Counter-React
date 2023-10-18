import './App.css';
import { Counter } from './components/Counter';
import { Button } from './components/button';
import counterLogo from './img/logoCount.png'
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0)

  const handleclick = () => {
    setNumClics(numClics + 1)
  }

  const restart = () => {
    setNumClics(0)
  }

  return (
    <div className='App'>
      <div className='counterLogo-container'></div>
      <img
        className='counterLogo'
        src={ counterLogo }
        alt='Logo Count' />

      <div className='container-principal'>
        <Counter numClics={ numClics } />
        <Button
          text='Clic'
          buttonClic={true}
          handleclick={handleclick} />
        <Button
          text='Restart'
          buttonClic={false}
          handleclick={restart} />
      </div>
    </div>
  );
}

export default App;
