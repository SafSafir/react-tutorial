import React from "react";
import { CountContext } from "../../App";

function ComponentA() {
  const countContext = React.useContext(CountContext);
  return (
    <div>
      Component A {countContext.countState}
      <div>
        <button onClick={() => countContext.countDispatch("increment")}>
          Increment
        </button>
        <button onClick={() => countContext.countDispatch("decrement")}>
          Decrement
        </button>
        <button onClick={() => countContext.countDispatch("reset")}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default ComponentA;
