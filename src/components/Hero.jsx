import { invitation as d } from "../data/invitation";
import { useEffect, useRef } from "react";
import Countdown from "./Countdown";

export default function Hero({ open }) {
  const img = useRef(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        if (img.current) img.current.style.transform = `translateY(${Math.min(window.scrollY, 900) * 0.25}px) scale(1.1)`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); cancelAnimationFrame(raf); };
  }, []);

  return (
    <header className="relative flex min-h-svh items-end justify-center overflow-hidden bg-ink text-center">
      <img ref={img} src={d.fotos.retrato} alt={`${d.nombre}, quinceañera`} className="absolute inset-0 scale-110 will-change-transform h-full w-full object-cover object-top opacity-80" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/30" />
      <div className={`relative px-6 pb-14 pt-32 ${open ? "rise" : "opacity-0"}`}>
        <h1 className="font-script text-8xl leading-none text-gold-grad sm:text-9xl">{d.nombre}</h1>
        <p className="font-script text-4xl text-gold-light sm:text-5xl">Mis Quince</p>
        <p className="mt-8 font-display text-lg tracking-[0.25em] text-cream">{d.fechaTexto}</p>
        <p className="font-display text-sm tracking-[0.3em] text-gold-light">{d.horaTexto}</p>
        <Countdown target={d.fecha} />
      </div>
    </header>
  );
}
