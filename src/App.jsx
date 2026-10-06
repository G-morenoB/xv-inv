import { useRef, useState } from "react";
import { invitation as d } from "./data/invitation";
import Welcome from "./components/Welcome";
import MusicPlayer from "./components/MusicPlayer";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Family from "./components/Family";
import Where from "./components/Where";
import DressCode from "./components/DressCode";
import Photos from "./components/Photos";
import Rsvp from "./components/Rsvp";
import Footer from "./components/Footer";

export default function App() {
  const audio = useRef(null);
  const [open, setOpen] = useState(false);
  const [playing, setPlaying] = useState(false);

  // El navegador solo permite sonido tras un gesto: el boton lo inicia.
  const enter = () => {
    setOpen(true);
    audio.current?.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
  };
  const toggle = () => {
    const a = audio.current;
    if (!a) return;
    if (a.paused) { a.play(); setPlaying(true); } else { a.pause(); setPlaying(false); }
  };

  return (
    <>
      <audio ref={audio} src={d.musica} loop preload="auto" />
      <Welcome open={open} onEnter={enter} />
      {open && <MusicPlayer playing={playing} onToggle={toggle} />}
      <main>
        <Hero open={open} />
        <Intro />
        <Family />
        <Where />
        <DressCode />
        <Photos />
        <Rsvp />
      </main>
      <Footer />
    </>
  );
}
