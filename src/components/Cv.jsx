import React, { Component } from "react";

class CvLayout extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="page mt-5" id="print-area">
            <div className="row" id="printableArea">
              <div className="col-4">
                <br></br>
                <div className="  ms-3 p-1">
                  <div className="card-body">
                    <p className="m-0 p-0 fs-4 mt-3">{this.props.state.name}</p>
                    <p className="mt-3 mb-1 p-0">{this.props.state.email}</p>
                    <p className="mt-0 p-0">{this.props.state.phone}</p>
                  </div>
                </div>
              </div>

              <div className="col-8">
                <div className="m-1 me-3 mt-5 p-1">
                  <div className="card-body">
                    <p className="lh-sm m-2 mt-5">{this.props.state.about}</p>
                  </div>
                </div>

                {(() => {
                  if (this.props.state.skills.length === 0) {
                    return <div></div>;
                  } else {
                    return (
                      <div className="mt-0 m-1 ">
                        <div className="m-1 me-3 mt-0 p-1">
                          <p className="card-title">Skills:</p>
                          <div className="card-text container m-0">
                            <p>{this.props.state.skills.join(", ")}</p>
                          </div>
                        </div>
                      </div>
                    );
                  }
                })()}

                {(() => {
                  if (this.props.state.education.length === 0) {
                    return <div></div>;
                  } else {
                    return (
                      <div className="m-1 p-1">
                        <div className="m-1 me-3 mt-0 p-1">
                          <p className="card-title">Education:</p>
                          <div className="row">
                            {this.props.state.education.map((item) => {
                              return (
                                <div className="col-12">
                                  <div className="">
                                    <p className="card-title m-1 mb-0">
                                      • {item.school}
                                      <span className="ms-2 p-0">
                                        {`(${item.schoolStart.substring(
                                          0,
                                          4
                                        )} - ${item.schoolEnd.substring(
                                          0,
                                          4
                                        )})`}
                                      </span>
                                    </p>
                                    <div className="m-2 ms-4">
                                      <p className="m-0 p-0">
                                        Focus: {item.subject}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    );
                  }
                })()}

                {(() => {
                  if (this.props.state.jobs.length === 0) {
                    return <div></div>;
                  } else {
                    return (
                      <div className="m-1 p-1">
                        <div className="m-1 me-3 mt-0 p-1">
                          <p className="card-title">Work History:</p>
                          <div className="row">
                            {this.props.state.jobs.map((item) => {
                              return (
                                <div className="col-12">
                                  <div className="">
                                    <p className="card-title m-1 mb-0">
                                      • {item.work}
                                      <span className="ms-2 p-0">
                                        {`(${item.workStart.substring(
                                          0,
                                          4
                                        )} - ${item.workEnd.substring(0, 4)})`}
                                      </span>
                                    </p>
                                    <div className="m-2 ms-4">
                                      <p className="m-0 p-0">
                                        Title: {item.role}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    );
                  }
                })()}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CvLayout;
