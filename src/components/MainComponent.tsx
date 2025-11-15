"use client";

import { useRef } from "react";
import AboutMe from "@/components/AboutMe";
import Education from "@/components/Education";
import FeaturedWork from "@/components/FeaturedWork";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroImage from "@/components/HeroImage";
import Hobbies from "@/components/Hobbies";
import Journey from "@/components/Journey";
import useInView from "@/utils/useInView";

const MainComponent = ({ isMobile }: { isMobile: boolean }) => {
  const intersectionRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(intersectionRef);

  const isShrink = !isMobile && !inView;

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      if (section === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };

  return (
    <div className="relative">
      <div ref={intersectionRef} className="absolute top-[50px]" />
      <Header scrollToSection={scrollToSection} isShrink={isShrink} />
      <HeroImage isMobile={isMobile} isShrink={isShrink} />
      <AboutMe />
      <FeaturedWork />
      <Journey />
      <Education />
      <Hobbies />
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
};

export default MainComponent;
