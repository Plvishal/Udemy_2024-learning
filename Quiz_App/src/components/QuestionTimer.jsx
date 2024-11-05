import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

function QuestionTimer({ timeout, onTimeout, mode }) {
  const [remainingTime, setRemainigTIme] = useState(timeout);
  useEffect(() => {
    const timer = setTimeout(onTimeout, timeout);
    return () => {
      clearTimeout(timer);
    };
  }, [timeout, onTimeout]);
  useEffect(() => {
    const interval = setInterval(() => {
      setRemainigTIme((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <progress
        id="question-time"
        max={timeout}
        value={remainingTime}
        className={mode}
      />
    </>
  );
}

export default QuestionTimer;
