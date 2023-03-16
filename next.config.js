/** @type {import('next').NextConfig} */
 const nextConfig = {
   reactStrictMode: true,
 }

 module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'spoonacular.com',
        port: '',
        pathname: ['/recipeImages/**', '/cdn/ingredients_100x100/*'],
      },
      // {
      //   protocol: 'https',
      //   hostname: 'spoonacular.com',
      //   port: '',
      //   pathname: '/cdn/ingredients_100x100/**',
      // },
    ],
  },
}