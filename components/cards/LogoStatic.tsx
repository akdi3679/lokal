"use client";

import { useCallback, useEffect, useRef, type MouseEvent } from "react";
import Link from "next/link";
import { prefersReducedMotion } from "@/lib/motion";

const ORDER = ["l1", "o", "k", "a", "l2", "leaf"] as const;
type LetterId = (typeof ORDER)[number];

const D: Record<LetterId, string> = {
  l1: "M 56.6878 426.278 C 63.6582 426.942 78.6235 426.565 86.4573 426.594 C 105.643 426.751 124.829 426.737 144.014 426.554 C 143.814 467.34 143.847 508.126 144.112 548.912 L 196.797 548.957 L 196.884 629.24 C 183.759 628.98 168.751 629.596 155.352 629.608 L 56.9537 629.347 C 56.9664 562.171 57.6678 493.336 56.6878 426.278 z",
  o: "M 297.974 425.482 C 356.069 419.244 408.161 461.435 414.128 519.559 C 420.095 577.683 377.662 629.578 319.511 635.274 C 261.741 640.933 210.261 598.839 204.334 541.096 C 198.406 483.354 240.26 431.678 297.974 425.482 z",
  k: "M 531.809 426.311 C 563.801 426.235 595.793 426.458 627.78 426.98 C 625.361 435.608 620.948 443.024 616.864 450.925 C 603.473 476.83 588.94 502.025 577.31 528.789 C 582.482 543.722 592.697 562.585 600.044 576.72 L 627.309 629.138 C 595.849 629.38 563.28 629.932 531.869 629.303 C 526.91 616.459 521.637 603.252 517.055 590.311 L 510.309 584.328 C 510.089 599.353 510.001 614.38 510.043 629.407 L 455.577 629.466 C 447.806 629.476 434.58 628.988 427.25 629.542 C 426.974 591.381 425.696 542.418 427.21 504.596 C 426.3 494.924 427.441 477.578 427.026 467.027 C 426.574 455.522 427.164 441.744 427.074 430.15 C 427.052 427.297 427.487 427.144 429.127 425.81 C 446.19 428.156 491.278 425.987 511.701 426.683 C 511.382 444.877 510.786 457.596 514.705 475.491 C 519.558 462.878 529.224 439.184 531.809 426.311 z",
  a: "M 730.594 421.554 C 731.276 421.99 731.817 422.409 732.386 422.991 C 739.579 430.344 825.046 556.274 826.567 561.22 C 830.782 574.93 828.309 613.782 828.229 629.714 C 804.794 628.704 773.477 629.7 749.378 629.69 C 743.106 622.348 738.254 616.813 732.963 608.629 L 730.806 605.984 C 727.554 606.994 715.426 624.781 711.729 629.267 C 688.725 628.398 661.295 629.129 637.949 629.228 C 638.025 615.876 636.237 573.598 638.851 562.494 C 641.523 551.136 669.587 513.716 677.578 501.779 L 730.594 421.554 z",
  l2: "M 867.168 426.486 C 886.889 426.616 906.609 426.624 926.329 426.509 C 926.058 467.305 926.039 508.103 926.272 548.899 L 977.764 548.721 C 976.717 575.09 977.981 602.54 977.024 629.583 C 971.398 629.114 959.937 629.55 953.882 629.6 C 917.931 629.403 877.359 628.53 841.799 629.822 C 842.502 563.144 841.505 493.686 840.957 426.885 L 867.168 426.486 z",
  leaf: "M 243.817 358.2 C 252.807 357.451 268.769 357.945 275.244 363.222 C 291.341 374.856 292.14 402.266 274.711 413.551 C 250.581 429.175 234.035 431.896 216.366 457.479 C 210.922 465.061 204.406 475.513 199.153 483.466 C 192.753 445.471 189.431 408.321 215.005 377.122 C 224.244 365.851 229.995 362.151 243.817 358.2 z",
};

