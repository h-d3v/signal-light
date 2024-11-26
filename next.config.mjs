/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true, // Disable TypeScript type errors during build
  },
  output: "export",
  images: {
    unoptimized: true, // Disable image optimization for static hosting
  },
  experimental: {
    turbopack: true, // Explicitly enable Turbopack experimental support
  },
  assetPrefix: './', // Use relative paths for static resources
  basePath: '',
};


export default nextConfig;