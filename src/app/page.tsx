"use client";
import About from "@/components/about/About";
import Header from "@/components/header/Header";
import HomeSection from "@/components/home-section/HomeSection";
import React from "react";
import Experience from "@/components/experience/Experience";

export default function Home() {
  return (
    <>
      <Header />

      <HomeSection />

      <About />

      <Experience />
    </>
  );
}
