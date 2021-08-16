import React from "react";

const initialState = { firstCounter: 0 };
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { firstcounter: state.firstCounter + 1 };
    case "decrement":
      return { firstcounter: state.firstCounter - 1 };
    case "reset":
      return initialState;

    default:
      return state;
  }
};

function CounterTwo() {
  const [count, dispatch] = React.useReducer(reducer, initialState);
  return (
    <div>
      <div>Count - {count.firstCounter}</div>
      <button
        onClick={() => {
          dispatch({ type: "increment" });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrement" });
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch({ type: "reset" });
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default CounterTwo;
