// src/pages/_app.js
import '../styles/globals.css'; // Imports global styles for the application.

/**
 * MyApp component is the top-level component which will be common across all different pages.
 * You can use this App component to keep state when navigating between pages, for example.
 * @param {object} props - The props object.
 * @param {React.ComponentType} props.Component - The active page, so whenever you navigate between routes, Component will change to the new page.
 * @param {object} props.pageProps - An object with the initial props that were preloaded for your page by one of our data fetching methods, otherwise it's an empty object.
 * @returns {React.Component} The component to render.
 */
function MyApp({ Component, pageProps }) {
  // This is the main application shell.
  // It's used to apply global styles, layout, and persist state across page navigations.
  return <Component {...pageProps} />;
}

export default MyApp;
