import { useState } from 'react';
import './App.css';
import Header from './components/Header.jsx';
import UserInput from './components/UserInput.jsx';
import Result from './components/Result.jsx';

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1200,
    annualInvestmnet: 200,
    expectedReturn: 500,
    duration: 5,
  });
  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevSate) => {
      return {
        ...prevSate,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} handleChange={handleChange} />

      <Result input={userInput} />
    </>
  );
}

export default App;
