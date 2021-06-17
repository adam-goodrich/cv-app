import React, { Component } from "react";

class Work extends Component {
  render() {
    if (this.props.state.editWorkMode) {
      return (
        <div className="card m-3" id="accordionExample">
          <h2 className="card-header " id="headingFour">
            Work History <p className="fs-6 m-2">(most recent first)</p>
          </h2>
          <div
            id="collapseFour"
            className="card-body"
            aria-labelledby="headingFour"
          >
            <div className="container">
              <div className="container input-group mb-3 mt-3">
                <span className="input-group-text" id="basic-addon1">
                  Company Name:
                </span>
                <input
                  type="text"
                  className="form-control"
                  id="schoolBox"
                  value={this.props.state.work}
                  onChange={this.props.handleWorkChange}
                />
              </div>
              <div className="container input-group mb-3 mt-3">
                <span className="input-group-text" id="basic-addon1">
                  Role:
                </span>
                <input
                  type="text"
                  className="form-control"
                  id="studyBox"
                  value={this.props.state.role}
                  onChange={this.props.handleroleChange}
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
                  value={this.props.state.workStart}
                  onChange={this.props.handleWorkStartChange}
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
                  value={this.props.state.workEnd}
                  onChange={this.props.handleWorkEndChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary m-2 mb-3"
                onClick={this.props.updateWork}
              >
                Update Job
              </button>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="card m-3" id="accordionExample">
          <h2 className="card-header " id="headingFour">
            Work History <p className="fs-6 m-2">(most recent first)</p>
          </h2>
          <div
            id="collapseFour"
            className="card-body"
            aria-labelledby="headingFour"
          >
            <div className="container">
              <div className="card-body">
                <div className="row">
                  {this.props.state.jobs.map((item, index) => {
                    return (
                      <div className="col-lg-4">
                        <div className="card m-1">
                          <div className="card-body">
                            <p>{item.work}</p>
                            <p>{item.role}</p>
                            <p>
                              {`${item.workStart.substring(
                                0,
                                4
                              )} - ${item.workEnd.substring(0, 4)}`}
                            </p>
                            <button
                              type="submit"
                              className="btn btn-warning m-2 mb-3"
                              onClick={() => this.props.editWork(index)}
                            >
                              Edit Job
                            </button>
                            <button
                              type="submit"
                              className="btn btn-danger m-2 mb-3"
                              onClick={() => this.props.deleteWork(index)}
                            >
                              Delete Job
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="container input-group mb-3 mt-3">
                <span className="input-group-text" id="basic-addon1">
                  Company Name:
                </span>
                <input
                  type="text"
                  className="form-control"
                  id="schoolBox"
                  value={this.props.state.work}
                  onChange={this.props.handleWorkChange}
                />
              </div>
              <div className="container input-group mb-3 mt-3">
                <span className="input-group-text" id="basic-addon1">
                  Role:
                </span>
                <input
                  type="text"
                  className="form-control"
                  id="studyBox"
                  value={this.props.state.role}
                  onChange={this.props.handleroleChange}
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
                  value={this.props.state.workStart}
                  onChange={this.props.handleWorkStartChange}
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
                  value={this.props.state.workEnd}
                  onChange={this.props.handleWorkEndChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary m-2 mb-3"
                onClick={this.props.addWork}
              >
                Add Job
              </button>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Work;
