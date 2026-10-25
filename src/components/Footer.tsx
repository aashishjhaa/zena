import { FaInstagram, FaSpotify, FaYoutube } from "react-icons/fa";
import Reveal from "./Reveal";
import { EMAIL, INSTAGRAM, SPOTIFY_ARTIST, YOUTUBE } from "@/data";

const socials = [
  { label: "Instagram", href: INSTAGRAM, icon: FaInstagram },
  { label: "Spotify", href: SPOTIFY_ARTIST, icon: FaSpotify },
  { label: "YouTube", href: YOUTUBE, icon: FaYoutube },
];

export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden border-t border-white/5 bg-ink">
      <div className="pointer-events-none absolute -bottom-48 left-1/2 h-96 w-[42rem] -translate-x-1/2 rounded-full bg-wine/15 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-32">
        <Reveal className="flex flex-col items-start gap-6">
          <p className="flex items-center gap-4 text-[11px] font-medium uppercase tracking-[0.4em] text-ember">
            <span className="h-px w-10 bg-ember" /> 05 — Contact
          </p>
          <h2 className="max-w-3xl font-display text-5xl font-light leading-[1.05] text-bone md:text-7xl">
            Let's make something <span className="italic text-ember">eternal</span>.
          </h2>
          <p className="max-w-md text-sm font-light leading-relaxed text-mist">
            For bookings, press, collaborations and quiet conversations about
            music — write to me.
          </p>
          <a
            href={`mailto:${EMAIL}`}
            className="u-link mt-2 font-display text-2xl font-light italic text-bone md:text-4xl"
          >
            {EMAIL}
          </a>
        </Reveal>

        <Reveal delay={1} className="mt-16 flex flex-wrap items-center gap-4 md:mt-20">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className="group flex items-center gap-3 border border-white/15 px-6 py-3.5 text-[11px] font-medium uppercase tracking-[0.26em] text-bone transition-all duration-300 hover:border-wine hover:bg-wine"
            >
              <s.icon className="text-base transition-transform duration-300 group-hover:scale-110" />
              {s.label}
            </a>
          ))}
        </Reveal>

        <div className="mt-20 flex flex-col gap-6 border-t border-white/8 pt-8 text-[10px] font-medium uppercase tracking-[0.26em] text-mist md:flex-row md:items-center md:justify-between">
          <p>© 2026 Zenareeta · All rights reserved</p>
          <nav className="flex flex-wrap gap-6">
            <a href="#listen" className="u-link hover:text-bone">Listen</a>
            <a href="#videos" className="u-link hover:text-bone">Videos</a>
            <a href="#gallery" className="u-link hover:text-bone">Gallery</a>
            <a href="#about" className="u-link hover:text-bone">About</a>
          </nav>
          <a href="#top" className="u-link hover:text-bone">
            Back to top ↑
          </a>
        </div>
      </div>

      {/* oversized watermark */}
      <div aria-hidden className="pointer-events-none select-none overflow-hidden">
        <p className="-mb-[0.28em] whitespace-nowrap text-center font-display text-[clamp(4rem,17vw,15rem)] font-light italic leading-none text-white/[0.04]">
          Zenareeta
        </p>
      </div>
    </footer>
  );
}
