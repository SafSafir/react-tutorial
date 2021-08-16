import React from "react";

function CounterHook() {
  const initialCount = 0;
  const [count, setCount] = React.useState(initialCount);
  return (
    <div>
      <h2>Count: {count}</h2>
      <button
        onClick={() => {
          setCount(initialCount);
        }}
      >
        Reset
      </button>
      <button
        onClick={() => {
          setCount((prevCount) => {
            return prevCount + 1;
          });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setCount((prevCount) => {
            return prevCount - 1;
          });
        }}
      >
        Decrement
      </button>
    </div>
  );
}

export default CounterHook;
