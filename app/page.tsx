import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import HowWeWork from "./components/HowWeWork";
import Services from "./components/Services";
import WorkHighlights from "./components/WorkHighlights";
import Products from "./components/Products";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <HowWeWork />
      <Services />
      <WorkHighlights />
      <Products />
      <Contact />
      <Footer />
    </>
  );
}
