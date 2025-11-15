/**
 * Tailwind CSS configuration file.
 *
 * The `content` array points Tailwind at all of our source files so that
 * unused styles can be purged in production. A custom colour palette is
 * defined to support the gradient heading used throughout the docs.
 */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Custom colours for the gradient heading
        gradientStart: '#a855f7', // purple
        gradientEnd: '#3b82f6',   // blue
      },
    },
  },
  plugins: [],
};