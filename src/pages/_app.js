import '../styles/globals.css';

/**
 * Custom App component.
 *
 * Next.js uses this file to initialise pages. It imports the global
 * stylesheet so that Tailwind classes are available throughout the app.
 */
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}