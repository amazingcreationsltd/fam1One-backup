import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { AudienceProvider } from './context/AudienceContext';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import { Preloader } from './components/Preloader';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AudienceFork } from './components/AudienceFork';
import { DistrictOutdoorShowcase } from './components/DistrictOutdoorShowcase';
import { CreatorStudioSuite } from './components/CreatorStudioSuite';
import { BentoServices } from './components/BentoServices';
import { PhoneShowcase } from './components/PhoneShowcase';
import { ServiceAccordion } from './components/ServiceAccordion';
import { Workflow } from './components/Workflow';
import { Testimonials } from './components/Testimonials';
import { CreatorRoster } from './components/CreatorRoster';
import { Calculator } from './components/Calculator';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';

const AppContent: React.FC = () => {
  const [isLoaded, setIsLoaded] = React.useState(false);

  // Initialize smooth scroll foundation
  useSmoothScroll();

  return (
    <div className="bg-primary text-white min-h-screen selection-accent relative overflow-x-hidden transition-colors duration-300">
      <Preloader onComplete={() => setIsLoaded(true)} />
      <Navbar isLoaded={isLoaded} />
      <main className="w-full max-w-full">
        <Hero isLoaded={isLoaded} />
        <AudienceFork />
        <DistrictOutdoorShowcase />
        <CreatorStudioSuite />
        <BentoServices />
        <PhoneShowcase />
        <ServiceAccordion />
        <Workflow />
        <Testimonials />
        <CreatorRoster />
        <Calculator />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AudienceProvider>
        <AppContent />
      </AudienceProvider>
    </ThemeProvider>
  );
};

export default App;
