import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import Reveal from "./Reveal";
import { videos, type Video } from "@/data";
import { cn } from "@/utils/cn";

function VideoCard({ video, large }: { video: Video; large?: boolean }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <article className="group">
      <div
        className={cn(
          "relative aspect-video w-full overflow-hidden border border-white/8 bg-coal",
          !loaded && "cursor-pointer"
        )}
        onClick={() => !loaded && setLoaded(true)}
      >
        {loaded ? (
          <iframe
            title={video.title}
            src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0`}
            className="absolute inset-0 h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <>
            <img
              src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
              alt={`${video.title} — video still`}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover opacity-70 saturate-[0.8] transition-all duration-[1200ms] ease-out group-hover:scale-105 group-hover:opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />
            <div className="absolute inset-0 grid place-items-center">
              <span className="grid h-16 w-16 place-items-center rounded-full border border-bone/40 bg-ink/40 text-bone backdrop-blur-sm transition-all duration-500 group-hover:scale-110 group-hover:border-wine group-hover:bg-wine md:h-20 md:w-20">
                <FaPlay className="ml-1 text-sm md:text-base" />
              </span>
            </div>
            <span className="absolute bottom-4 left-5 text-[10px] font-medium uppercase tracking-[0.3em] text-mist">
              Play film
            </span>
          </>
        )}
      </div>
      <div className="mt-5 flex items-baseline justify-between gap-4">
        <h3
          className={cn(
            "font-display font-light text-bone transition-colors duration-300 group-hover:text-ember",
            large ? "text-3xl italic md:text-5xl" : "text-2xl italic md:text-3xl"
          )}
        >
          {video.title}
        </h3>
        <p className="hidden shrink-0 text-[10px] font-medium uppercase tracking-[0.24em] text-mist sm:block">
          {video.sub}
        </p>
      </div>
      <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.24em] text-mist sm:hidden">
        {video.sub}
      </p>
    </article>
  );
}

export default function Videos() {
  return (
    <section id="videos" className="relative border-t border-white/5 bg-coal/40 py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mb-16 flex flex-col gap-4 md:mb-20 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 flex items-center gap-4 text-[11px] font-medium uppercase tracking-[0.4em] text-ember">
              <span className="h-px w-10 bg-ember" /> 02 — Visuals
            </p>
            <h2 className="font-display text-6xl font-light leading-none text-bone md:text-8xl">
              Music <span className="italic text-ember">films</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm font-light leading-relaxed text-mist">
            Self-directed, soft-focus vignettes — every frame a continuation of
            the lyric.
          </p>
        </Reveal>

        <Reveal>
          <VideoCard video={videos[0]} large />
        </Reveal>

        <div className="mt-12 grid gap-12 md:mt-16 md:grid-cols-2 md:gap-8">
          {videos.slice(1).map((v, i) => (
            <Reveal key={v.id} delay={(i + 1) as 1 | 2}>
              <VideoCard video={v} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
