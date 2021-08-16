import React from "react";

function IntervalHookCounter() {
  const [count, setCount] = React.useState(0);

  const tick = () => {
    setCount(count + 1);
  };

  React.useEffect(() => {
    const interval = setInterval(tick, 1000);
    return () => {
      clearInterval(interval);
    };
  });

  return <h1>{count}</h1>;
}

export default IntervalHookCounter;
