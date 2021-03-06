import React, { Component } from "react";

class Introduction extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div
          style={{
            backgroundColor: "#6495ED",
            // height: "73.3vh",
          }}
          className="col-12"
        >
          <div
            style={{ color: "white", height: "73.3vh" }}
            className="row col-6 offset-3 text-center"
          >
            <div></div>
            <h1 style={{ fontSize: "10.5vh" }}>
              Hello, I am <br />
              Zhe&nbsp;Ren
            </h1>
            <h3>
              I am a student at the Nanyang Technological University in
              Singapore, studying towards a Bachelor's in Computer Engineering.
              <br />I also make music.
            </h3>
          </div>
        </div>

        <div style={{ backgroundColor: "#CD5C5C" }} className="col-12">
          <br />
          <div
            style={{ color: "white" }}
            className="row col-6 offset-3 text-center"
          >
            <h5>
              This website is similar to a resume. <br /> Click on the top-left
              button or top-right button to learn more about my skillsets.
            </h5>
            <br />
          </div>
          <br />
        </div>

        <div style={{ backgroundColor: "#696969" }} className="col-12">
          <br />
          <div
            style={{ color: "white" }}
            className="row col-6 offset-3 text-center"
          >
            <h5>
              I coded everything here using the React javascript framework and
              the Twitter Bootstrap css framework.
            </h5>
            <br />
          </div>
          <br />
        </div>
      </React.Fragment>
    );
  }
}

export default Introduction;
