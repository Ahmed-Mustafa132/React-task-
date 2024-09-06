import { Component } from "react";
import "./Navbar.css";

export default class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      section: [{ name: "Header" }, { name: "Main" }, { name: "Footer" }],
    };
  }
  render() {
    return (
      <>
        <nav>
          <ul>
            {this.state.section.map((t) => {
              return <li key={t.name}>{t.name}</li>;
            })}
          </ul>
        </nav>
      </>
    );
  }
}
