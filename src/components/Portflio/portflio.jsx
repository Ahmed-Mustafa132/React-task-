import { Component } from "react";
import "./portflio.css";
export default class Footer extends Component {
  constructor() {
    super();
    this.state = {
      projectes: [
        { id: 1, name: "project1", des: "this is my first project" },
        { id: 2, name: "project2", des: "this is my scand project" },
      ],
    };
  }
  render() {
    return (
      <>
        <div className="portflio">
          <h1>Portflio</h1>
          <div className="projectes">
            {this.state.projectes.map((project) => {
              return (
                <div className="project" key={project.id}>
                  <h3 key={project.name}>{project.name}</h3>
                  <p key={project.des}>{project.des}</p>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}
