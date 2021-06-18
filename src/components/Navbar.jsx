import React, { Component } from "react";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark m-2 navbar-expand-xl">
        <div className="container-fluid">
          <a className="navbar-brand" href="#top">
            CV Creator
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ">
              <div className="d-flex justify-content-center">
                <li className="nav-item ">
                  <button
                    type="button btn-block"
                    className="btn btn-success m-2"
                    onClick={() => this.props.printDiv("print-area")}
                  >
                    Save
                  </button>
                </li>

                <li className="nav-item">
                  <button
                    type="button"
                    className="btn btn-danger m-2"
                    onClick={this.props.resetForm}
                  >
                    Reset
                  </button>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
