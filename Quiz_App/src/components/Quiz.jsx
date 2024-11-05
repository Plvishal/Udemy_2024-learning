import React, { useCallback } from 'react';
import { useState } from 'react';
import QUESTIONS from '../questions.js';
import quizCompleteImg from '../assets/quiz-complete.png';
import Question from './Question.jsx';
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
    return (
      <div id="summary">
        <img src={quizCompleteImg} alt="Throphy" />
        <h2>Quiz Completed !</h2>
      </div>
    );
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
