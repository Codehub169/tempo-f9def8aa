// HeroSection component for the hueneu website
// Path: src/components/HeroSection.js
import AnimatedLogo from './AnimatedLogo';
import ScrollIndicator from './ScrollIndicator'; 

const HeroSection = () => {
  return (
    // Section container: full viewport height, flexbox for centering content, 
    // background color set to hueneu-secondary (Soft Warm Grey).
    // Padding applied for spacing, and relative positioning for potential absolute elements like scroll indicator.
    <section 
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center bg-hueneu-secondary text-center p-6 sm:p-8 relative overflow-hidden"
    >
      {/* Container for the AnimatedLogo, with significant bottom margin for visual separation */}
      <div className="mb-10 md:mb-12">
        <AnimatedLogo />
      </div>

      {/* Tagline: Uses display font (Poppins), large responsive text size, primary color, semibold weight, with bottom margin. */}
      <h1 
        className="font-display text-3xl sm:text-4xl md:text-5xl text-hueneu-primary font-semibold max-w-xl lg:max-w-2xl mx-auto mb-4"
      >
        Where stories find their aesthetic.
      </h1>

      {/* Subtext: Uses sans-serif font (Inter), medium responsive text size, a slightly lighter neutral text color for hierarchy,
          max width for readability, with bottom margin. */}
      <p 
        className="font-sans text-base sm:text-lg md:text-xl text-neutral-700 max-w-md lg:max-w-lg mx-auto mb-12 sm:mb-16"
      >
        Designs that whisper loud stories.
      </p>

      <ScrollIndicator />
    </section>
  );
};

export default HeroSection;
