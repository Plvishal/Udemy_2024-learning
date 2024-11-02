import React from 'react';
import { useState } from 'react';

function Quiz() {
  const [activeQuestionIndex, SetActiveQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState([]);
  return <div>Quiz</div>;
}

export default Quiz;
