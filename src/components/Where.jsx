import Reveal from "./Reveal";
import { invitation as d } from "../data/invitation";
import Place from "./Place";
import Ornament from "./Ornament";

export default function Where() {
  return (
    <section className="py-16 text-center">
      <Reveal variant="zoom"><h2 className="font-script text-7xl text-gold-grad sm:text-8xl">¿Dónde?</h2></Reveal>
      <Place titulo="Ceremonia" data={d.ceremonia} />
      <Ornament />
      <Place titulo="Recepción" data={d.recepcion} />
    </section>
  );
}
