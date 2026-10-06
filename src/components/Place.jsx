import Reveal from "./Reveal";
// Bloque reutilizable para Ceremonia y Recepcion (con mapa).
export default function Place({ titulo, data }) {
  const q = encodeURIComponent(`${data.lugar}, ${data.direccion}`);
  return (
    <Reveal variant="stagger" className="mx-auto max-w-xl px-6 py-12 text-center">
      <h3 className="font-display text-4xl tracking-[0.12em] text-gold-grad sm:text-5xl">{titulo}</h3>
      <p className="mt-4 font-display text-2xl">{data.hora}</p>
      <p className="font-display text-lg text-gold-dark">{data.lugar}</p>
      <p className="mx-auto mt-2 max-w-sm">{data.direccion}</p>
      <iframe
        title={`Mapa de ${titulo}`}
        src={`https://www.google.com/maps?q=${q}&output=embed`}
        className="frame mt-8 h-64 w-full"
        loading="lazy"
      />
      <a
        href={`https://www.google.com/maps/search/?api=1&query=${q}`}
        target="_blank" rel="noreferrer"
        className="mt-6 inline-block border border-gold px-8 py-2.5 font-display text-xs tracking-[0.3em] text-gold-dark transition hover:bg-gold hover:text-cream"
      >
        Ver en Google Maps
      </a>
    </Reveal>
  );
}
