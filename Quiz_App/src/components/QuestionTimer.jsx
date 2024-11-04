import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

function QuestionTimer({ timeout, onTimeout }) {
  const [remainingTime, setRemainigTIme] = useState(timeout);
  useEffect(() => {
    setTimeout(onTimeout, timeout);
  }, [timeout, onTimeout]);
  useEffect(() => {
    setInterval(() => {
      setRemainigTIme((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);
  }, []);

  return (
    <>
      <progress id="question-time" max={timeout} value={remainingTime} />
    </>
  );
}

export default QuestionTimer;
