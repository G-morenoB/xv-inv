import Reveal from "./Reveal";
import { useState } from "react";
import { invitation as d } from "../data/invitation";

// Confirmacion de asistencia: abre WhatsApp con el mensaje listo.
export default function Rsvp() {
  const [nombre, setNombre] = useState("");
  const [personas, setPersonas] = useState("1");
  const enviar = () => {
    if (!nombre.trim()) return;
    const msg = `Hola, soy ${nombre.trim()}. Confirmo mi asistencia a los XV años de ${d.nombre} (${personas} ${personas === "1" ? "persona" : "personas"}).`;
    window.open(`https://wa.me/${d.whatsapp}?text=${encodeURIComponent(msg)}`, "_blank");
  };
  const input = "w-full border border-gold/60 bg-white/70 px-4 py-3 outline-none focus:border-gold-dark";

  return (
    <Reveal as="section" variant="stagger" className="bg-ink px-6 py-20 text-center text-cream">
      <h2 className="font-script text-6xl text-gold-grad sm:text-7xl">Confirma tu asistencia</h2>
      <div className="mx-auto mt-10 max-w-sm space-y-4 text-left text-ink">
        <input className={input} placeholder="Nombre completo" value={nombre} onChange={(e) => setNombre(e.target.value)} aria-label="Nombre completo" />
        <select className={input} value={personas} onChange={(e) => setPersonas(e.target.value)} aria-label="Número de personas">
          {[1, 2, 3, 4, 5, 6].map((n) => <option key={n} value={n}>{n} {n === 1 ? "persona" : "personas"}</option>)}
        </select>
        <button onClick={enviar} className="w-full border border-gold bg-gold py-3 font-display text-sm tracking-[0.3em] text-ink transition hover:bg-gold-light">
          Confirmar por WhatsApp
        </button>
      </div>
    </Reveal>
  );
}
