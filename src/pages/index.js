// src/pages/index.js
import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import HueneuStorySection from '../components/HueneuStorySection';
import WhatWeDoSection from '../components/WhatWeDoSection';
import WhyHueneuSection from '../components/WhyHueneuSection';
import ContactSection from '../components/ContactSection';

/**
 * HomePage is the main landing page for the hueneu studio website.
 * It composes all the different sections of the single-page experience.
 * @returns {React.Component} The HomePage component.
 */
const HomePage = () => {
  return (
    <Layout>
      <Head>
        <title>hueneu | Where stories find their aesthetic.</title>
        <meta name="description" content="Designs that whisper loud stories. hueneu is a graphic design studio for story-first, intentional, and evocative branding." />
        {/* Viewport meta tag is managed by the Layout component or _document.js */}
      </Head>

      <HeroSection />
      <HueneuStorySection />
      <WhatWeDoSection />
      <WhyHueneuSection />
      <ContactSection />
      
    </Layout>
  );
};

export default HomePage;
