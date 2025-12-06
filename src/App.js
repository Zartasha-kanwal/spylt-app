import React from "react";
import Navbar from "./Components/Sections/Navbar";
import HeroSection from "./Components/Sections/HeroSection";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";
import gsap from "gsap";
import MessageSection from "./Components/Sections/MessageSection";
import FlavourSection from "./Components/Sections/FlavourSection";
import { useGSAP } from "@gsap/react";
import { NutritionSection } from "./Components/Sections/NutritionSection";
import BenefitSection from "./Components/Sections/BenefitSection";
import FooterSection from "./Components/Sections/FooterSection";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
const App = () => {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 3,
      effects: true,
    });
  });

  return (
    <main>
      <Navbar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <HeroSection />
          <MessageSection />
          <FlavourSection />
          <NutritionSection />
          <BenefitSection/>
          <FooterSection/>
        </div>
      </div>
    </main>
  );
};

export default App;
