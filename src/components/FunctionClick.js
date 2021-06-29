import React from "react";

export default function FunctionClick() {
  function clickHandler() {
    console.log("Button Click!");
  }
  return (
    <div>
      <button onClick={clickHandler}>Click</button>
    </div>
  );
}
