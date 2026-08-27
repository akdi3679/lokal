"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import { prefersReducedMotion } from "@/lib/motion";

/**
 * Pattern de points LOKAL (10 formes) — « scale & fade in » staggeré.
 * Décoratif (aria-hidden) : hero, séparateurs de sections, filigrane
 * footer, coins de cartes créateurs. Se déclenche à l'entrée viewport.
 */
const SHAPES: string[] = [
  "M 1070 584 m -65 0 a 65 65 0 1 0 130 0 a 65 65 0 1 0 -130 0 z",
  "M 1078 52 m -58 0 a 58 58 0 1 0 116 0 a 58 58 0 1 0 -116 0 z",
  "M 560.548 130.129 C 650.558 125.309 664.814 268.011 577.156 288.411 C 563.182 290.348 548.97 287.367 536.951 279.98 C 486.793 249.608 487.941 164.172 540.501 136.793 C 547.141 133.335 553.371 131.818 560.548 130.129 z",
  "M 852.853 585.213 C 944.922 577.094 960.373 720.78 873.584 742.775 C 786.77 754.056 761.369 611.234 852.853 585.213 z",
  "M 1017.48 266.494 C 1054.83 263.94 1087.22 292.032 1089.98 329.363 C 1092.74 366.693 1064.83 399.242 1027.51 402.207 C 989.905 405.194 957.046 377.016 954.265 339.394 C 951.484 301.771 979.843 269.068 1017.48 266.494 z",
  "M 693.45 767.325 C 730.41 761.348 765.24 786.394 771.34 823.333 C 777.439 860.273 752.509 895.186 715.59 901.408 C 678.497 907.658 643.384 882.586 637.256 845.473 C 631.128 808.36 656.317 773.33 693.45 767.325 z",
  "M 837.876 266.125 C 892.106 261.11 907.988 423.617 844.801 448.153 C 837.888 448.163 834.048 448.174 828.087 444.529 C 781.927 416.304 783.768 280.182 837.876 266.125 z",
  "M 345.792 221.258 C 420.828 215.366 433.75 339.816 359.302 356.646 C 282.491 362.318 272.941 234.875 345.792 221.258 z",
  "M 526.573 471.437 C 557.822 467.277 586.466 489.402 590.336 520.689 C 594.205 551.976 571.815 580.412 540.493 583.991 C 509.581 587.522 481.597 565.487 477.778 534.61 C 473.959 503.732 495.732 475.543 526.573 471.437 z",
  "M 918.63 61.4549 C 930.603 60.0389 950.839 66.5267 959.441 74.2438 C 997.125 108.054 967.393 149.411 923.729 152.225 C 847.705 154.125 841.009 66.5821 918.63 61.4549 z",
];

export interface PatternDotsProps {
  color?: string;
  stagger?: number;
  className?: string;
  style?: CSSProperties;
}

export default function PatternDots({
  color = "#C9A876",
  stagger = 110,
  className,
  style,
}: PatternDotsProps) {
  const rootRef = useRef<SVGSVGElement | null>(null);
  const refs = useRef<(SVGPathElement | null)[]>([]);
  const playedRef = useRef(false);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const els = refs.current.filter((p): p is SVGPathElement => Boolean(p));

    const show = (animate: boolean) => {
      els.forEach((el, i) => {
        el.style.transition = animate
          ? `opacity 700ms ease-out ${i * stagger}ms, transform 800ms cubic-bezier(0.34, 1.56, 0.64, 1) ${i * stagger}ms`
          : "none";
        el.style.opacity = "1";
        el.style.transform = "scale(1)";
      });
    };

    if (prefersReducedMotion() || !("IntersectionObserver" in window)) {
      show(false);
      return;
    }

    // Masque avant paint, révèle à l'entrée du viewport (une seule fois)
    els.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "scale(0)";
    });

    const io = new IntersectionObserver(
      (entries) => {
        if (!playedRef.current && entries.some((e) => e.isIntersecting)) {
          playedRef.current = true;
          requestAnimationFrame(() => show(true));
          io.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    io.observe(root);
    return () => io.disconnect();
  }, [stagger]);

  return (
    <svg
      ref={rootRef}
      viewBox="0 0 1132 1184"
      className={className}
      style={style}
      aria-hidden="true"
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
    >
      {SHAPES.map((d, i) => (
        <path
          key={i}
          ref={(el) => {
            refs.current[i] = el;
          }}
          d={d}
          fill={color}
          style={{ transformOrigin: "center", transformBox: "fill-box" }}
        />
      ))}
    </svg>
  );
}