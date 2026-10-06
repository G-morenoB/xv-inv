import { useEffect, useState } from "react";

const calc = (target) => {
  const t = Math.max(0, new Date(target) - new Date());
  return [
    ["Días", Math.floor(t / 864e5)],
    ["Horas", Math.floor(t / 36e5) % 24],
    ["Minutos", Math.floor(t / 6e4) % 60],
    ["Segundos", Math.floor(t / 1e3) % 60],
  ];
};

export default function Countdown({ target }) {
  const [parts, setParts] = useState(() => calc(target));
  useEffect(() => {
    const id = setInterval(() => setParts(calc(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  return (
    <div className="mt-6 flex justify-center gap-5 sm:gap-8">
      {parts.map(([label, v]) => (
        <div key={label} className="min-w-14 text-center">
          <div className="font-display text-3xl text-gold-light sm:text-4xl">{String(v).padStart(2, "0")}</div>
          <div className="text-sm text-cream/70">{label}</div>
        </div>
      ))}
    </div>
  );
}
