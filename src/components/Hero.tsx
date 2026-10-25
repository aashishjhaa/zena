import { useEffect, useRef } from "react";
import { FaPlay, FaSpotify } from "react-icons/fa";
import { img, SPOTIFY_ARTIST } from "@/data";

function Laurel() {
  return (
    <svg viewBox="0 0 120 60" className="h-10 w-24 text-gold" fill="none" aria-hidden>
      <g stroke="currentColor" strokeWidth="1.1" strokeLinecap="round">
        <path d="M14 8c-6 14-4 30 10 42" />
        <path d="M106 8c6 14 4 30-10 42" />
      </g>
      <g fill="currentColor">
        {[0, 1, 2, 3, 4].map((i) => (
          <g key={`l${i}`}>
            <ellipse cx={12 - i * 0.5} cy={14 + i * 8} rx="5" ry="2" transform={`rotate(${-58 + i * 9} ${12 - i * 0.5} ${14 + i * 8})`} />
            <ellipse cx={108 + i * 0.5} cy={14 + i * 8} rx="5" ry="2" transform={`rotate(${58 - i * 9} ${108 + i * 0.5} ${14 + i * 8})`} />
          </g>
        ))}
      </g>
    </svg>
  );
}

export default function Hero() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        if (parallaxRef.current) {
          const y = window.scrollY;
          parallaxRef.current.style.transform = `translate3d(0, ${y * 0.28}px, 0)`;
        }
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="top" className="relative h-[100svh] min-h-[620px] w-full overflow-hidden">
      {/* parallax layer */}
      <div ref={parallaxRef} className="absolute inset-0 will-change-transform">
        <div className="kenburns h-full w-full">
          <img
            src={img.hero}
            alt="Zenareeta in front of a crimson curtain at the studio microphone"
            className="h-full w-full object-cover object-[50%_22%]"
          />
        </div>
      </div>

      {/* atmosphere overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-ink/45" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-transparent to-ink/30" />
      <div className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-wine/25 blur-[130px]" />

      {/* vertical rail */}
      <div className="absolute right-6 top-1/2 hidden -translate-y-1/2 rotate-180 items-center gap-4 [writing-mode:vertical-rl] lg:flex">
        <span className="text-[10px] uppercase tracking-[0.5em] text-mist">
          Mumbai — a voice between worlds
        </span>
        <span className="h-16 w-px bg-gradient-to-b from-transparent via-ember to-transparent" />
      </div>

      {/* content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-5 pb-24 sm:px-8 md:pb-20">
        <p
          className="rise mb-5 flex items-center gap-4 text-[11px] font-medium uppercase tracking-[0.42em] text-ember"
          style={{ animationDelay: "0.25s" }}
        >
          <span className="h-px w-10 bg-ember" />
          Singer · Songwriter · Composer
        </p>

        <h1 className="rise font-display font-light leading-[0.86] tracking-[-0.02em] text-bone" style={{ animationDelay: "0.4s" }}>
          <span className="block text-[clamp(3.4rem,13.5vw,11.5rem)]">ZENA</span>
          <span className="block text-[clamp(3.4rem,13.5vw,11.5rem)] italic text-bone/90">
            reeta<span className="text-ember">.</span>
          </span>
        </h1>

        <div
          className="rise mt-8 flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
          style={{ animationDelay: "0.6s" }}
        >
          <p className="max-w-md text-base font-light leading-relaxed text-mist md:text-lg">
            Music that heals, uplifts and connects — contemporary pop woven
            with timeless, spiritual philosophy.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href={SPOTIFY_ARTIST}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 bg-wine px-7 py-4 text-[12px] font-semibold uppercase tracking-[0.26em] text-bone transition-all duration-300 hover:bg-ember hover:shadow-[0_10px_40px_-10px_rgba(207,84,104,0.7)]"
            >
              <FaSpotify className="text-base transition-transform duration-300 group-hover:scale-110" />
              Stream “SumuHood”
            </a>
            <a
              href="#videos"
              className="group inline-flex items-center gap-3 border border-bone/25 px-7 py-4 text-[12px] font-medium uppercase tracking-[0.26em] text-bone transition-all duration-300 hover:border-bone hover:bg-bone hover:text-ink"
            >
              <FaPlay className="text-[10px] transition-transform duration-300 group-hover:scale-125" />
              Watch the film
            </a>
          </div>
        </div>
      </div>

      {/* award badge */}
      <div className="rise absolute bottom-24 right-8 z-10 hidden flex-col items-center gap-1 text-center xl:flex" style={{ animationDelay: "0.9s" }}>
        <Laurel />
        <p className="text-[9px] uppercase tracking-[0.3em] text-gold">OnCreations</p>
        <p className="font-display text-sm italic text-bone">Europe Music Video Awards</p>
        <p className="text-[9px] uppercase tracking-[0.3em] text-mist">Honorable Mention</p>
      </div>

      {/* scroll cue */}
      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3">
        <span className="text-[9px] uppercase tracking-[0.4em] text-mist">Scroll</span>
        <span className="cue-line block h-10 w-px bg-ember" />
      </div>
    </section>
  );
}
