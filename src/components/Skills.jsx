import React, { Component } from "react";
import "../App.css";

class Skills extends Component {
  render() {
    return (
      <div className="card m-3">
        <h3 className="card-header" id="headingThree">
          Skills
        </h3>
        <div
          id="collapseThree"
          className="card-body"
          aria-labelledby="headingThree"
        >
          <div className="container">
            <div className="container ">
              {this.props.state.skills.map((listItem, index) => {
                return (
                  <p
                    key={index}
                    className="badge bg-secondary p-2 m-1 mb-1 mt-3"
                  >
                    {listItem}
                    <button
                      type="button"
                      className="btn-close btn-close-white ms-2"
                      aria-label="Close"
                      onClick={() => this.props.deleteSkill(index)}
                    ></button>
                  </p>
                );
              })}
            </div>

            <div className=" container input-group mb-3 mt-3">
              <span className="input-group-text" id="basic-addon1">
                Skill:
              </span>
              <input type="text" className="form-control" id="skillBox" />
            </div>
            <button
              type="submit"
              className="btn btn-primary m-2 mb-3"
              onClick={this.props.addSkill}
            >
              Add Skill
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
