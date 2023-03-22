/** @type {import('next').NextConfig} */
 const nextConfig = {
   reactStrictMode: true,
 }

//  module.exports = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'spoonacular.com',
//         port: '',
//         pathname: '/recipeImages/**',
//       },
//       // {
//       //   protocol: 'https',
//       //   hostname: 'spoonacular.com',
//       //   port: '',
//       //   pathname: '/cdn/ingredients_100x100/**',
//       // },
//     ],
//   },
// }

module.exports = {
  images: {
    domains: ["spoonacular.com"]
  },
}