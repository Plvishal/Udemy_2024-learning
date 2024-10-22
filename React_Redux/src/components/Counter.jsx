// import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
function Counter() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const incrementHandler = () => {
    dispatch({ type: 'increment' });
  };
  const decrementHandler = () => {
    dispatch({ type: 'decrement' });
  };
  return (
    <>
      <h1>Redux Counter</h1>
      <div>{counter}</div>
      <button style={styles.button} onClick={incrementHandler}>
        Increment
      </button>
      <button style={styles.button} onClick={decrementHandler}>
        Decrement
      </button>
    </>
  );
}

export default Counter;

const styles = {
  button: {
    backgroundColor: 'blue',
    borderRadius: '5px',
    margin: '2px',
    padding: '3px',
    color: '#fff',
  },
};
