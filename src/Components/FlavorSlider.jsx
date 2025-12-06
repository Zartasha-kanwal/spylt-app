import React, { useRef } from "react";
import { flavorlists } from "./Constants/index";
import blackBg from "./Assets/images/black-bg.svg";
import blueBg from "./Assets/images/blue-bg.svg";
import redBg from "./Assets/images/red-bg.svg";
import whiteBg from "./Assets/images/white-bg.svg";
import brownBg from "./Assets/images/brown-bg.svg";
import orangeBg from "./Assets/images/orange-bg.svg";
import blackDrink from "./Assets/images/black-drink.webp";
import blueDrink from "./Assets/images/blue-drink.webp";
import redDrink from "./Assets/images/red-drink.webp";
import whiteDrink from "./Assets/images/white-drink.webp";
import brownDrink from "./Assets/images/brown-drink.webp";
import orangeDrink from "./Assets/images/orange-drink.webp";
import blackEL from "./Assets/images/black-elements.webp";
import blueEL from "./Assets/images/blue-elements.webp";
import redEL from "./Assets/images/red-elements.webp";
import whiteEL from "./Assets/images/white-elements.webp";
import brownEL from "./Assets/images/brown-elements.webp";
import orangeEL from "./Assets/images/orange-elements.webp";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";

const FlavorSlider = () => {
  const sliderRef = useRef();
  const isTablet = useMediaQuery({
    query: "(max-width: 1024px)",
  });
  const flavorImages = {
    red: redBg,
    blue: blueBg,
    black: blackBg,
    white: whiteBg,
    brown: brownBg,
    orange: orangeBg,
  };

  const flavorDrinks = {
    red: redDrink,
    blue: blueDrink,
    black: blackDrink,
    white: whiteDrink,
    brown: brownDrink,
    orange: orangeDrink,
  };
  const flavorElements = {
    red: redEL,
    blue: blueEL,
    black: blackEL,
    white: whiteEL,
    brown: brownEL,
    orange: orangeEL,
  };

  useGSAP(() => {
    const scrollAmount = sliderRef.current.scrollWidth - window.innerWidth;

    if (!isTablet) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".flavor-section",
          start: "2% top",
          end: `+=${scrollAmount + 800}px`,
          scrub: true,
          pin: true,
        },
      });
      tl.to(".flavor-section", {
        x: `-${scrollAmount + 800}px`,
        ease: "power1.inOut",
      });
    }
  });
  return (
    <div ref={sliderRef} className="slider-wrapper">
      <div className="flavors">
        {flavorlists.map((flavor) => (
          <div
            key={flavor.name}
            className={`relative z-30 lg:w-[50vw] w-96 md:w-[90vw] lg:h-[70vh] h-80 md:h-[50vh] flex-none ${flavor.rotation}`}
          >
            <img
              src={flavorImages[flavor.color]}
              className="absolute bottom-0"
            />
            <img src={flavorDrinks[flavor.color]} className="drinks" />
            <img src={flavorElements[flavor.color]} className="elements" />
            <h1>{flavor.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlavorSlider;
