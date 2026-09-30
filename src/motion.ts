import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const $ = (id: string) => document.querySelector<HTMLElement>(`[data-node-id="${id}"]`);
const kids = (id: string) => Array.from($(id)?.children ?? []) as HTMLElement[];

// Scroll choreography. No pinning — everything plays in the normal document flow.
// Reveals clear their inline transforms when done so the CSS hover states keep working.
export function initScrollMotion() {
  const mm = gsap.matchMedia();

  mm.add("(prefers-reduced-motion: no-preference)", () => {
    const ease = "power3.out";
    const reveal = (targets: gsap.TweenTarget, trigger: Element | null, vars: gsap.TweenVars = {}) => {
      if (!trigger) return;
      gsap.from(targets, {
        y: 48,
        opacity: 0,
        duration: 1,
        ease,
        clearProps: "transform,opacity",
        scrollTrigger: { trigger, start: "top 82%", once: true },
        ...vars,
      });
    };

    // ── Hero: video drifts and zooms, copy lifts away as you scroll past
    const hero = $("170:1959");
    if (hero) {
      const tl = { trigger: hero, start: "top top", end: "bottom top", scrub: true };
      gsap.to(".hero-video", { yPercent: 18, scale: 1.12, ease: "none", scrollTrigger: tl });
      gsap.to($("170:1973"), { y: -140, opacity: 0, ease: "none", scrollTrigger: { ...tl, end: "70% top" } });
      // radar opens up on load, then drifts back and fades as you scroll away
      gsap.from(".hero-radar", { opacity: 0, scale: 0.85, duration: 1.6, ease, delay: 0.2 });
      gsap.to(".hero-radar", { opacity: 0, scale: 1.1, ease: "none", immediateRender: false, scrollTrigger: { ...tl, end: "70% top" } });
    }

    // ── Explore London: headline, then tiles rise in sequence; photos parallax inside their frames
    reveal($("167:1391"), $("167:1391"));
    reveal(kids("204:3390"), $("204:3390"), { y: 80, stagger: 0.12, duration: 1.1 });
    document.querySelectorAll<HTMLElement>('[data-node-id="204:3390"] [data-name="Photo"] img').forEach((img) => {
      gsap.set(img, { scale: 1.18 });
      gsap.fromTo(img, { yPercent: -7 }, {
        yPercent: 7,
        ease: "none",
        scrollTrigger: { trigger: img.closest('[data-node-id="204:3390"]'), start: "top bottom", end: "bottom top", scrub: true },
      });
    });

    // ── Home journey: heading, the four steps fan up, then the founding band
    reveal($("167:1434"), $("167:1434"));
    const steps = kids("167:1442");
    reveal(steps, $("167:1442"), { y: 90, rotate: 1.5, stagger: 0.12, duration: 1.1, clearProps: "transform,opacity,rotate" });
    const band = $("167:1441")?.children[1] as HTMLElement | undefined;
    if (band) reveal(band, band, { y: 60 });

    // ── Film card: grows into place as it scrolls up; poster drifts behind the play button
    const film = $("167:1520");
    if (film) {
      gsap.fromTo(film, { scale: 0.9, borderRadius: 64 }, {
        scale: 1,
        borderRadius: 32,
        ease: "none",
        scrollTrigger: { trigger: film, start: "top bottom", end: "center center", scrub: true },
      });
      reveal(kids("167:1521"), film, { y: 36, stagger: 0.1, clearProps: "opacity" });
      const poster = film.querySelector<HTMLElement>('[data-node-id="167:1532"] > img');
      if (poster) {
        gsap.set(poster, { scale: 1.12 });
        gsap.fromTo(poster, { yPercent: -5 }, {
          yPercent: 5,
          ease: "none",
          scrollTrigger: { trigger: film, start: "top bottom", end: "bottom top", scrub: true },
        });
      }
    }

    // ── Comparison: heading, then the table; rows fill in row by row across all three columns
    reveal(kids("167:1539"), $("167:1539"), { y: 40, stagger: 0.1 });
    const table = $("167:1543");
    if (table) {
      reveal(table, table, { y: 70, duration: 1.1 });
      const rowsOf = (id: string) => kids(id).slice(1);
      const ps = document.querySelector('[data-node-id="179:3068"]');
      const psRows = ps ? (Array.from(ps.children).slice(1) as HTMLElement[]) : [];
      rowsOf("167:1544").forEach((row, i) => {
        const group = [row, rowsOf("167:1563")[i], psRows[i]].filter(Boolean);
        gsap.from(group, {
          x: -24,
          opacity: 0,
          duration: 0.7,
          ease,
          stagger: 0.06,
          delay: 0.25 + i * 0.1,
          clearProps: "transform,opacity",
          scrollTrigger: { trigger: table, start: "top 75%", once: true },
        });
      });
    }

    // ── Founding members: pitch slides from the left, signup card from the right, perks stagger
    const pitch = $("167:1613");
    if (pitch) {
      reveal(kids("167:1613"), pitch, { x: -60, y: 0, stagger: 0.1, duration: 1.1 });
      reveal(kids("167:1621").slice(1), $("167:1621"), { x: -24, y: 0, stagger: 0.08, duration: 0.7, delay: 0.3 });
    }
    reveal($("167:1649"), $("167:1649"), { x: 80, y: 0, duration: 1.2 });
    reveal(kids("167:1683"), $("167:1683"), { y: 60, stagger: 0.12 });

    // ── Footer
    reveal([$("167:1703"), $("167:1722")], $("167:1703"), { y: 30, stagger: 0.1 });
  });

  return () => mm.revert();
}
