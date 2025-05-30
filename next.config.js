/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Assuming placeholder images might be used from unsplash during development or for content.
    // This should be updated if specific image CDNs or sources are decided.
    domains: ['images.unsplash.com'], 
  },
  experimental: {
    // optimizeUniversalDefaults was historically used for some Framer Motion features.
    // For Next.js 14+, it might not be strictly necessary or could be managed differently.
    // Keeping it as per initial thought process; can be revisited if issues arise.
    optimizeUniversalDefaults: true 
  }
}

module.exports = nextConfig
