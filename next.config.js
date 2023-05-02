/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["mongoose"],
  },


  images: {
    domains: ['images.pexels.com',
      'images-na.ssl-images-amazon.com',
    ],
  },

  env: {
    customKey: 'my-value',

    GITHUB_ID: 'f8764bfe9404a4c52498',
    GITHUB_SECRET: '230b1f4a3403966071924130260ff1037978846d',

    GOOGLE_ID: '895257784684-11pie4kjidu59hk4vhl7s55u8rkvgl26.apps.googleusercontent.com',
    GOOGLE_SECRET: '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',
  },
}

module.exports = nextConfig
