import { Component } from 'react';
import { connect } from 'react-redux';

class Counter1 extends Component {
  incrementHandler() {
    console.log('From class components');
    this.props.increment();
  }
  decrementHandler() {
    this.props.decrement();
  }
  render() {
    return (
      <div>
        <h1>Redux Counter</h1>
        <div>{this.props.counter}</div>
        <button
          style={styles.button}
          onClick={this.incrementHandler.bind(this)}
        >
          Increment
        </button>
        <button
          style={styles.button}
          onClick={this.decrementHandler.bind(this)}
        >
          Decrement
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: 'increment' }),
    decrement: () => dispatch({ type: 'decrement' }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter1);
const styles = {
  button: {
    backgroundColor: 'blue',
    borderRadius: '5px',
    margin: '2px',
    padding: '3px',
    color: '#fff',
  },
};
