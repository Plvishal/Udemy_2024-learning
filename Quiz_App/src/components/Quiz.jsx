import React from 'react';
import { useState } from 'react';
import QUESTIONS from '../questions.js';
function Quiz() {
  const [userAnswer, setUserAnswer] = useState([]);
  const activeQuestionAnswer = userAnswer.length;

  const handleSelecAnswer = (selectedAnswer) => {
    setUserAnswer((prevUserAnswer) => {
      return [...prevUserAnswer, selectedAnswer];
    });
  };
  return (
    <div id="quiz">
      <div id="question">
        <h2>{QUESTIONS[activeQuestionAnswer].text}</h2>
        <ul id="answers">
          {QUESTIONS[activeQuestionAnswer].answers.map((answer) => (
            <li key={answer} className="answer">
              <button onClick={() => handleSelecAnswer(answer)}>
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Quiz;
