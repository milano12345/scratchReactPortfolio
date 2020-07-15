import React, { Component } from "react";
import Card from "./ProjectsCard";
import Footer from "./Footer";
import NavBar from "./NavigationBar";
import Pagination from "./Pagination";
const text = require("./Projects.json");
const arr = Array.from(text);

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: "0" };
  }

  handleChange(event) {
    console.log(this.state);
    this.setState({ activeTab: event.target.id });
    console.log(arr);
  }

  toggleCategories() {
    if (this.state.activeTab === "0") {
      return (
        <div className="title">
          <h1>"Welcome To My HTML/CSS Projects"</h1>
          <div className="demo-grid-1">
            {text.map((data, i) => {
              return <Card key={i} data={data} />;
            })}
          </div>
        </div>
      );
    } else if (this.state.activeTab === "1") {
      return (
        <div className="title">
          <h1>"Welcome To My React Projects"</h1>
          <div className="demo-grid-1">
            {text.map((data, i) => {
              return <Card key={i} data={data} />;
            })}
          </div>
        </div>
      );
    } else if (this.state.activeTab === "2") {
      return (
        <div className="title">
          <h1>"Welcome To My Node Projects"</h1>
          <div className="demo-grid-1">
            {text.map((data, i) => {
              return <Card key={i} data={data} />;
            })}
          </div>
        </div>
      );
    }
  }
  render() {
    return (
      <div className="projects-grid">
        <NavBar />
        <div className="category-tabs">
          <nav onClick={(e) => this.handleChange(e)}>
            <button id="0">HTML/CSS</button>
            <button id="1">React</button>
            <button id="2">Node</button>
          </nav>
          <section className="projects-grid">{this.toggleCategories()}</section>
        </div>
        <Pagination />
        <Footer />
      </div>
    );
  }
}

export default Projects;
