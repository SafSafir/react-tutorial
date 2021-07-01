import React from "react";

function Person({ person }) {
  return (
    <div>
      <h2>
        Ben {person.name}, yasim {person.age}, yetenegim {person.skill}
      </h2>
    </div>
  );
}

export default Person;