const HOLES: string[] = [
  "M 305.667 513.952 C 312.992 513.08 318.347 515.886 321.644 522.589 C 323.894 527.147 324.154 532.435 322.362 537.192 C 320.618 541.929 318.979 543.425 314.566 545.406 C 312.499 545.454 310.431 545.449 308.365 545.389 C 304.6 545.259 300.319 543.574 298.042 540.617 C 290.076 530.268 298.605 520.22 305.667 513.952 z",
  "M 728.238 510.928 C 749.207 507.65 748.583 525.29 745.417 539.856 C 742.073 541.073 737.992 541.98 734.49 542.855 C 715.263 545.223 707.769 522.283 728.238 510.928 z",
];

export interface LogoStaticProps {
  href?: string;
  height?: number;
  inkColor?: string;
  bgColor?: string;
  /** ancien nom de prop, toujours accepté (rétro-compat) */
  ink?: string;
  label?: string;
  className?: string;
}

/**
 * Logo header/footer — animation IMPÉRATIVE (même technique que le fichier
 * vanilla d'origine qui fonctionnait) : pilotée directement sur le DOM.
 * • Joue une fois au montage.
 * • Rejoue à CHAQUE clic, que la navigation ait lieu ou non
 *   (le header persiste entre les pages → l'animation n'est pas interrompue).
 * • prefers-reduced-motion → logo statique (a11y §43).
 */
export default function LogoStatic({
  href = "/",
  height = 44,
  inkColor,
  bgColor = "#FAF6EE",
  ink,
  label = "LOKAL — retour à l'accueil",
  className,
}: LogoStaticProps) {
  const color = inkColor ?? ink ?? "#1C2452";
  const pathsRef = useRef<Partial<Record<LetterId, SVGPathElement | null>>>({});
  const timersRef = useRef<number[]>([]);

  const play = useCallback(() => {
    if (prefersReducedMotion()) return;
    const els = ORDER.map((id) => pathsRef.current[id]).filter(
      (e): e is SVGPathElement => Boolean(e),
    );
    if (els.length === 0) return;

    timersRef.current.forEach((t) => window.clearTimeout(t));
    timersRef.current = [];

    // 1 · reset : dash prêt + fill transparent
    els.forEach((el) => {
      let len = 3000;
      try {
        const l = el.getTotalLength();
        if (l > 0) len = l;
      } catch {
        /* noop */
      }
      el.style.transition = "none";
      el.style.strokeDasharray = `${len} ${len}`;
      el.style.strokeDashoffset = `${len}`;
      el.style.fill = "transparent";
    });
    // reflow forcé
    els[0].ownerSVGElement?.getBoundingClientRect();

    // 2 · draw + fill (spec : 1200ms draw, 80ms stagger, fill à draw+100)
    const draw = 1200;
    const stag = 80;
    els.forEach((el, i) => {
      timersRef.current.push(
        window.setTimeout(() => {
          el.style.transition = `stroke-dashoffset ${draw}ms ease-in-out`;
          el.style.strokeDashoffset = "0";
        }, i * stag + 20),
      );
      timersRef.current.push(
        window.setTimeout(() => {
          el.style.transition = "fill 500ms ease-in-out";
          el.style.fill = color;
        }, i * stag + draw + 100),
      );
    });
  }, [color]);

  // joue une fois au montage
  useEffect(() => {
    const raf = requestAnimationFrame(() => play());
    return () => {
      cancelAnimationFrame(raf);
      timersRef.current.forEach((t) => window.clearTimeout(t));
    };
  }, [play]);

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (window.location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    play(); // ← l'animation se lance TOUJOURS, avec ou sans navigation
  };

  return (
    <Link
      href={href}
      aria-label={label}
      className={className}
      onClick={handleClick}
      style={{ display: "inline-flex", alignItems: "center", textDecoration: "none" }}
    >
      <svg
        viewBox="44 344 936 291"
        width={Math.round(height * (936 / 291))}
        height={height}
        role="img"
        aria-label="LOKAL"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
        style={{ display: "block", overflow: "visible" }}
      >
        {ORDER.map((id) => (
          <path
            key={id}
            ref={(el) => {
              pathsRef.current[id] = el;
            }}
            d={D[id]}
            fill={color}
            stroke={color}
            strokeWidth={10}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ))}
        {HOLES.map((d, i) => (
          <path key={`h-${i}`} d={d} fill={bgColor} stroke="none" />
        ))}
      </svg>
    </Link>
  );
}