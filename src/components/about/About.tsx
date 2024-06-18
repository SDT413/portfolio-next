import React from 'react';

const About = () => {
    return (
        <section className="about" id="about">
        <h2 className="heading">
          About <span>Me</span>
        </h2>
        <div className="about-img">
          <span className="circle-spin"></span>
        </div>

        <div className="about-content">
          <h3>Backend Developer</h3>
          <p>
            I am a student at the University of Prague(PCU). I have 1 year
            experience with react, wordpress and node.js.
          </p>
          <div className="btn-box btns">
            <a href="#" className="btn">
              Read More
            </a>
          </div>
        </div>
      </section>
    );
};

export default About;