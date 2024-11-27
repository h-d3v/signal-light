/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true, // Disable TypeScript type errors during build
  },
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true, // Disable image optimization for static hosting
  },
  assetPrefix: '.', // Use relative paths for static resources
  basePath: ''
};


export default nextConfig;