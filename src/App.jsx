import React from 'react';
import bgTop from './assets/images/bg-tablet-pattern.svg';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Newsletter } from './components/Newsletter';
import { Testimonials } from './components/Testimonials';

export const App = () => {
  return (
    <div>
      <img src={bgTop} alt="" className="bgTop" />
      <Header />
      <Hero />
      <About />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
};
