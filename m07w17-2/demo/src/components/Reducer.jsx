import {useReducer} from 'react';

// the reducer function makes all updates to state
const reducer = (state, action) => {
  console.log('action', action);

  if (action.type === 'increment') {
    // copy state and increment the value for counter
    if (state.counter >= 10) {
      const copy = {
        ...state,
        counter: state.counter + 5,
      };
      return copy;
    }

    const copy = {
      ...state,
      counter: state.counter + 1,
    };

    // return copy of state
    return copy;
  }

  if (action.type === 'decrement') {
    // copy state and decrement the value for counter
    const copy = {
      ...state,
      counter: state.counter - 1
    };

    // return copy of state
    return copy;
  }

  if (action.type === 'incrementByN') {
    // copy state and increment the counter by the supplied value
    const copy = {
      ...state,
      counter: state.counter + action.payload,
    };

    // return the new state object
    return copy;
  }

  if (action.type === 'setUser') {
    const copy = {
      ...state,
      user: action.payload,
    }

    return copy;
  }
};

const initialState = {
  counter: 0,
  user: {
    email: 'a@a.com',
    friends: []
  },
  products: []
};

const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const increment = () => {
    // make a polite request to the reducer to update state for us
    dispatch({ type: 'increment' }); // React calls the reducer function
  };

  const decrement = () => {
    dispatch({ type: 'decrement' });
  };

  const incrementBy10 = () => {
    dispatch({ type: 'incrementByN', payload: 10 });
  };

  const incrementBy40 = () => {
    dispatch({ type: 'incrementByN', payload: 40 });
  };

  return (
    <div>
      <h2>Reducer Component</h2>
      <h3>Counter: {state.counter}</h3>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={incrementBy10}>+10</button>
      <button onClick={incrementBy40}>+40</button>
    </div>
  );
};

export default Reducer;
