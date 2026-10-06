import Reveal from "./Reveal";
import { invitation as d } from "../data/invitation";
import Ornament from "./Ornament";

export default function DressCode() {
  return (
    <Reveal as="section" variant="stagger" className="px-6 py-20 text-center">
      <Ornament />
      <h2 className="mt-12 font-display text-3xl tracking-[0.12em] text-gold-grad sm:text-4xl">Código de vestimenta</h2>
      <p className="mt-4 font-script text-5xl text-gold-dark">{d.vestimenta}</p>
      <p className="mx-auto mt-4 max-w-sm italic">Te pedimos evitar el color dorado, reservado para la quinceañera.</p>
    </Reveal>
  );
}
