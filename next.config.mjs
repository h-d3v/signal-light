/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true, // Disable TypeScript type errors during build
  },
  output: "export",
  images: {
    unoptimized: true, // Disable image optimization for static hosting
  },
  assetPrefix: '/signal-light', // Use relative paths for static resources
  basePath: '/signal-light',
};


export default nextConfig;