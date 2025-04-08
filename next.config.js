/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com', 'res.cloudinary.com', 'tile.openstreetmap.org'],
  },
};

module.exports = nextConfig;