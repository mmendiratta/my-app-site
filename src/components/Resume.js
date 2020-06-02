import React, { Component } from 'react';

class Resume extends Component {
  render() {
    return (
      <section id="resume">

      <div className="row education">
        <div className="three columns header-col">
            <h1><span>Education</span></h1>
        </div>

        <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                education infor
              </div>
            </div>
        </div>
      </div>


      <div className="row work">

        <div className="three columns header-col">
            <h1><span>Work</span></h1>
        </div>

        <div className="nine columns main-col">
          work experience
        </div>
    </div>



      <div className="row skill">

        <div className="three columns header-col">
            <h1><span>Skills</span></h1>
        </div>

        <div className="nine columns main-col">

            <p>skillmessage info
            </p>

        <div className="bars">
          <ul className="skills">
            skills 
          </ul>
        </div>
      </div>
      </div>
    </section>
    );
  }
}

export default Resume;