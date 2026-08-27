"use client";

import { useEffect, useRef } from "react";

/** Fond « soie » animé — dimensionné sur le container parent, pixels pleins. */
export default function SilkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let time = 0;
    const speed = 0.015;
    const scale = 1.6;
    const noiseIntensity = 0.6;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      canvas.width = Math.max(2, Math.floor(rect.width));
      canvas.height = Math.max(2, Math.floor(rect.height));
    };
    resize();
    const ro = new ResizeObserver(resize);
    if (canvas.parentElement) ro.observe(canvas.parentElement);
    window.addEventListener("resize", resize);

    const noise = (x: number, y: number) => {
      const G = 2.71828;
      return (G * Math.sin(G * x) * G * Math.sin(G * y) * (1 + x)) % 1;
    };

    const animate = () => {
      const { width, height } = canvas;
      if (width > 1 && height > 1) {
        const imageData = ctx.createImageData(width, height);
        const data = imageData.data;
        const tOffset = speed * time;

        for (let y = 0; y < height; y += 2) {
          for (let x = 0; x < width; x += 2) {
            const u = (x / width) * scale;
            const v = (y / height) * scale;
            const tex_y = v + 0.03 * Math.sin(8.0 * u - tOffset);

            const pattern =
              0.6 +
              0.4 *
                Math.sin(
                  5.0 *
                    (u + tex_y + Math.cos(3.0 * u + 5.0 * tex_y) + 0.02 * tOffset) +
                    Math.sin(20.0 * (u + tex_y - 0.1 * tOffset)),
                );

            const rnd = noise(x, y);
            const intensity = Math.max(0, pattern - (rnd / 15.0) * noiseIntensity);

            const r = Math.floor(20 * intensity);
            const g = Math.floor(20 * intensity);
            const b = Math.floor(220 * intensity);

            // Bloc 2×2 → canvas entièrement opaque (pas de trous transparents)
            for (let dy = 0; dy < 2; dy++) {
              for (let dx = 0; dx < 2; dx++) {
                const xx = x + dx;
                const yy = y + dy;
                if (xx < width && yy < height) {
                  const index = (yy * width + xx) * 4;
                  data[index] = r;
                  data[index + 1] = g;
                  data[index + 2] = b;
                  data[index + 3] = 255;
                }
              }
            }
          }
        }
        ctx.putImageData(imageData, 0, 0);

        // Vignette douce par-dessus
        const rg = ctx.createRadialGradient(
          width / 2, height / 2, 0,
          width / 2, height / 2, Math.max(width, height) / 1.4,
        );
        rg.addColorStop(0, "rgba(0,0,0,0)");
        rg.addColorStop(1, "rgba(0,0,31,0.45)");
        ctx.fillStyle = rg;
        ctx.fillRect(0, 0, width, height);
      }

      time += 1;
      animationRef.current = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      ro.disconnect();
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }}
    />
  );
}