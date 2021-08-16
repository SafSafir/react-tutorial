import React from "react";

function Hookmouse() {
  const [x, setX] = React.useState(0);
  const [y, setY] = React.useState(0);
  const logMousePosition = (e) => {
    console.log("Mouse Event");
    setX(e.clientX);
    setY(e.clientY);
  };
  React.useEffect(() => {
    console.log("usEffect Called");
    window.addEventListener("mousemove", logMousePosition);
    return () => {
      console.log("Component Unmount Code");
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []);
  return (
    <div>
      X - {x} <br /> Y - {y}
    </div>
  );
}

export default Hookmouse;
