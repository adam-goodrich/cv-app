import React, { Component } from "react";

class AboutMe extends Component {
  render() {
    if (this.props.state.editAboutMode) {
      return (
        <form onSubmit={this.props.aboutMe}>
          <div className="card m-3">
            <h3 className="card-header" id="headingTwo">
              About Me
            </h3>
            <div
              id="collapseTwo"
              className="card-body"
              aria-labelledby="headingTwo"
            >
              <div className="container">
                <div className="container input-group mb-3">
                  <textarea
                    type="text"
                    className="form-control m-1"
                    id="aboutBox"
                    value={this.props.state.about}
                    onChange={this.props.handleAboutChange}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary m-2 mb-3">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      );
    } else {
      return (
        <div className="card m-3">
          <h3 className="card-header" id="headingTwo">
            About Me
          </h3>
          <div className="card-body">
            <div className="container">
              <div className="card-text mb-3 mt-3 ms-4">
                {this.props.state.about}
              </div>
              <button
                type="submit"
                className="btn btn-warning mt-4 mb-3"
                onClick={this.props.editAbout}
              >
                Edit About Me
              </button>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default AboutMe;
