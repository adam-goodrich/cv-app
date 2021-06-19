import React, { Component } from "react";

class Education extends Component {
  render() {
    if (this.props.state.editEducationMode) {
      return (
        <div className="card m-3" id="accordionExample">
          <h2 className="card-header " id="headingFour">
            Education <p className="fs-6 m-2">(most recent first)</p>
          </h2>
          <div
            id="collapseFour"
            className="card-body"
            aria-labelledby="headingFour"
          >
            <form className="container" onSubmit={this.props.updateSchool}>
              <div className="container input-group mb-1 mt-1">
                <span className="input-group-text" id="basic-addon1">
                  Institution Name:
                </span>
                <input
                  type="text"
                  className="form-control"
                  id="schoolBox"
                  value={this.props.state.school}
                  onChange={this.props.handleSchoolChange}
                  required
                />
              </div>
              <div className="container input-group mb-3 mt-3">
                <span className="input-group-text" id="basic-addon1">
                  Study Focus:
                </span>
                <input
                  type="text"
                  className="form-control"
                  id="studyBox"
                  value={this.props.state.subject}
                  onChange={this.props.handleSubjectChange}
                  required
                />
              </div>
              <div className="container input-group mb-3 mt-3">
                <span className="input-group-text" id="basic-addon1">
                  Start Date:
                </span>
                <input
                  type="date"
                  className="form-control"
                  id="educationStartBox"
                  value={this.props.state.schoolStart}
                  onChange={this.props.handleSchoolStartChange}
                  required
                />
              </div>
              <div className="container input-group mb-3 mt-3">
                <span className="input-group-text" id="basic-addon1">
                  End Date:
                </span>
                <input
                  type="date"
                  className="form-control"
                  id="educationEndBox"
                  value={this.props.state.schoolEnd}
                  onChange={this.props.handleSchoolEndChange}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary m-2 mb-3">
                Update Education
              </button>
            </form>
          </div>
        </div>
      );
    } else {
      return (
        <div className="card m-3" id="accordionExample">
          <h2 className="card-header " id="headingFour">
            Education <p className="fs-6 m-2">(most recent first)</p>
          </h2>
          <div
            id="collapseFour"
            className="card-body"
            aria-labelledby="headingFour"
          >
            <div className="container">
              <div className="card-body">
                <div className="row">
                  {this.props.state.education.map((item, index) => {
                    return (
                      <div key={`education-${index}`} className="col-lg-4">
                        <div className="card m-1">
                          <div className="card-body">
                            <p>{item.school}</p>
                            <p>{item.subject}</p>
                            <p>
                              {`${item.schoolStart.substring(
                                0,
                                4
                              )} - ${item.schoolEnd.substring(0, 4)}`}
                            </p>
                            <button
                              type="submit"
                              className="btn btn-warning btn-sm me-1  mb-3"
                              onClick={() => this.props.editSchool(index)}
                            >
                              Edit
                            </button>
                            <button
                              type="submit"
                              className="btn btn-danger btn-sm  mb-3"
                              onClick={() => this.props.deleteSchool(index)}
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <form onSubmit={this.props.addSchool}>
                <div className="container input-group mb-3 mt-3">
                  <span className="input-group-text" id="basic-addon1">
                    Institution Name:
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    id="schoolBox"
                    value={this.props.state.school}
                    onChange={this.props.handleSchoolChange}
                    required
                  />
                </div>
                <div className="container input-group mb-3 mt-3">
                  <span className="input-group-text" id="basic-addon1">
                    Study Focus:
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    id="studyBox"
                    value={this.props.state.subject}
                    onChange={this.props.handleSubjectChange}
                    required
                  />
                </div>
                <div className="container input-group mb-3 mt-3">
                  <span className="input-group-text" id="basic-addon1">
                    Start Date:
                  </span>
                  <input
                    type="date"
                    className="form-control"
                    id="educationStartBox"
                    value={this.props.state.schoolStart}
                    onChange={this.props.handleSchoolStartChange}
                    required
                  />
                </div>
                <div className="container input-group mb-3 mt-3">
                  <span className="input-group-text" id="basic-addon1">
                    End Date:
                  </span>
                  <input
                    type="date"
                    className="form-control"
                    id="educationEndBox"
                    value={this.props.state.schoolEnd}
                    onChange={this.props.handleSchoolEndChange}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary m-2 mb-3">
                  Add Education
                </button>
              </form>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Education;
