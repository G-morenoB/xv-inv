import { useEffect, useRef, useState } from "react";

// Anima su contenido al entrar en pantalla.
// variant: up | left | right | zoom | fade | stagger (los hijos entran en cascada)
export default function Reveal({ as: Tag = "div", variant = "up", delay = 0, className = "", children }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) return setShown(true);
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setShown(true); io.disconnect(); } },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const base = variant === "stagger" ? "stagger" : `reveal reveal-${variant}`;
  return (
    <Tag ref={ref} className={`${base} ${shown ? "is-visible" : ""} ${className}`} style={delay ? { transitionDelay: `${delay}ms` } : undefined}>
      {children}
    </Tag>
  );
}
