import Reveal from "./Reveal";
import { invitation as d } from "../data/invitation";
import Ornament from "./Ornament";

const Names = ({ list }) => list.map((n) => <p key={n} className="font-display text-lg tracking-wide">{n}</p>);

export default function Family() {
  return (
    <section className="bg-white/60 px-6 py-20 text-center">
      <Reveal variant="stagger" className="mx-auto max-w-xl space-y-4">
        <p className="text-xl italic">Con la bendición de Dios y el amor de mis padres</p>
        <Names list={d.padres} />
        <Ornament className="py-6" />
        <p className="text-xl italic">En compañía de mis padrinos</p>
        <Names list={d.padrinos} />
        <p className="pt-10 text-xl italic">Tenemos el honor de invitarlos a celebrar mis XV años</p>
        <p className="pt-4 font-script text-5xl text-gold-grad">¡Nos encantará verlos pronto!</p>
      </Reveal>
    </section>
  );
}
