import React from 'react'

type Props = {}

function HomeSection({}: Props) {
  return (
    <section className="home" id="home">
    <div className="home-content">
      <h1>
        Hi, I am <span>Kyrylo Marchenko</span>
      </h1>
      <div className="text-animate">
        <h3>Backend Developer</h3>
      </div>
      <p>
        I am a student at the University of Prague(PCU). I have 1 year
        experience with react, wordpress and node.js.
      </p>
      <div className="btn-box">
        <a href="#" className="btn">
          Hire Me
        </a>
        <a href="#" className="btn">
          Let's Talk
        </a>
      </div>
    </div>

    <div className="home-sci">
      <a href="#">
        <i className="bx bxl-facebook"></i>
      </a>
      <a href="#">
        <i className="bx bxl-twitter"></i>
      </a>
      <a href="#">
        <i className="bx bxl-linkedin"></i>
      </a>
    </div>

    <div className="home-imgHover"></div>
    <div className="home-img"></div>
  </section>

  )
}

export default HomeSection