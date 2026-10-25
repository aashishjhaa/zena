import hero from "./assets/hero.jpg";
import noir from "./assets/noir.jpg";
import warm from "./assets/warm.jpg";
import stage from "./assets/stage.jpg";
import detail from "./assets/detail.jpg";

export const img = { hero, noir, warm, stage, detail };

export const SPOTIFY_ARTIST = "https://open.spotify.com/artist/5G1oHobs0RzR0yirl3RuKT";
export const SPOTIFY_EMBED =
  "https://open.spotify.com/embed/artist/5G1oHobs0RzR0yirl3RuKT?utm_source=generator&theme=0";
export const INSTAGRAM = "https://www.instagram.com/zenareeta/";
export const YOUTUBE = "https://www.youtube.com/@Zenareeta";
export const EMAIL = "hello@zenareeta.com";

export interface Track {
  n: string;
  title: string;
  tag: string;
  note: string;
  href: string;
}

export const tracks: Track[] = [
  {
    n: "01",
    title: "SumuHood",
    tag: "Latest Single · 2026",
    note: "The song I wrote for my mother",
    href: "https://youtu.be/vVyA3AewJnI",
  },
  {
    n: "02",
    title: "Doll of Salt",
    tag: "Single · 2025",
    note: "A parable of the ocean, dissolved",
    href: "https://youtu.be/KrxgshWOv4g",
  },
  {
    n: "03",
    title: "The Rose",
    tag: "Single · 2025",
    note: "An English pop ode to the divine",
    href: SPOTIFY_ARTIST,
  },
  {
    n: "04",
    title: "Rhythm of The Ganga",
    tag: "Single · 2025",
    note: "100,000+ streams and flowing",
    href: SPOTIFY_ARTIST,
  },
  {
    n: "05",
    title: "Like a Prayer",
    tag: "Cover · Madonna",
    note: "A hymn reimagined in my own voice",
    href: "https://youtu.be/hsYdbUdf1r8",
  },
];

export interface Video {
  id: string;
  title: string;
  sub: string;
}

export const videos: Video[] = [
  {
    id: "vVyA3AewJnI",
    title: "SumuHood",
    sub: "Official Video · A letter to my mother",
  },
  {
    id: "KrxgshWOv4g",
    title: "Doll of Salt",
    sub: "Official Video · Festive light, spiritual depth",
  },
  {
    id: "hsYdbUdf1r8",
    title: "Like a Prayer",
    sub: "Cover · Madonna, reimagined",
  },
];

export const milestones = [
  "Honorable Mention — OnCreations Europe Music Video Awards",
  "“Rhythm of The Ganga” — 100,000+ streams on Spotify",
  "Debut single — 149,000 YouTube views in its first 24 hours",
  "1,000,000+ views across Instagram Reels",
];
