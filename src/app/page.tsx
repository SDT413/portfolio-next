"use client";
import About from "@/components/about/About";
import Header from "@/components/header/Header";
import HomeSection from "@/components/home/HomeSection";
import React from "react";

export default function Home() {
  return (
    <>
      <Header />

      <HomeSection />
      
      <About />
    </>
  );
}
