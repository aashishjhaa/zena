import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Listen from "./components/Listen";
import Videos from "./components/Videos";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative">
      <div className="grain" aria-hidden />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Listen />
        <Videos />
        <Gallery />
        <About />
      </main>
      <Footer />
    </div>
  );
}
