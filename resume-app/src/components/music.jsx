import React, { Component } from "react";

class Music extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div
          style={{
            backgroundColor: "#F0FFFF",
            height: "93vh",
            color: "black",
          }}
        >
          <br />
          <div className="col-6 offset-3">
            <h1 style={{ textDecoration: "underline" }} className="text-center">
              Experience
            </h1>
            <br />
            <div className="text-center">
              <h5 style={{ fontWeight: "bold" }}>DMAT Graduate of 2017</h5>
              <ul>
                <li>Proficient in mixing of audio</li>
                <li>Knowledge of multiple instrument miking techniques</li>
              </ul>
              <br />
              <h5 style={{ fontWeight: "bold" }}>
                Sound Editor of Some Scuffs Podcast Project
              </h5>
              <ul>
                <li>
                  Mixed and provided music for 15 or more podcast episodes
                </li>
              </ul>
              <br />
              <h5 style={{ fontWeight: "bold" }}>
                Freelancer for Digipen Students
              </h5>
              <ul>
                <li>Provided music tracks for student projects</li>
              </ul>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Music;
