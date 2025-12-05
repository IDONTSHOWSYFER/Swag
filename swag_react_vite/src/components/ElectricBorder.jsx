// ElectricBorder.jsx

import { useRef, useEffect } from "react";

export default function ElectricBorder({
  children,
  color = "#f20cb5",
  thickness = 2,
  speed = 1,
  chaos = 0.4,
  style = {},
}) {
  const borderRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const border = borderRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let w, h;
    let points = [];
    let tick = 0;

    const resize = () => {
      const rect = border.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = w;
      canvas.height = h;

      points = [];
      for (let i = 0; i < 60; i++) {
        points.push({
          x: (i / 60) * w,
          y: Math.random() * h,
        });
      }
    };

    const render = () => {
      ctx.clearRect(0, 0, w, h);
      ctx.strokeStyle = color;
      ctx.lineWidth = thickness;
      ctx.shadowBlur = 15;
      ctx.shadowColor = color;

      ctx.beginPath();
      points.forEach((p, i) => {
        p.y =
          Math.sin((i + tick) * 0.2 * chaos) * 8 +
          (Math.random() - 0.5) * chaos * 8 +
          h / 2;
        ctx.lineTo(p.x, p.y);
      });
      ctx.stroke();

      tick += speed;
      requestAnimationFrame(render);
    };

    resize();
    render();

    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, [color, speed, thickness, chaos]);

  return (
    <div
      ref={borderRef}
      style={{ position: "relative", ...style }}
      className="electric-border"
    >
      {/* Canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 5,
          pointerEvents: "none",
        }}
      />
      {/* Contenu */}
      <div style={{ position: "relative", zIndex: 10 }}>{children}</div>
    </div>
  );
}