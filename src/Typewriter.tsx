import { useEffect, useState } from "react";

// Cycles example briefs in the hero search field, as if someone is typing them.
const PHRASES = [
  "A 3-bed family home near good schools, under 40 mins to King's Cross",
  "A quiet street near cafés, with a garden for the dog",
  "2-bed flat, walk to the Tube, under £650k",
];

export default function Typewriter() {
  const [text, setText] = useState("");
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setText(PHRASES[0]);
      return;
    }
    let i = 0, n = 0, deleting = false, t: number;
    const tick = () => {
      const p = PHRASES[i];
      n += deleting ? -1 : 1;
      setText(p.slice(0, n));
      let wait = deleting ? 22 : 45 + Math.random() * 45;
      if (!deleting && n === p.length) { deleting = true; wait = 2200; }
      else if (deleting && n === 0) { deleting = false; i = (i + 1) % PHRASES.length; wait = 400; }
      t = window.setTimeout(tick, wait);
    };
    t = window.setTimeout(tick, 1400);
    return () => clearTimeout(t);
  }, []);
  return (
    <>
      {text}
      <span className="caret" />
    </>
  );
}
