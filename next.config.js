/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["mongoose"],
    env: {
      DB_URL :"mongodb+srv://kin83:kashi8320@cluster0.afhdeml.mongodb.net/?retryWrites=true&w=majority"
    }
  },
  
  
  images: {
    domains: ['images.pexels.com' ,
    'images-na.ssl-images-amazon.com',
  ],
  },
}

module.exports = nextConfig
