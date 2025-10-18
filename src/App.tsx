import Header from "./sections/Header/Header";
import Hero from "./sections/Hero/Hero";
import Features from "./sections/Features/Features";
import Pricing from "./sections/Pricing/Pricing";
import FAQ from "./sections/FAQ/FAQ";
import Contact from "./sections/Contact/Contact";

import "./App.scss";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
    </>
  );
}

export default App;
