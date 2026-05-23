import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ViewAllProjects from './components/ViewAllProjects';

function App() {
  const [showAllProjects, setShowAllProjects] = useState(false);

  if (showAllProjects) {
    return <ViewAllProjects onBack={() => setShowAllProjects(false)} />;
  }

  return (
    <div className="bg-black min-h-screen">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects onViewAll={() => setShowAllProjects(true)} />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;