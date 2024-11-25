/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true, // Disable TypeScript type errors during build
  },
  output: "export",
  images: {
    unoptimized: true, // Disable image optimization for static hosting
  },
  basePath: "/your-repo-name", // Replace with your GitHub repository name
  assetPrefix: "/your-repo-name", // Ensure assets are loaded correctly
};
export default nextConfig;
