import React from "react";
import Person from "./Person";
function NameList() {
  const names = ["ziya", "enes", "badu"];
  const persons = [
    { id: 1, name: "ziya", age: 31, skill: "react" },
    { id: 2, name: "enes", age: 21, skill: "python" },
    { id: 3, name: "badu", age: 24, skill: "dotnet" },
  ];
  const nameList = names.map((name, index) => {
    return (
      <h2 key={index}>
        {index}, {name}
      </h2>
    );
  });
  return <div>{nameList}</div>;
}

export default NameList;
