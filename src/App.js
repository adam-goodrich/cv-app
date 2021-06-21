import React, { Component } from "react";
import AboutMe from "./components/AboutMe";
import CvLayout from "./components/Cv";
import Education from "./components/Education";
import Name from "./components/Name";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";

class App extends Component {
  constructor(props) {
    super(props);
    this.resetForm = this.resetForm.bind(this);
    this.addName = this.addName.bind(this);
    this.editName = this.editName.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.aboutMe = this.aboutMe.bind(this);
    this.editAbout = this.editAbout.bind(this);
    this.handleAboutChange = this.handleAboutChange.bind(this);
    this.addSkill = this.addSkill.bind(this);
    this.deleteSkill = this.deleteSkill.bind(this);
    this.handleSchoolChange = this.handleSchoolChange.bind(this);
    this.handleSubjectChange = this.handleSubjectChange.bind(this);
    this.handleSchoolStartChange = this.handleSchoolStartChange.bind(this);
    this.handleSchoolEndChange = this.handleSchoolEndChange.bind(this);
    this.addSchool = this.addSchool.bind(this);
    this.editSchool = this.editSchool.bind(this);
    this.deleteSchool = this.deleteSchool.bind(this);
    this.updateSchool = this.updateSchool.bind(this);
    this.handleWorkChange = this.handleWorkChange.bind(this);
    this.handleroleChange = this.handleroleChange.bind(this);
    this.handleWorkStartChange = this.handleWorkStartChange.bind(this);
    this.handleWorkEndChange = this.handleWorkEndChange.bind(this);
    this.addWork = this.addWork.bind(this);
    this.editWork = this.editWork.bind(this);
    this.deleteWork = this.deleteWork.bind(this);
    this.updateWork = this.updateWork.bind(this);
    this.printDiv = this.printDiv.bind(this);

    this.state = {
      name: "",
      email: "",
      phone: "",
      editNameMode: true,
      about: "",
      editAboutMode: true,
      skills: [],
      school: "",
      subject: "",
      schoolStart: "",
      schoolEnd: "",
      education: [],
      editEducationMode: false,
      work: "",
      role: "",
      workStart: "",
      workEnd: "",
      jobs: [],
      editWorkMode: false,
    };
  }

