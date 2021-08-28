import React, { Component } from "react";

class Music extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div
          style={{
            backgroundColor: "#F0FFFF",
            height: "104vh",
            color: "black",
          }}
        >
          <div className="col-6 offset-3">
            <h1 style={{ textDecoration: "underline" }} className="text-center">
              Experience
            </h1>
            <div className="offset-1">
              <ul>
                <h5>DMAT Graduate of 2017</h5>
                <ul>
                  <li>Proficient in mixing of audio</li>
                  <li>Knowledge of multiple instrument miking techniques</li>
                </ul>
                <br />
                <h5>Sound Editor of Some Scuffs Podcast Project</h5>
                <ul>
                  <li>
                    Mixed and provided music for 15 or more podcast episodes
                  </li>
                </ul>
                <br />
                <h5>Freelancer for Digipen Students</h5>
                <ul>
                  <li>Provided music tracks for student projects</li>
                </ul>
              </ul>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Music;
