import React, { Component } from "react";

class CvLayout extends Component {
  render() {
    return (
      <div>
        <div className="text-center">
          <button
            type="button"
            className="btn btn-primary m-5 w-25"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            CV Preview
          </button>
        </div>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-fullscreen">
            <div className="modal-content">
              <div className="modal-header">
                {" "}
                <h5 className="modal-title" id="exampleModalLabel">
                  CV Preview
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="page m-3" id="printableArea">
                  <br></br>
                  <div className="card  m-1 p-1">
                    <div className="card-body">
                      <p className="m-0 p-0 fs-4 mt-2">
                        {this.props.state.name}
                      </p>
                      <p className="m-1 p-0">{this.props.state.email}</p>
                      <p className="m-1 p-0">{this.props.state.phone}</p>
                    </div>
                  </div>
                  <div className="card  m-1 p-1">
                    <div className="card-body">
                      <p className="lh-sm m-2">{this.props.state.about}</p>
                    </div>
                  </div>

                  <div className="card  m-1 p-1">
                    <div className="card-body">
                      <p className="card-title">Skills</p>
                      <div className="card-text container m-2">
                        <p>{this.props.state.skills.join(", ")}</p>
                      </div>
                    </div>
                  </div>

                  <div className="card  m-1 p-1">
                    <div className="card-body">
                      <p className="card-title">Education</p>
                      <div className="row">
                        {this.props.state.education.map((item) => {
                          return (
                            <div className="col-4">
                              <div className="card">
                                <p className="card-title m-2">{item.school}</p>
                                <div className="card-body m-1">
                                  <p className="m-0 p-0">{item.subject}</p>
                                  <p className="m-0 p-0">
                                    {`${item.schoolStart.substring(
                                      0,
                                      4
                                    )} - ${item.schoolEnd.substring(0, 4)}`}
                                  </p>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="card  m-1 p-1">
                    <div className="card-body">
                      <p className="card-title">Work Experience</p>
                      <div className="row">
                        {this.props.state.jobs.map((item) => {
                          return (
                            <div className="col-4">
                              <div className="card  m-2">
                                <p className="card-title m-2">- {item.work}</p>
                                <div className="card-body m-1">
                                  <p className="m-0 p-0">{item.role}</p>
                                  <p className="m-0 p-0">
                                    {`${item.workStart.substring(
                                      0,
                                      4
                                    )} - ${item.workEnd.substring(0, 4)}`}
                                  </p>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CvLayout;
