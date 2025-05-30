// src/pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

/**
 * MyDocument is a custom Document component that extends the default Next.js Document.
 * It's used to augment the application's <html> and <body> tags.
 * This is the place to add custom server-side rendered meta tags, link tags for fonts, etc.
 */
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en"> {/* Sets the language of the document to English */} 
        <Head>
          {/* Preconnect to Google Fonts for performance */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          
          {/* Link to Google Fonts: Inter and Poppins as specified in the design system */}
          {/* Weights: Inter (400, 500, 600, 700), Poppins (400, 500, 600, 700) */}
          <link 
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap" 
            rel="stylesheet" 
          />
          
          {/* Favicon link - assuming favicon.ico is in the public directory */}
          <link rel="icon" href="/favicon.ico" />

          {/* Add any other global meta tags, stylesheets, or scripts here */}
          {/* For example, meta description for SEO (though often better per-page) */}
          <meta name="description" content="hueneu - Where stories find their aesthetic. Designs that whisper loud stories." />
        </Head>
        <body>
          <Main /> {/* Renders the page content */}
          <NextScript /> {/* Renders Next.js scripts */}
        </body>
      </Html>
    );
  }
}

export default MyDocument;
