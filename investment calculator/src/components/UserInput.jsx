import { useState } from 'react';

function UserInput() {
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
        [inputIdentifier]: newValue,
      };
    });
  }
  console.log(userInput);
  return (
    <>
      <section id="user-input">
        <div className="input-group">
          <p>
            <label>Initial Investment</label>
            <input
              type="number"
              required
              value={userInput.initialInvestment}
              onChange={(e) =>
                handleChange('initialInvestment', e.target.value)
              }
            />
          </p>
          <p>
            <label>Annual Investment</label>
            <input
              type="number"
              required
              value={userInput.annualInvestmnet}
              onChange={(e) => handleChange('annualInvestmnet', e.target.value)}
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label>Expected Return</label>
            <input
              type="number"
              required
              value={userInput.expectedReturn}
              onChange={(e) => handleChange('expectedReturn', e.target.value)}
            />
          </p>
          <p>
            <label>Duration</label>
            <input
              type="number"
              required
              value={userInput.duration}
              onChange={(e) => handleChange('duration', e.target.value)}
            />
          </p>
        </div>
      </section>
    </>
  );
}

export default UserInput;
