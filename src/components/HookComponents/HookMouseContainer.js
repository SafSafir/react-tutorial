import React from "react";
import Hookmouse from "./Hookmouse";
function HookMouseContainer() {
  const [display, setDisplay] = React.useState(true);

  return (
    <div>
      <button
        onClick={() => {
          setDisplay(!display);
        }}
      >
        Click
      </button>
      {display && <Hookmouse />}
    </div>
  );
}

export default HookMouseContainer;
