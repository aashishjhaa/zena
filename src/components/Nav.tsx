import { useEffect, useState } from "react";
import { cn } from "@/utils/cn";

const links = [
  { label: "Listen", href: "#listen" },
  { label: "Videos", href: "#videos" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "border-b border-white/5 bg-ink/85 py-3 backdrop-blur-md"
            : "border-b border-transparent bg-transparent py-5"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
          <a
            href="#top"
            className="group flex items-center gap-3"
            onClick={() => setOpen(false)}
          >
            <span className="grid h-8 w-8 place-items-center border border-ember/60 font-display text-sm italic text-ember transition-colors duration-300 group-hover:bg-wine group-hover:text-bone">
              Z
            </span>
            <span className="font-display text-lg tracking-[0.35em] text-bone">
              ZENAREETA
            </span>
          </a>

          <nav className="hidden items-center gap-9 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="n-link text-[11px] font-medium uppercase tracking-[0.28em] text-mist transition-colors duration-300 hover:text-bone"
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://open.spotify.com/artist/5G1oHobs0RzR0yirl3RuKT"
              target="_blank"
              rel="noreferrer"
              className="border border-bone/25 px-5 py-2 text-[11px] font-medium uppercase tracking-[0.28em] text-bone transition-all duration-300 hover:border-wine hover:bg-wine"
            >
              Stream
            </a>
          </nav>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-[7px] md:hidden"
          >
            <span
              className={cn(
                "h-px w-7 bg-bone transition-all duration-500",
                open && "translate-y-[4px] rotate-45"
              )}
            />
            <span
              className={cn(
                "h-px w-7 bg-bone transition-all duration-500",
                open && "-translate-y-[4px] -rotate-45"
              )}
            />
          </button>
        </div>
      </header>

      {/* mobile overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 flex flex-col justify-center bg-ink/97 px-8 backdrop-blur-xl transition-all duration-500 md:hidden",
          open ? "visible opacity-100" : "invisible opacity-0"
        )}
      >
        <nav className="flex flex-col gap-2">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${i * 70 + 120}ms` : "0ms" }}
              className={cn(
                "font-display text-5xl font-light text-bone transition-all duration-500 hover:italic hover:text-ember",
                open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              )}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div
          className={cn(
            "mt-12 flex items-center gap-6 text-[11px] uppercase tracking-[0.3em] text-mist transition-all delay-500 duration-500",
            open ? "opacity-100" : "opacity-0"
          )}
        >
          <span>Mumbai</span>
          <span className="h-px w-10 bg-wine" />
          <span>Singer · Songwriter</span>
        </div>
      </div>
    </>
  );
}
