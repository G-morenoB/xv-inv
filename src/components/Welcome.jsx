import { invitation as d } from "../data/invitation";

export default function Welcome({ open, onEnter }) {
  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-ink px-6 text-center transition-opacity duration-1000 ${open ? "pointer-events-none opacity-0" : "opacity-100"}`}
      aria-hidden={open}
    >
      <p className="rise font-display text-sm tracking-[0.4em] text-gold-light">Mis XV años</p>
      <h1 className="rise mt-6 font-script text-7xl text-gold-grad sm:text-8xl" style={{ animationDelay: ".3s" }}>
        Bienvenidos
      </h1>
      <p className="rise mt-4 font-script text-4xl text-gold-light" style={{ animationDelay: ".6s" }}>{d.nombre}</p>
      <button
        onClick={onEnter}
        className="rise mt-12 border border-gold px-10 py-3 font-display text-sm tracking-[0.3em] text-gold-light transition hover:bg-gold hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-light"
        style={{ animationDelay: ".9s" }}
      >
        Ver invitación
      </button>
    </div>
  );
}
