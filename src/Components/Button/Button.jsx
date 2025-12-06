import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function LiquidButton({ title }) {
  const buttonRef = useRef(null);
  const dripsRef = useRef([]);

  useEffect(() => {
    const button = buttonRef.current;
    const drips = dripsRef.current;

    const handleEnter = () => {
      // Reset all drips before each hover
      gsap.set(drips, { cy: 110, opacity: 1, scale: 1 });

      // Animate all 3 drips falling with stagger
      gsap.to(drips, {
        cy: 260,
        opacity: 0,
        scale: 0.7,
        duration: 1,
        ease: "power2.in",
        stagger: 0.2,
      });
    };

    // Attach hover animation to the <rect>
    button.addEventListener("mouseenter", handleEnter);

    // Cleanup
    return () => button.removeEventListener("mouseenter", handleEnter);
  }, []);

  return (
    <div>
      <svg
        viewBox="0 0 400 200"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: 300, cursor: "pointer", filter: "url(#goo)" }}
      >
        {/* Gooey filter */}
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  
                      0 1 0 0 0  
                      0 0 1 0 0  
                      0 0 0 20 -10"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>

        {/* Button shape */}
        <rect
          ref={buttonRef}
          x="50"
          y="40"
          rx="40"
          ry="40"
          width="300"
          height="70"
          fill="#c49a6c"
        />

        {/* Button text */}
        <text
          x="200"
          y="85"
          textAnchor="middle"
          style={{
            fontFamily: "Antonio, sans-serif",
            fontSize: 22,
            fontWeight: 700,
            fill: "#4b2e2b",
            textTransform: "uppercase",
            pointerEvents: "none",
          }}
        >
          {title}
        </text>

        {/* Drip circles */}
        <circle
          ref={(el) => (dripsRef.current[0] = el)}
          cx="200"
          cy="110"
          r="12"
          fill="#c49a6c"
        />
        <circle
          ref={(el) => (dripsRef.current[1] = el)}
          cx="170"
          cy="110"
          r="8"
          fill="#c49a6c"
        />
        <circle
          ref={(el) => (dripsRef.current[2] = el)}
          cx="230"
          cy="110"
          r="10"
          fill="#c49a6c"
        />
      </svg>
    </div>
  );
}
