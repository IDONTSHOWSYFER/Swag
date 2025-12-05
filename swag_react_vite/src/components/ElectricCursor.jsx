import { useEffect } from "react";
import gsap from "gsap";

export default function ElectricCursor({
  color = "#ccff33",
  size = 40,
  haloSize = 10,
  intensity = 35,
  speed = 0.18,
  zIndex = 9999999
}) {
  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.style.position = "fixed";
    cursor.style.top = "0";
    cursor.style.left = "0";
    cursor.style.width = size + "px";
    cursor.style.height = size + "px";
    cursor.style.pointerEvents = "none";
    cursor.style.borderRadius = "50%";
    cursor.style.background = color;
    cursor.style.boxShadow = `0 0 25px ${color}, 0 0 50px ${color}88`;
    cursor.style.mixBlendMode = "plus-lighter";
    cursor.style.zIndex = zIndex;
    cursor.style.filter = "blur(1.5px)";
    cursor.style.opacity = 0.9;

    document.body.appendChild(cursor);

    const move = (e) => {
      gsap.to(cursor, {
        x: e.clientX - size / 2,
        y: e.clientY - size / 2,
        duration: speed * 1.6,
        ease: "power3.out"
      });
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
      cursor.remove();
    };
  }, []);

  return null;
}