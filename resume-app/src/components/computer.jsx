import React, { Component } from "react";

class Computer extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div
          style={{
            backgroundColor: "#9370DB",
            height: "52vh",
            color: "white",
          }}
        >
          <div className="col-6 offset-3">
            <br />
            <h1 style={{ textDecoration: "underline" }} className="text-center">
              Experience
            </h1>
            <div className="offset-1">
              <ul>
                <h5>
                  HTML, CSS, and Javascript Coursera Course [November 2020]
                </h5>
                <ul>
                  <li>
                    Coded websites using SublimeText and Github as platform
                  </li>
                  <ul>
                    <li>
                      Used Twitter Bootstrap framework to code pages for
                      exercises
                    </li>
                    <li>
                      Learnt to code websites for restaurants, including front
                      page and menu pages with interactive dropdown menus
                    </li>
                  </ul>
                </ul>
                <br />
                <h5>Python Projects [August 2019 - March 2020]</h5>
                <ul>
                  <li>
                    Learnt Python in Intro to Computer Thinking, achieved ‘A’
                    grade
                  </li>
                  <li>
                    Coded interactive menu of NTU food items using Pygame
                    Library for students to browse
                  </li>
                  <li>
                    Performed data analysis using "Pandas" library and others to
                    sort and find correlations in earthquake data to determine
                    relationship between other variables and damage grade of
                    buildings
                  </li>
                </ul>
                <br />
                <h5>Algorithm Projects [August 2020 - December 2020]</h5>
                <ul>
                  <li>
                    Learnt how to find shortest path(s) in an unweighted graph
                  </li>
                  <ul>
                    <li>Used Breadth-First-Search to find paths</li>
                  </ul>
                </ul>
              </ul>
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#FAF0E6",
            height: "41vh",
            color: "black",
          }}
        >
          <div className="col-6 offset-3">
            <br />
            <h1 style={{ textDecoration: "underline" }} className="text-center">
              Skills
            </h1>
            <div className="text-center">
              <span>Python,C and Java</span>
              <br />
              <span>Verilog and Assembly Language</span>
              <br />
              <span>HTML,CSS and Javascript</span>
              <br />
              <span>Twitter Bootstrap and React Frameworks</span>
              <br />
              <span>Some knowledge of C++</span>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Computer;
