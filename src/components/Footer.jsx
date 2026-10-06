import { invitation as d } from "../data/invitation";

export default function Footer() {
  return (
    <footer className="relative h-[70svh] overflow-hidden bg-ink">
      <img src={d.fotos.noche} alt="" className="h-full w-full object-cover object-center opacity-70" loading="lazy" />
      <div className="absolute inset-0 flex flex-col items-center justify-end bg-gradient-to-t from-ink via-transparent pb-10 text-center">
        <p className="font-script text-6xl text-gold-grad">{d.nombre}</p>
        <p className="font-display text-xs tracking-[0.4em] text-gold-light">{d.fechaTexto}</p>
      </div>
    </footer>
  );
}
