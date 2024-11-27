/** @type {import('next').NextConfig} */
module.exports = {
  output: "export",
  images: {
    unoptimized: true, // Disable image optimization for static hosting
  },
  assetPrefix: '/signal-light', // Use relative paths for static resources
  basePath: '/signall-light', 
};