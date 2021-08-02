import React, { Component } from "react";

class RegulerComponent extends Component {
  render() {
    console.log(
      "********************Regular Component Render********************"
    );
    return <div>Regular Component {this.props.name}</div>;
  }
}

export default RegulerComponent;