  resetForm() {
    this.setState({
      name: "",
      email: "",
      phone: "",
      editNameMode: true,
      about: "",
      editAboutMode: true,
      skills: [],
      school: "",
      subject: "",
      schoolStart: "",
      schoolEnd: "",
      education: [],
      editEducationMode: false,
      work: "",
      role: "",
      workStart: "",
      workEnd: "",
      jobs: [],
      editWorkMode: false,
    });
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  handlePhoneChange(event) {
    this.setState({ phone: event.target.value });
  }

  addName() {
    const nameBox = document.getElementById("nameBox");
    let nameValue = nameBox.value;
    this.setState({ name: nameValue });

    const emailBox = document.getElementById("emailBox");
    let emailValue = emailBox.value;
    this.setState({ email: emailValue });

    const phoneBox = document.getElementById("phoneBox");
    let phoneValue = phoneBox.value;
    this.setState({ phone: phoneValue });

    this.setState({
      editNameMode: false,
    });
  }

  editName() {
    this.setState({ editNameMode: true });
  }

  handleAboutChange(event) {
    this.setState({ about: event.target.value });
  }

  aboutMe() {
    const aboutBox = document.getElementById("aboutBox");
    let aboutValue = aboutBox.value;
    this.setState({ about: aboutValue, editAboutMode: false });
    aboutBox.value = "";
  }

  editAbout() {
    this.setState({ editAboutMode: true });
  }

  addSkill(e) {
    e.preventDefault();
    const skillBox = document.getElementById("skillBox");
    let skillValue = skillBox.value;
    let skilllist = this.state.skills;
    skilllist.push(skillValue);
    this.setState({ skills: skilllist });
    skillBox.value = "";
  }

  deleteSkill(index) {
    let skilllist = this.state.skills;
    skilllist.splice(index, 1);
    this.setState({ skills: skilllist });
  }

  handleSchoolChange(event) {
    this.setState({ school: event.target.value });
  }

  handleSubjectChange(event) {
    this.setState({ subject: event.target.value });
  }

  handleSchoolStartChange(event) {
    this.setState({ schoolStart: event.target.value });
  }

  handleSchoolEndChange(event) {
    this.setState({ schoolEnd: event.target.value });
  }

  addSchool(e) {
    e.preventDefault();

    const schoolObject = {
      school: this.state.school,
      subject: this.state.subject,
      schoolStart: this.state.schoolStart,
      schoolEnd: this.state.schoolEnd,
    };
    this.setState({
      education: this.state.education.concat(schoolObject),
      school: "",
      subject: "",
      schoolStart: "",
      schoolEnd: "",
      editEducationMode: false,
    });
  }

  editSchool(index) {
    this.setState({
      editEducationMode: true,
      school: this.state.education[index].school,
      subject: this.state.education[index].subject,
      schoolStart: this.state.education[index].schoolStart,
      schoolEnd: this.state.education[index].schoolEnd,
      currentSchoolIndex: index,
    });
  }

  deleteSchool(index) {
    const clonedEducationList = [...this.state.education];
    clonedEducationList.splice(index, 1);

    this.setState({
      education: clonedEducationList,
      editEducationMode: false,
    });
  }

  updateSchool() {
    const index = this.state.currentSchoolIndex;

    const newSchoolObject = {
      school: this.state.school,
      subject: this.state.subject,
      schoolStart: this.state.schoolStart,
      schoolEnd: this.state.schoolEnd,
    };

    const clonedEducationList = [...this.state.education];
    clonedEducationList.splice(index, 1, newSchoolObject);

    this.setState({
      school: "",
      subject: "",
      schoolStart: "",
      schoolEnd: "",
      education: clonedEducationList,
      editEducationMode: false,
    });
  }

  handleWorkChange(event) {
    this.setState({ work: event.target.value });
  }

  handleroleChange(event) {
    this.setState({ role: event.target.value });
  }

  handleWorkStartChange(event) {
    this.setState({ workStart: event.target.value });
  }

  handleWorkEndChange(event) {
    this.setState({ workEnd: event.target.value });
  }

  addWork(e) {
    e.preventDefault();

    const WorkObject = {
      work: this.state.work,
      role: this.state.role,
      workStart: this.state.workStart,
      workEnd: this.state.workEnd,
    };
    this.setState({
      jobs: this.state.jobs.concat(WorkObject),
      work: "",
      role: "",
      workStart: "",
      workEnd: "",
      editWorkMode: false,
    });
  }

  editWork(index) {
    this.setState({
      editWorkMode: true,
      work: this.state.jobs[index].work,
      role: this.state.jobs[index].role,
      workStart: this.state.jobs[index].workStart,
      workEnd: this.state.jobs[index].workEnd,
      currentWorkIndex: index,
    });
  }

  deleteWork(index) {
    const clonedJobsList = [...this.state.jobs];
    clonedJobsList.splice(index, 1);

    this.setState({
      jobs: clonedJobsList,
      editWorkMode: false,
    });
  }

  updateWork() {
    const index = this.state.currentWorkIndex;

    const newWorkObject = {
      work: this.state.work,
      role: this.state.role,
      workStart: this.state.workStart,
      workEnd: this.state.workEnd,
    };

    const clonedJobsList = [...this.state.jobs];
    clonedJobsList.splice(index, 1, newWorkObject);

    this.setState({
      work: "",
      role: "",
      workStart: "",
      workEnd: "",
      jobs: clonedJobsList,
      editWorkMode: false,
    });
  }

  printDiv(divName) {
    var mywindow = window.open("", "PRINT", "height=400,width=600");

    mywindow.document.write(
      "<html><head><title>" + document.title + "</title>"
    );
    mywindow.document.write(`</head>
    <meta charset="utf-8" />
    <link rel="icon" href="" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta name="description" content="Online CV Creator appp" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="/src/App.css" />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css"
      rel="stylesheet"
    />`);
    mywindow.document.write(document.getElementById(divName).innerHTML);
    mywindow.document.write("</body></html>");

    mywindow.document.close(); // necessary for IE >= 10
    mywindow.focus(); // necessary for IE >= 10*/

    setTimeout(function () {
      mywindow.print();
    }, 1000);
    setTimeout(function () {
      mywindow.close();
    }, 2000);
    return true;
  }

  render() {
    return (
      <div className="m-3" id="top">
        <Navbar
          resetForm={this.resetForm}
          state={this.state}
          printDiv={this.printDiv}
        />
        <div className="row">
          <div className="col-12 col-xxl-5">
            <Name
              handleNameChange={this.handleNameChange}
              handleEmailChange={this.handleEmailChange}
              handlePhoneChange={this.handlePhoneChange}
              addName={this.addName}
              editName={this.editName}
              state={this.state}
            />
            <AboutMe
              handleAboutChange={this.handleAboutChange}
              aboutMe={this.aboutMe}
              editAbout={this.editAbout}
              state={this.state}
            />
            <Skills
              addSkill={this.addSkill}
              deleteSkill={this.deleteSkill}
              state={this.state}
            />
            <Education
              handleSchoolChange={this.handleSchoolChange}
              handleSubjectChange={this.handleSubjectChange}
              handleSchoolStartChange={this.handleSchoolStartChange}
              handleSchoolEndChange={this.handleSchoolEndChange}
              addSchool={this.addSchool}
              editSchool={this.editSchool}
              deleteSchool={this.deleteSchool}
              updateSchool={this.updateSchool}
              state={this.state}
            />
            <Work
              handleWorkChange={this.handleWorkChange}
              handleroleChange={this.handleroleChange}
              handleWorkStartChange={this.handleWorkStartChange}
              handleWorkEndChange={this.handleWorkEndChange}
              addWork={this.addWork}
              editWork={this.editWork}
              deleteWork={this.deleteWork}
              updateWork={this.updateWork}
              state={this.state}
            />
          </div>
          <div className="col-12 col-xxl-7">
            <CvLayout state={this.state} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
