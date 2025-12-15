"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const trailCount = 12;
    const trails = trailRefs.current.filter(Boolean);

    const move = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power2.out",
      });

      trails.forEach((trail, index) => {
        if (!trail) return;
        const delay = (index + 1) * 0.025;
        const scale = 1 - (index * 0.08);
        
        gsap.to(trail, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.35 + (index * 0.08),
          scale: scale,
          ease: "power3.out",
          delay: delay,
        });
      });
    };

    const down = () => {
      gsap.to(cursor, { scale: 0.8, duration: 0.15, ease: "power2.out" });
      trails.forEach((trail) => {
        if (trail) gsap.to(trail, { scale: 0.7, duration: 0.2, ease: "power2.out" });
      });
    };
    
    const up = () => {
      gsap.to(cursor, { scale: 1, duration: 0.2, ease: "power2.out" });
      trails.forEach((trail) => {
        if (trail) gsap.to(trail, { scale: 1, duration: 0.3, ease: "power2.out" });
      });
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
    };
  }, []);

  return (
    <>
      {/* Dragging trail particles */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          ref={(el) => (trailRefs.current[i] = el)}
          aria-hidden
          className="pointer-events-none fixed left-0 top-0 z-[9998] h-4 w-4 -translate-x-1/2 -translate-y-1/2"
          style={{
            opacity: 1 - (i * 0.08),
          }}
        >
          <div 
            className="h-full w-full rounded-full bg-white/60 blur-sm"
            style={{
              boxShadow: `0 0 ${20 - i * 1.5}px rgba(255,255,255,${0.5 - i * 0.04})`,
            }}
          />
        </div>
      ))}
      
      {/* Meteor core */}
      <div
        ref={cursorRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="h-full w-full rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.9),0_0_30px_rgba(255,255,255,0.5)]" />
      </div>
    </>
  );
}
