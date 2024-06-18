import React from 'react'
import Link from "next/link";

type Props = {}

function HomeSection({}: Props) {
  return (
    <section className="home" id="home">
    <div className="home-content">
      <h1>
        Hi, I am <span>Kyrylo Marchenko</span>
      </h1>
      <div className="text-animate">
        <h3>Fullstack Developer</h3>
      </div>
      <p>
        I am a student at the University of Prague(PCU). I have 1 year
        experience with react, wordpress and node.js.
      </p>
      <div className="btn-box">
        <Link href="#" className="btn">
          Hire Me
        </Link>
        <Link href="#" className="btn">
          Contact Me
        </Link>
      </div>
    </div>

    <div className="home-sci">
      <Link href="#">
        <i className="bx bxl-facebook"></i>
      </Link>
      <Link href="#">
        <i className="bx bxl-twitter"></i>
      </Link>
      <Link href="#">
        <i className="bx bxl-linkedin"></i>
      </Link>
    </div>

    <div className="home-imgHover"></div>
    <div className="home-img"></div>
  </section>

  )
}

export default HomeSection