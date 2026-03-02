"use client";

import { useEffect, useRef } from "react";

// Pride palette as RGB tuples
const COLORS: [number, number, number][] = [
  [228, 3, 3],     // red
  [255, 140, 0],   // orange
  [255, 237, 0],   // yellow
  [0, 128, 38],    // green
  [0, 77, 255],    // blue
  [117, 7, 135],   // purple
  [91, 206, 250],  // trans-blue
  [245, 169, 184], // trans-pink
];

export function MathGradient() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    // Check reduced motion
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;

    // Render at lower resolution for performance
    const scale = 0.25;
    let w = 0;
    let h = 0;

    function resize() {
      if (!canvas) return;
      w = Math.ceil(canvas.offsetWidth * scale);
      h = Math.ceil(canvas.offsetHeight * scale);
      canvas.width = w;
      canvas.height = h;
    }

    resize();
    window.addEventListener("resize", resize);

    function draw(time: number) {
      if (!ctx || w === 0 || h === 0) {
        animRef.current = requestAnimationFrame(draw);
        return;
      }

      const t = time * 0.001; // visible flowing movement
      const imageData = ctx.createImageData(w, h);
      const data = imageData.data;

      for (let y = 0; y < h; y++) {
        const ny = y / h;
        for (let x = 0; x < w; x++) {
          const nx = x / w;
          const i = (y * w + x) * 4;

          // Layered sine waves — each color gets its own frequency
          let r = 0, g = 0, b = 0, totalWeight = 0;

          for (let c = 0; c < COLORS.length; c++) {
            const phase = (c / COLORS.length) * Math.PI * 2;
            const freqX = 1.5 + c * 0.3;
            const freqY = 1.2 + c * 0.25;

            // Interference pattern from two perpendicular waves
            const wave =
              Math.sin(nx * freqX * Math.PI * 2 + t * (0.7 + c * 0.1) + phase) *
              Math.cos(ny * freqY * Math.PI * 2 + t * (0.5 + c * 0.13) + phase * 0.7);

            // Remap from [-1,1] to [0,1] and sharpen peaks
            const weight = Math.pow((wave + 1) * 0.5, 2.5);

            r += COLORS[c][0] * weight;
            g += COLORS[c][1] * weight;
            b += COLORS[c][2] * weight;
            totalWeight += weight;
          }

          if (totalWeight > 0) {
            r /= totalWeight;
            g /= totalWeight;
            b /= totalWeight;
          }

          data[i] = r;
          data[i + 1] = g;
          data[i + 2] = b;
          data[i + 3] = 255;
        }
      }

      ctx.putImageData(imageData, 0, 0);
      animRef.current = requestAnimationFrame(draw);
    }

    animRef.current = requestAnimationFrame(draw);

    // Pause on reduced-motion change
    function onMotionChange(e: MediaQueryListEvent) {
      if (e.matches) {
        cancelAnimationFrame(animRef.current);
      } else {
        animRef.current = requestAnimationFrame(draw);
      }
    }
    mq.addEventListener("change", onMotionChange);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
      mq.removeEventListener("change", onMotionChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full opacity-25"
      style={{ imageRendering: "auto" }}
    />
  );
}
