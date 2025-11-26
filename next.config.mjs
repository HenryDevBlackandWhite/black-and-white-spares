/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable Turbopack and fall back to the stable Webpack builder
  experimental: {
    turbo: false,
  },
};

export default nextConfig;