import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Methods from './components/Methods';
import Certifications from './components/Certifications';
import Promotion from './components/Promotion';
import Testimonials from './components/Testimonials';
import Coverage from './components/Coverage';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-brand-dark">
      <Header />
      <main>
        <Hero />
        <Services />
        <Methods />
        <Certifications />
        <Promotion />
        <Testimonials />
        <Coverage />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default App;