"use client";
import React from "react";

export default function Home() {
  const [isNavBarExpanded, setIsNavBarExpanded] =
    React.useState<boolean>(false);
  return (
    <>
      <header className="header">
        <a href="#" className="logo">
          Kyrylo.
        </a>
        <div className="bx bx-menu" id="menu-icon"></div>

        <div className="burger-navbar">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
        <nav className="navbar">
          <a href="#home" className="active">
            Home
          </a>
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

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
    </>
  );
}
