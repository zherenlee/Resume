import React, { Component } from "react";
import NavBar from "./components/navbar";
import Computer from "./components/computer";
import Music from "./components/music";
import Introduction from "./components/introduction";
import "./App.css";

class App extends Component {
  state = {
    showIntroduction: true,
    showComputer: false,
    showMusic: false,
  };

  showComponent = (name) => {
    console.log(name);
    switch (name) {
      case "showIntroduction":
        this.setState({ showIntroduction: true });
        this.setState({ showComputer: false });
        this.setState({ showMusic: false });
        break;
      case "showComputer":
        this.setState({ showIntroduction: false });
        this.setState({ showComputer: true });
        this.setState({ showMusic: false });
        break;
      case "showMusic":
        this.setState({ showIntroduction: false });
        this.setState({ showComputer: false });
        this.setState({ showMusic: true });
        break;
      default:
        break;
    }
  };

  render() {
    const { showIntroduction, showComputer, showMusic } = this.state;
    return (
      <React.Fragment>
        <NavBar showComponent={this.showComponent} />
        <div style={{ minHeight: "100%" }}>
          {showIntroduction && <Introduction />}
          {showComputer && <Computer />}
          {showMusic && <Music />}
        </div>
      </React.Fragment>
    );
  }
}

export default App;
