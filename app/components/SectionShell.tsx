"use client";

import { useEffect, useRef, useState } from "react";

interface SectionShellProps {
  id: string;
  children: React.ReactNode;
}

export default function SectionShell({ id, children }: SectionShellProps) {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      className={`snap-start snap-always min-h-[85vh] flex items-center justify-center transition-all duration-200 ease-out will-change-transform will-change-opacity ${
        isVisible ? "opacity-100 scale-100" : "opacity-80 scale-[0.995]"
      }`}
    >
      {children}
    </section>
  );
}
