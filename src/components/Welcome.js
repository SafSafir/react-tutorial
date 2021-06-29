import React, { Component } from "react";

class Welcome extends Component {
  render() {
    const { name, number } = this.props;
    return (
      <h1>
        oç {name}, okul numaran {number}
      </h1>
    );
  }
}

export default Welcome;
