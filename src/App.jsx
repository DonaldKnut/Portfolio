// import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/UI/Hero";
import Stack from "./components/UI/Stack";
import Services from "./components/UI/Services";
import Portfolio from "./components/UI/Portfolio";
import Projects from "./components/UI/Projects";
import Contact from "./components/UI/Contact";
import ContactSection from "./components/UI/ContactSection";
import Footer from "./components/UI/Footer";

function App() {
  // const [count, setCount] = useState();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stack />
        <Services />
        <Portfolio />
        <Contact />
        {/* <ContactSection /> */}
        <Footer />
      </main>
    </>
  );
}

export default App;
