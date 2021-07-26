import React, { Component } from "react";

class NavBar extends Component {
  state = {};
  render() {
    const { showComponent } = this.props;

    return (
      <nav className="navbar navbar-light bg-light">
        <button
          onClick={() => this.props.showComponent("showComputer")}
          className="btn btn-primary btn-lg"
          style={{ marginLeft: "10%", marginRight: "10%" }}
        >
          Computer-related
        </button>
        <a
          style={{}}
          className="navbar-brand"
          onClick={() => this.props.showComponent("showIntroduction")}
          href="#"
        >
          Lee Zhe Ren
        </a>
        <button
          onClick={() => this.props.showComponent("showMusic")}
          className="btn btn-secondary btn-lg"
          style={{
            marginLeft: "10%",
            marginRight: "10%",
            backgroundColor: "#2E8B57",
          }}
        >
          Music-related
        </button>
      </nav>
    );
  }
}

export default NavBar;
