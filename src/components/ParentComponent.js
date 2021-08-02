import React, { Component } from "react";
import RegulerComponent from "./RegulerComponent";
import PureComp from "./PureComp";
export class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Ziya",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Ziya",
      });
    }, 2000);
  }
  render() {
    console.log(
      "********************Parent Component Render********************"
    );
    return (
      <div>
        Parent Component
        <RegulerComponent name={this.state.name}></RegulerComponent>
        <PureComp name={this.state.name}></PureComp>
      </div>
    );
  }
}

export default ParentComponent;
