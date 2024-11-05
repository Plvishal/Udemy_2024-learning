import React, { useCallback } from 'react';
import { useState } from 'react';
import QUESTIONS from '../questions.js';

import Question from './Question.jsx';
import Summary from './Summary.jsx';
function Quiz() {
  const [userAnswer, setUserAnswer] = useState([]);
  const activeQuestionIndex = userAnswer.length;

  // When quiz is over thta's help to  don't break UI
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelecAnswer = useCallback((selectedAnswer) => {
    setUserAnswer((prevUserAnswer) => {
      return [...prevUserAnswer, selectedAnswer];
    });
  }, []);
  const handleSkipAnswer = useCallback(
    () => handleSelecAnswer(null),
    [handleSelecAnswer]
  );
  if (quizIsComplete) {
    return <Summary userAnswers={userAnswer} />;
  }
  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSelectAnswer={handleSelecAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
}

export default Quiz;
