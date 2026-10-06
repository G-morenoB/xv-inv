// Cuadrito fijo en la esquina para pausar o reactivar la musica.
export default function MusicPlayer({ playing, onToggle }) {
  return (
    <button
      onClick={onToggle}
      aria-label={playing ? "Pausar música" : "Reproducir música"}
      className="fixed right-4 top-4 z-40 flex h-11 w-11 items-center justify-center border border-gold bg-ink/80 text-gold-light backdrop-blur transition hover:bg-gold hover:text-ink focus-visible:outline-2 focus-visible:outline-gold-light"
    >
      {playing ? (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><rect x="3" y="2" width="3.5" height="12" /><rect x="9.5" y="2" width="3.5" height="12" /></svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M4 2l10 6-10 6z" /></svg>
      )}
    </button>
  );
}
