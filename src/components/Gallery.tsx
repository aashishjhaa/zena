import Reveal from "./Reveal";
import { img } from "@/data";

interface Tile {
  src: string;
  caption: string;
  meta: string;
  className: string;
  filter?: string;
}

const tiles: Tile[] = [
  {
    src: img.hero,
    caption: "In velvet",
    meta: "Studio session · Mumbai",
    className: "aspect-[3/4]",
  },
  {
    src: img.noir,
    caption: "Noir",
    meta: "Editorial · Silver gelatin",
    className: "aspect-[3/4]",
  },
  {
    src: img.warm,
    caption: "Candlelight",
    meta: "Press portrait",
    className: "aspect-[3/4]",
  },
  {
    src: img.stage,
    caption: "Live",
    meta: "On stage · Red haze",
    className: "aspect-[16/10] md:col-span-2",
  },
  {
    src: img.detail,
    caption: "Gold & static",
    meta: "Still life · Detail",
    className: "aspect-[16/10] md:aspect-auto",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="relative mx-auto max-w-7xl px-5 py-28 sm:px-8 md:py-36">
      <div className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-wine/12 blur-[130px]" />

      <Reveal className="mb-16 flex flex-col gap-4 md:mb-20 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="mb-4 flex items-center gap-4 text-[11px] font-medium uppercase tracking-[0.4em] text-ember">
            <span className="h-px w-10 bg-ember" /> 03 — Gallery
          </p>
          <h2 className="font-display text-6xl font-light leading-none text-bone md:text-8xl">
            In <span className="italic text-ember">frame</span>
          </h2>
        </div>
        <p className="max-w-sm text-sm font-light leading-relaxed text-mist">
          A study in shadow and crimson — moments between the microphone and
          the mirror.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-5">
        {tiles.map((t, i) => (
          <Reveal
            as="figure"
            key={t.caption}
            delay={(i % 3) as 0 | 1 | 2}
            className={`group relative overflow-hidden border border-white/8 bg-coal ${t.className}`}
          >
            <img
              src={t.src}
              alt={t.caption}
              loading="lazy"
              className={`h-full w-full object-cover transition-all duration-[1400ms] ease-out group-hover:scale-[1.06] ${t.filter ?? ""}`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-90" />
            <figcaption className="absolute inset-x-0 bottom-0 translate-y-3 p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              <p className="font-display text-2xl font-light italic text-bone">{t.caption}</p>
              <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.26em] text-mist">
                {t.meta}
              </p>
            </figcaption>
            <span className="absolute right-4 top-4 h-2 w-2 rotate-45 bg-ember opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
