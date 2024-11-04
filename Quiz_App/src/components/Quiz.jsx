import React, { useCallback } from 'react';
import { useState } from 'react';
import QUESTIONS from '../questions.js';
import quizCompleteImg from '../assets/quiz-complete.png';
import QuestionTimer from './QuestionTimer.jsx';
function Quiz() {
  const [answerState, setAnswerState] = useState('');
  const [userAnswer, setUserAnswer] = useState([]);
  const activeQuestionIndex =
    answerState === '' ? userAnswer.length : userAnswer.length - 1;

  // When quiz is over thta's help to  don't break UI
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelecAnswer = useCallback(
    (selectedAnswer) => {
      setAnswerState('answered');
      setUserAnswer((prevUserAnswer) => {
        return [...prevUserAnswer, selectedAnswer];
      });
      setTimeout(() => {
        if (selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]) {
          setAnswerState('correct');
        } else {
          setAnswerState('wrong');
        }

        setTimeout(() => {
          setAnswerState('');
        }, 2000);
      }, 1000);
    },
    [activeQuestionIndex]
  );
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
  // After is block executed then run this line of code
  const suffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
  suffledAnswers.sort(() => Math.random() - 0.5);
  return (
    <div id="quiz">
      <div id="question">
        <QuestionTimer
          key={activeQuestionIndex}
          timeout={10000}
          onTimeout={handleSkipAnswer}
        />
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {suffledAnswers.map((answer) => {
            const isSelected = userAnswer[userAnswer.length - 1] === answer;
            let cssClasses = '';
            if (answerState === 'answered' && isSelected) {
              cssClasses = 'selected';
            }
            if (answerState === 'correct' || ('wrong' && isSelected)) {
              cssClasses = answerState;
            }
            return (
              <li key={answer} className="answer">
                <button
                  onClick={() => handleSelecAnswer(answer)}
                  className={cssClasses}
                >
                  {answer}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Quiz;
