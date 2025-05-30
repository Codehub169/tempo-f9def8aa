// Main layout component for the application
// Path: src/components/Layout.js
import Head from 'next/head';

const Layout = ({ children, title = 'hueneu • Designs that whisper loud stories', description = 'hueneu is a graphic design studio. Where stories find their aesthetic.' }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Favicon link is in _document.js, but can also be reiterated here or managed centrally */}
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      {/* The main container for page content. Global styles like background and default text color
          are typically applied to the `body` tag in `globals.css` or `_app.js`. 
          This <main> tag serves as a semantic wrapper for the primary content of the page. */}
      <main className="font-sans antialiased">
        {children}
      </main>
    </>
  );
};

export default Layout;
