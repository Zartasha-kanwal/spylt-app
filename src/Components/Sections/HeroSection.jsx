import React from "react";
import hero_bg_tab from "../Assets/images/hero-bg.png";
import hero_bg_vd from "../Assets/videos/hero-bg.mp4";
import hero_mob from "../Assets/images/hero-img.png";
import Button from "../Button/Button";
import { useGSAP } from "@gsap/react";

import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(SplitText);

const HeroSection = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

  useGSAP(() => {
    const titleSplit = new SplitText(".hero-title", { type: "chars" });

    const tl = gsap.timeline({ delay: 1 });

    tl.to(".hero-content", {
      opacity: 1,
      y: 0,
      ease: "power1.inOut",
    })
      .to(
        ".hero-text-scroll",
        {
          duration: 1,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "circ.out",
        },
        "-=0.5"
      )
      .from(
        titleSplit.chars,
        {
          yPercent: 200,
          stagger: 0.02,
          ease: "power2.out",
        },
        "-=0.5"
      );

    const heroTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-container",
        start: "1% top",
        end: "bottom top",
        scrub: true,
      },
    });

    heroTl.to(".hero-container", {
      rotate: 7,
      scale: 0.9,
      yPercent: 30,
      ease: "power1.inOut",
    });
  });

  return (
    <section className="bg-mainbg relative overflow-hidden">
      <div className="hero-container relative w-full h-[100vh] md:h-[100vh] lg:h-[110vh] overflow-hidden">
        {/* ---------- FIXED BACKGROUND BEHAVIOR ---------- */}
        {isTablet ? (
          <>
            {isMobile && (
              <img
                src={hero_mob}
                alt="hero mobile"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-auto sm:w-[90%] md:w-[70%] object-cover"
              />
            )}
          </>
        ) : (
          <video
            src={hero_bg_vd}
            autoPlay
            muted
            playsInline
            className="
              absolute inset-0 
              w-full h-full 
              object-cover 
              object-center
            "
          />
        )}

        {/* ---------- CONTENT ---------- */}
        <div className="hero-content relative z-10 opacity-0 px-5 md:px-10 max-w-3xl mx-auto pt-[30vh] md:pt-[35vh]">
          <div className="overflow-hidden">
            <h1 className="hero-title">Freaking Delicious</h1>
          </div>

          <div
            style={{
              clipPath: "polygon(50% 0, 50% 0%, 50% 100%, 50% 100%)",
            }}
            className="hero-text-scroll"
          >
            <div className="hero-subtitle">
              <h1>Protien + Caffiene</h1>
            </div>
          </div>

          <h2 className="mt-4">
            Live life to the fullest with SPYLT: Shatter boredom and embrace
            your inner kid with every deliciously smooth chug.
          </h2>

          <Button title="CHUG A SPYLT" className="mt-6" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
