const items = [
  "New single “SumuHood” — out now",
  "Europe Music Video Awards · Honorable Mention",
  "1M+ views on Instagram Reels",
  "“Rhythm of The Ganga” — 100K streams",
];

function Spark() {
  return (
    <svg viewBox="0 0 12 12" className="mx-8 h-2.5 w-2.5 shrink-0 text-ember" fill="currentColor" aria-hidden>
      <path d="M6 0l1.4 4.6L12 6 7.4 7.4 6 12 4.6 7.4 0 6l4.6-1.4z" />
    </svg>
  );
}

export default function Marquee() {
  const row = (
    <div className="flex shrink-0 items-center">
      {items.map((t) => (
        <span key={t} className="flex items-center whitespace-nowrap">
          <span className="font-display text-lg italic text-bone/90 md:text-xl">{t}</span>
          <Spark />
        </span>
      ))}
    </div>
  );

  return (
    <div className="marquee relative overflow-hidden border-y border-white/8 bg-coal py-5">
      <div className="marquee-track flex w-max">
        {row}
        <div aria-hidden className="flex shrink-0 items-center">
          {items.map((t) => (
            <span key={t} className="flex items-center whitespace-nowrap">
              <span className="font-display text-lg italic text-bone/90 md:text-xl">{t}</span>
              <Spark />
            </span>
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-coal to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-coal to-transparent" />
    </div>
  );
}
