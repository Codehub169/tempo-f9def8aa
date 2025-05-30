// src/pages/index.js
import React from 'react';
import Head from 'next/head';

// Placeholder for Layout component - to be implemented in a future batch
// import Layout from '../components/Layout';

// Placeholders for Section components - to be implemented in future batches
// import HeroSection from '../components/HeroSection';
// import HueneuStorySection from '../components/HueneuStorySection';
// import WhatWeDoSection from '../components/WhatWeDoSection';
// import WhyHueneuSection from '../components/WhyHueneuSection';
// import ContactSection from '../components/ContactSection';

/**
 * HomePage is the main landing page for the hueneu studio website.
 * It will eventually compose all the different sections of the single-page experience.
 * @returns {React.Component} The HomePage component.
 */
const HomePage = () => {
  return (
    // The Layout component will wrap the page content. For now, a simple div.
    // <Layout>
    <div className="min-h-screen bg-hueneu-secondary text-hueneu-dark-text">
      <Head>
        <title>hueneu | Where stories find their aesthetic.</title>
        <meta name="description" content="Designs that whisper loud stories. hueneu is a graphic design studio for story-first, intentional, and evocative branding." />
        {/* Viewport meta tag is often in _document.js or here if specific overrides needed */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Main content container */}
      <main className="container mx-auto px-4 py-8 md:py-16">
        {/* 
          The actual sections will be rendered here in order:
          1. HeroSection
          2. HueneuStorySection
          3. WhatWeDoSection
          4. WhyHueneuSection
          5. ContactSection 
          These components will be implemented in subsequent batches.
        */}
        
        <h1 className="text-4xl font-display text-hueneu-primary font-bold mb-4 text-center">
          Welcome to hueneu
        </h1>
        <p className="text-lg text-hueneu-text text-center mb-8">
          Where stories find their aesthetic. Designs that whisper loud stories.
        </p>
        
        {/* Placeholder content for sections to visualize structure */}
        <div id="hero-placeholder" className="h-96 bg-gray-200/50 rounded-lg flex items-center justify-center my-12 p-8 shadow-sm">
          <p className="text-hueneu-text text-xl">Hero Section (Coming Soon)</p>
        </div>

        <div id="story-placeholder" className="h-64 bg-gray-200/50 rounded-lg flex items-center justify-center my-12 p-8 shadow-sm">
          <p className="text-hueneu-text text-xl">The hueneu Story (Coming Soon)</p>
        </div>

        <div id="services-placeholder" className="h-64 bg-gray-200/50 rounded-lg flex items-center justify-center my-12 p-8 shadow-sm">
          <p className="text-hueneu-text text-xl">What We Do (Coming Soon)</p>
        </div>

        <div id="why-placeholder" className="h-64 bg-gray-200/50 rounded-lg flex items-center justify-center my-12 p-8 shadow-sm">
          <p className="text-hueneu-text text-xl">Why hueneu? (Coming Soon)</p>
        </div>

        <div id="contact-placeholder" className="h-64 bg-gray-200/50 rounded-lg flex items-center justify-center my-12 p-8 shadow-sm">
          <p className="text-hueneu-text text-xl">Let's Work Together (Coming Soon)</p>
        </div>

      </main>

      {/* Footer placeholder - to be added if needed, possibly within Layout */}
      {/* 
      <footer className="text-center py-8 border-t border-hueneu-primary/20">
        <p className="text-sm text-hueneu-text">&copy; {new Date().getFullYear()} hueneu. All rights reserved.</p>
        <p className="text-sm text-hueneu-text mt-1">Instagram: @hueneu_</p>
      </footer> 
      */}
    </div>
    // </Layout>
  );
};

export default HomePage;
