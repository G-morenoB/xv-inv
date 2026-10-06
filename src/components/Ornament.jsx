import Reveal from "./Reveal";
// Divisor dorado reutilizable.
export default function Ornament({ className = "" }) {
  return (
    <Reveal variant="zoom" className={`flex items-center justify-center gap-3 text-gold ${className}`}>
      <span className="h-px w-20 bg-gradient-to-r from-transparent to-gold" />
      <svg width="14" height="14" viewBox="0 0 14 14"><path d="M7 0l7 7-7 7-7-7z" fill="currentColor" /></svg>
      <span className="h-px w-20 bg-gradient-to-l from-transparent to-gold" />
    </Reveal>
  );
}
