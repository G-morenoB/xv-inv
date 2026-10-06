import Reveal from "./Reveal";
import { invitation as d } from "../data/invitation";
import Ornament from "./Ornament";

export default function Intro() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-20 text-center">
      <Ornament />
      <Reveal><h2 className="mt-12 font-script text-7xl text-gold-grad sm:text-8xl">Mis XV años</h2></Reveal>
      <Reveal delay={200}><p className="mx-auto mt-8 max-w-md text-xl italic">{d.frase}</p></Reveal>
      <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-8">
        <Reveal variant="left"><img src={d.fotos.noche} alt="Tania bailando con su vestido dorado" className="frame aspect-[3/4] w-full object-cover" loading="lazy" /></Reveal>
        <Reveal variant="right" delay={200} className="mt-10"><img src={d.fotos.retrato} alt="Retrato de Tania con su ramo" className="frame aspect-[3/4] w-full object-cover" loading="lazy" /></Reveal>
      </div>
    </section>
  );
}
