import React from "react";
import { CountContext } from "../../App";

function ComponentF() {
  const countContext = React.useContext(CountContext);
  return (
    <div>
      Component F {countContext.countState}
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

export default ComponentF;
