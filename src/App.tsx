import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { initScrollMotion } from "./motion";
import Hero from "./sections/Hero";
import Lifestyle from "./sections/Lifestyle";
import Journey from "./sections/Journey";
import Film from "./sections/Film";
import Comparison from "./sections/Comparison";
import Founding from "./sections/Founding";
import Footer from "./sections/Footer";

gsap.registerPlugin(ScrollToPlugin);

// Menu label → section it scrolls to
const SECTIONS: Record<string, { node: string; hash: string }> = {
  "How it works": { node: "167:1433", hash: "how-it-works" },
  "Why Property Scanner": { node: "167:1538", hash: "why-property-scanner" },
  "For agents": { node: "167:1611", hash: "for-agents" },
  "Founding members": { node: "167:1611", hash: "founding-members" },
};

const q = (id: string) => document.querySelector<HTMLElement>(`[data-node-id="${id}"]`);

export default function App() {
  useEffect(() => {
    // Scale the fixed 1920 artboard to the window
    const fit = () => {
      document.documentElement.style.setProperty("--zoom", String(Math.min(1, window.innerWidth / 1920)));
      ScrollTrigger.refresh();
    };
    fit();
    window.addEventListener("resize", fit);

    // GSAP scroll choreography; refresh once fonts are in so trigger points are measured correctly
    const stopMotion = initScrollMotion();
    document.fonts?.ready.then(() => ScrollTrigger.refresh());

    // Progress-bar shine travel is relative to each bar's fill width
    document.querySelectorAll<HTMLElement>('[data-node-id="237:2074"], [data-node-id="236:2071"]').forEach((f) => {
      const w = f.offsetWidth;
      f.style.setProperty("--shine-mid", `${w / 2 + 45}px`);
      f.style.setProperty("--shine-end", `${w + 90}px`);
    });

    // Amber blur follows the cursor on journey cards 01–03
    const cards = ["167:1443", "167:1454", "167:1473"].map(q).filter(Boolean) as HTMLElement[];
    const move = (e: PointerEvent) => {
      const el = e.currentTarget as HTMLElement, r = el.getBoundingClientRect();
      const z = r.width / el.offsetWidth; // account for the stage zoom
      el.style.setProperty("--mx", `${(e.clientX - r.left) / z}px`);
      el.style.setProperty("--my", `${(e.clientY - r.top) / z}px`);
    };
    cards.forEach((c) => c.addEventListener("pointermove", move));

    // Founding-member audience toggle: swap the active pill
    const a = q("167:1651"), b = q("167:1653");
    const swap = (on: HTMLElement, off: HTMLElement) => {
      if (on.dataset.active === "1") return;
      const [c1, c2] = [on.className, off.className];
      const [p1, p2] = [on.querySelector("p")!, off.querySelector("p")!];
      const [t1, t2] = [p1.className, p2.className];
      on.className = c2; off.className = c1; p1.className = t2; p2.className = t1;
      on.dataset.active = "1"; off.dataset.active = "0";
    };
    if (a && b) {
      a.dataset.active = "1";
      a.addEventListener("click", () => swap(a, b));
      b.addEventListener("click", () => swap(b, a));
    }

    // Sticky nav condenses once the page leaves the very top
    const onScroll = () => document.documentElement.classList.toggle("scrolled", window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // Menu → section navigation (header nav, footer nav, Join free, See how matching works)
    const goTo = (label: string) => {
      const s = SECTIONS[label];
      const el = s && q(s.node);
      if (!el) return;
      // rect already includes the stage zoom; leave room for the condensed 88px sticky bar
      const zoom = Number(getComputedStyle(document.documentElement).getPropertyValue("--zoom")) || 1;
      const y = el.getBoundingClientRect().top + window.scrollY - 88 * zoom;
      history.replaceState(null, "", `#${s.hash}`);
      gsap.to(window, {
        scrollTo: y,
        duration: Math.min(1.6, 0.6 + Math.abs(y - window.scrollY) / 4000),
        ease: "power3.inOut",
        onComplete: () => {
          if (label === "For agents") b?.click();
          if (label === "Founding members") a?.click();
        },
      });
    };
    const links: [HTMLElement, string][] = [];
    document.querySelectorAll<HTMLElement>('[data-node-id="170:1965"] p, [data-node-id="167:1706"] p').forEach((p) => {
      const label = p.textContent?.trim() ?? "";
      if (SECTIONS[label]) links.push([p, label]);
    });
    const join = q("170:1971"), matching = q("167:1397");
    if (join) links.push([join, "Founding members"]);
    if (matching) links.push([matching, "How it works"]);
    const handlers = links.map(([el, label]) => {
      const h = () => goTo(label);
      el.setAttribute("role", "link");
      el.tabIndex = 0;
      el.addEventListener("click", h);
      el.addEventListener("keydown", (e) => (e.key === "Enter" || e.key === " ") && (e.preventDefault(), h()));
      return [el, h] as const;
    });
    // Logos (header + footer) glide back to the hero
    const toTop = () => {
      history.replaceState(null, "", location.pathname);
      gsap.to(window, { scrollTo: 0, duration: Math.min(1.6, 0.6 + window.scrollY / 4000), ease: "power3.inOut" });
    };
    ["170:1963", "167:1705"].forEach((id) => {
      const logo = q(id);
      if (!logo) return;
      logo.setAttribute("role", "link");
      logo.setAttribute("aria-label", "Property Scanner — back to top");
      logo.tabIndex = 0;
      logo.addEventListener("click", toTop);
      logo.addEventListener("keydown", (e) => (e.key === "Enter" || e.key === " ") && (e.preventDefault(), toTop()));
    });

    // Deep links: /#for-agents etc. land on the right section
    const initial = Object.entries(SECTIONS).find(([, s]) => `#${s.hash}` === location.hash);
    if (initial) setTimeout(() => goTo(initial[0]), 300);

    return () => { window.removeEventListener("resize", fit); window.removeEventListener("scroll", onScroll); stopMotion(); handlers.forEach(([el, h]) => el.removeEventListener("click", h)); cards.forEach((c) => c.removeEventListener("pointermove", move)); };
  }, []);

  return (
    <main className="stage">
      <Hero />
      <Lifestyle />
      <Journey />
      <Film />
      <Comparison />
      <Founding />
      <Footer />
    </main>
  );
}
