import Reveal from "./Reveal";
import { invitation as d } from "../data/invitation";

export default function Photos() {
  return (
    <Reveal as="section" variant="stagger" className="px-6 py-20 text-center">
      <h2 className="mx-auto max-w-md font-script text-5xl text-gold-grad sm:text-6xl">Comparte tus fotos de la noche</h2>
      <p className="mx-auto mt-6 max-w-sm italic">Ayúdanos a inmortalizar todos los momentos inolvidables de este día.</p>
      <a href={d.albumUrl} target="_blank" rel="noreferrer" className="mt-8 inline-block border border-gold px-8 py-3 font-display text-xs tracking-[0.3em] text-gold-dark transition hover:bg-gold hover:text-cream">
        Subir fotos al álbum
      </a>
    </Reveal>
  );
}
