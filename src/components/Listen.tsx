import { FaPlay, FaSpotify, FaYoutube } from "react-icons/fa";

function ArrowUpRight({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 12 12" className={className} fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden>
      <path d="M2.5 9.5L9.5 2.5M4 2.5h5.5V8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
import Reveal from "./Reveal";
import { img, SPOTIFY_EMBED, SPOTIFY_ARTIST, tracks } from "@/data";

export default function Listen() {
  return (
    <section id="listen" className="relative mx-auto max-w-7xl px-5 py-28 sm:px-8 md:py-36">
      <div className="pointer-events-none absolute -right-40 top-20 h-80 w-80 rounded-full bg-wine/15 blur-[120px]" />

      <Reveal className="mb-16 flex flex-col gap-4 md:mb-20 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="mb-4 flex items-center gap-4 text-[11px] font-medium uppercase tracking-[0.4em] text-ember">
            <span className="h-px w-10 bg-ember" /> 01 — Discography
          </p>
          <h2 className="font-display text-6xl font-light leading-none text-bone md:text-8xl">
            Listen<span className="italic text-ember">.</span>
          </h2>
        </div>
        <p className="max-w-sm text-sm font-light leading-relaxed text-mist">
          Five releases, one thread — devotion rendered in modern pop. Press
          play and let the room go quiet.
        </p>
      </Reveal>

      <div className="grid gap-8 lg:grid-cols-12">
        {/* featured release */}
        <Reveal className="lg:col-span-5">
          <article className="group relative overflow-hidden border border-white/8 bg-coal">
            <div className="relative aspect-square overflow-hidden">
              <img
                src={img.warm}
                alt="Zenareeta — SumuHood single artwork"
                className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.07]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-coal via-transparent to-transparent" />
              <span className="absolute left-5 top-5 bg-wine px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.28em] text-bone">
                Latest Release
              </span>
            </div>
            <div className="p-7">
              <h3 className="font-display text-4xl font-light italic text-bone">SumuHood</h3>
              <p className="mt-3 text-sm font-light leading-relaxed text-mist">
                Born from meditation — a soaring tribute to the mother who set
                aside her own stage to raise mine.
              </p>
              <div className="mt-6 flex items-center gap-4">
                <a
                  href={SPOTIFY_ARTIST}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-bone transition-colors hover:text-ember"
                >
                  <FaSpotify /> Spotify
                </a>
                <span className="h-3 w-px bg-white/20" />
                <a
                  href="https://youtu.be/vVyA3AewJnI"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-bone transition-colors hover:text-ember"
                >
                  <FaYoutube /> Video
                </a>
              </div>
            </div>
          </article>
        </Reveal>

        {/* spotify embed */}
        <Reveal delay={1} className="lg:col-span-7">
          <div className="flex h-full flex-col border border-white/8 bg-coal p-5 sm:p-7">
            <div className="mb-5 flex items-center justify-between">
              <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-mist">
                On Spotify — full catalogue
              </p>
              <span className="eq on text-ember" aria-hidden>
                <span /><span /><span /><span />
              </span>
            </div>
            <iframe
              title="Zenareeta on Spotify"
              src={SPOTIFY_EMBED}
              width="100%"
              height="452"
              frameBorder="0"
              loading="lazy"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              className="w-full flex-1 rounded-md"
              style={{ minHeight: 400 }}
            />
          </div>
        </Reveal>
      </div>

      {/* track list */}
      <ul className="mt-16 border-t border-white/8 md:mt-20">
        {tracks.map((t, i) => (
          <Reveal as="li" key={t.title} delay={(i % 4) as 0 | 1 | 2 | 3}>
            <a
              href={t.href}
              target="_blank"
              rel="noreferrer"
              className="group grid grid-cols-[auto_1fr_auto] items-center gap-5 border-b border-white/8 py-6 transition-all duration-500 hover:bg-white/[0.03] hover:pl-4 md:grid-cols-[3rem_1fr_auto_auto] md:gap-8 md:py-7"
            >
              <span className="font-display text-sm italic text-mist transition-colors group-hover:text-ember">
                {t.n}
              </span>
              <span className="min-w-0">
                <span className="flex items-center gap-4">
                  <span className="truncate font-display text-2xl font-light text-bone transition-all duration-300 group-hover:italic group-hover:text-ember md:text-4xl">
                    {t.title}
                  </span>
                  <span className="eq hidden text-ember sm:inline-flex" aria-hidden>
                    <span /><span /><span /><span />
                  </span>
                </span>
                <span className="mt-1 block truncate text-xs font-light tracking-wide text-mist md:text-sm">
                  {t.note}
                </span>
              </span>
              <span className="hidden text-[10px] font-medium uppercase tracking-[0.26em] text-mist md:block">
                {t.tag}
              </span>
              <span className="grid h-10 w-10 place-items-center border border-white/15 text-bone transition-all duration-300 group-hover:border-wine group-hover:bg-wine">
                <FaPlay className="text-[9px]" />
              </span>
            </a>
          </Reveal>
        ))}
      </ul>

      <Reveal className="mt-10 flex justify-end">
        <a
          href={SPOTIFY_ARTIST}
          target="_blank"
          rel="noreferrer"
          className="u-link inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-bone"
        >
          Full discography on Spotify <ArrowUpRight className="h-2.5 w-2.5" />
        </a>
      </Reveal>
    </section>
  );
}
