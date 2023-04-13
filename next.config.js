/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["mongoose"]
  },
  
  
  images: {
    domains: ['images.pexels.com' ,
    'images-na.ssl-images-amazon.com',
  ],
  },
}

module.exports = nextConfig
