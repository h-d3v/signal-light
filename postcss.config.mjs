/** @type {import('next').NextConfig} */
const config = {
  plugins: {
    tailwindcss: {},
  },
  output: 'export',
  images: {
    unoptimized: true, // Optional: For GitHub Pages or other static hosting
  }
};

module.exports = nextConfig;