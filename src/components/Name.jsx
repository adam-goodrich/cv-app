import React, { Component } from "react";

class Name extends Component {
  render() {
    if (this.props.state.editNameMode) {
      return (
        <div className="card m-3">
          <h3 className=" card-header" id="headingOne">
            Personal Information
          </h3>
          <div className="card-body" aria-labelledby="headingOne">
            <div className="container">
              <div className="container input-group mb-3 mt-3">
                <span className="input-group-text" id="basic-addon1">
                  Name:
                </span>
                <input
                  type="text"
                  className="form-control"
                  id="nameBox"
                  value={this.props.state.name}
                  onChange={this.props.handleNameChange}
                />
              </div>
              <div className="container input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  Email:
                </span>
                <input
                  type="email"
                  className="form-control"
                  id="emailBox"
                  value={this.props.state.email}
                  onChange={this.props.handleEmailChange}
                />
              </div>
              <div className="container input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  Phone:
                </span>
                <input
                  type="text"
                  className="form-control"
                  id="phoneBox"
                  value={this.props.state.phone}
                  onChange={this.props.handlePhoneChange}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary m-2 mb-3"
                onClick={this.props.addName}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="card m-3">
          <h3 className=" card-header" id="headingOne">
            Personal Information
          </h3>
          <div className="card-body" aria-labelledby="headingOne">
            <div className="container ">
              <div className="card-text mb-3 mt-3">
                <div className="m-3">{this.props.state.name}</div>
                <div className="m-3">{this.props.state.email}</div>
                <div className="m-3">{this.props.state.phone}</div>
                <div className="m-3">{this.props.state.address1}</div>
                <div className="m-3">{this.props.state.address2}</div>
              </div>
              <button
                type="submit"
                className="btn btn-warning m-2 mb-3"
                onClick={this.props.editName}
              >
                Edit Info
              </button>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Name;
