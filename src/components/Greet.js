import React from "react";

// function Greet() {
//   return <h1>Hello kurba</h1>;
// }

const Greet = (props) => {
  const { name, number } = props;
  return (
    <div>
      <h1>
        Hello {name}, okul numaran {number}
      </h1>
    </div>
  );
};
export default Greet;
