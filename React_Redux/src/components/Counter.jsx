// import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
function Counter() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter);
  const incrementHandler = () => {
    dispatch({ type: 'increment' });
  };
  const incrementDynamicHander = () => {
    dispatch({ type: 'increase', amount: 5 });
  };
  const decrementHandler = () => {
    dispatch({ type: 'decrement' });
  };
  const toggleCounterHandler = () => {
    dispatch({ type: 'toggle' });
  };
  return (
    <>
      <h1>Redux Counter</h1>
      {show && <div>{counter}</div>}
      <div>
        <button style={styles.button} onClick={incrementHandler}>
          Increment
        </button>
        <button style={styles.button} onClick={incrementDynamicHander}>
          Increment BY 5
        </button>
        <button style={styles.button} onClick={decrementHandler}>
          Decrement
        </button>
      </div>
      <div>
        <button onClick={toggleCounterHandler} style={styles.button}>
          Toggle Counter
        </button>
      </div>
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
