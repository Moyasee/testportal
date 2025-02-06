/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',  // This is optional but recommended for better performance
  images: {
    unoptimized: true   // If you're using next/image
  },
  // Add any other necessary configurations
}

module.exports = nextConfig 