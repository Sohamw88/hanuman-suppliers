import React from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Materials from './components/Materials';
import WhyUs from './components/WhyUs';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <Materials />
        <WhyUs />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
