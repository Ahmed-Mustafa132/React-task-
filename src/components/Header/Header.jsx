import { Component } from "react";
import "./Header.css";
export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      name: "Ahmed Mostafa",
      job: "MERN Stack Developer",
    };
  }

  render() {
    return (
      <>
        <div className="Header">
          <h1>{this.state.name}</h1>
          <h2>{this.state.job}</h2>
        </div>
      </>
    );
  }
}
