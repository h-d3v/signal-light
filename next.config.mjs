/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true, // Disable TypeScript type errors during build
  },
  output: "export",
  images: {
    unoptimized: true, // Disable image optimization for static hosting
  },
  basePath: "/signal-light", // Replace with your GitHub repository name
  assetPrefix: "/signal-light", // Ensure assets are loaded correctly
};

export default nextConfig;