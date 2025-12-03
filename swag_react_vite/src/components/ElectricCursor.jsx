import { useEffect } from "react";
import gsap from "gsap";

export default function ElectricCursor({
  color = "#ccff33",
  size = 40,
  haloSize = 90,
  intensity = 35,
  speed = 0.18,
  zIndex = 9999999
}) {
  useEffect(() => {
    // Main circle
    const cursor = document.createElement("div");
    cursor.style.position = "fixed";
    cursor.style.top = "0";
    cursor.style.left = "0";
    cursor.style.width = size + "px";
    cursor.style.height = size + "px";
    cursor.style.pointerEvents = "none";
    cursor.style.borderRadius = "50%";
    cursor.style.background = color;
    cursor.style.mixBlendMode = "plus-lighter";
    cursor.style.zIndex = zIndex;
    cursor.style.filter = `blur(3px)`;
    cursor.style.opacity = 0.9;

    document.body.appendChild(cursor);

    // Electric halo with turbulence
    const halo = document.createElement("div");
    halo.style.position = "fixed";
    halo.style.top = "0";
    halo.style.left = "0";
    halo.style.width = haloSize + "px";
    halo.style.height = haloSize + "px";
    halo.style.pointerEvents = "none";
    halo.style.borderRadius = "50%";
    halo.style.zIndex = zIndex - 1;
    halo.style.mixBlendMode = "screen";
    halo.style.background = color + "55";
    halo.style.filter = `url(#electric-noise) blur(12px)`;
    halo.style.opacity = 0.55;

    document.body.appendChild(halo);

    // Insert SVG filter ONCE
    if (!document.getElementById("electric-noise-filter")) {
      const svg = document.createElement("div");
      svg.id = "electric-noise-filter";
      svg.innerHTML = `
        <svg width="0" height="0">
          <filter id="electric-noise">
            <feTurbulence 
              type="fractalNoise" 
              baseFrequency="0.9" 
              numOctaves="3" 
              seed="2"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="${intensity}"
            />
          </filter>
        </svg>
      `;
      document.body.appendChild(svg);
    }

    const move = (e) => {
      gsap.to(cursor, {
        x: e.clientX - size / 2,
        y: e.clientY - size / 2,
        duration: speed,
        ease: "power3.out"
      });

      gsap.to(halo, {
        x: e.clientX - haloSize / 2,
        y: e.clientY - haloSize / 2,
        duration: speed * 1.4,
        ease: "power2.out"
      });
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
      cursor.remove();
      halo.remove();
    };
  }, []);

  return null;
}