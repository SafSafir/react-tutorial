import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  incrementCounter = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  incrementCounterFive = () => {
    this.incrementCounter();
    this.incrementCounter();
    this.incrementCounter();
    this.incrementCounter();
    this.incrementCounter();
  };

  render() {
    return (
      <div>
        <div>count - {this.state.count}</div>
        <button
          onClick={() => {
            this.incrementCounterFive();
          }}
        >
          Increment
        </button>
      </div>
    );
  }
}

export default Counter;
