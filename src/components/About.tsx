import Reveal from "./Reveal";
import { img, milestones } from "@/data";

export default function About() {
  return (
    <section id="about" className="relative border-t border-white/5 bg-coal/40 py-28 md:py-36">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        {/* portrait */}
        <Reveal className="relative">
          <div className="absolute -left-4 -top-4 h-full w-full border border-wine/40" aria-hidden />
          <figure className="group relative overflow-hidden">
            <img
              src={img.noir}
              alt="Zenareeta in a black satin slip dress, monochrome portrait"
              loading="lazy"
              className="aspect-[4/5] w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
          </figure>
          <p className="mt-6 text-[10px] font-medium uppercase tracking-[0.3em] text-mist">
            Photographed in stillness — Mumbai
          </p>
        </Reveal>

        {/* text */}
        <div className="flex flex-col justify-center">
          <Reveal>
            <p className="mb-4 flex items-center gap-4 text-[11px] font-medium uppercase tracking-[0.4em] text-ember">
              <span className="h-px w-10 bg-ember" /> 04 — About
            </p>
            <h2 className="font-display text-4xl font-light leading-[1.15] text-bone md:text-5xl">
              “I write songs the way some people pray —{" "}
              <span className="italic text-ember">quietly, and with everything.</span>”
            </h2>
          </Reveal>

          <Reveal delay={1} className="mt-8 space-y-5 text-base font-light leading-relaxed text-mist">
            <p>
              Zenareeta is the stage name of Sneha Chatterjee — a Mumbai-based
              singer, songwriter and composer who bridges the modern pull of pop
              with the timeless weight of spiritual philosophy. Her music moves
              between the intimate and the eternal: love letters to a mother,
              parables of salt dolls dissolving into the sea, hymns to rivers
              and roses.
            </p>
            <p>
              Raised in the echo of her mother's radio and television career — a
              legacy she now carries forward — Zenareeta writes, composes and
              sings every release herself, and directs her own films. What began
              as meditation becomes melody; what begins as devotion becomes pop.
            </p>
          </Reveal>

          <Reveal delay={2} className="mt-10">
            <ul className="space-y-3 border-l border-wine/40 pl-6">
              {milestones.map((m) => (
                <li key={m} className="flex items-start gap-3 text-sm font-light text-bone/85">
                  <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rotate-45 bg-ember" />
                  {m}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={3} className="mt-10 flex items-end gap-4">
            <span className="font-display text-4xl italic text-bone">Zenareeta</span>
            <span className="mb-2 h-px flex-1 bg-white/10" />
            <span className="mb-1 text-[10px] uppercase tracking-[0.3em] text-mist">
              aka Sneha Chatterjee
            </span>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
