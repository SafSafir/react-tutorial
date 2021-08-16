import React from "react";

function HookCounterOne() {
  const [count, setCount] = React.useState(0);

  const [name, setName] = React.useState("");
  React.useEffect(() => {
    console.log("useEffect - Updating document title");
    document.title = `Clicked ${count} times`;
  }, [name, count]);

  return (
    <div>
      <input
        type='text'
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Clicked {count}
      </button>
    </div>
  );
}

export default HookCounterOne;
