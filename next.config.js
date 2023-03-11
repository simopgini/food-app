/** @type {import('next').NextConfig} */
 const nextConfig = {
   reactStrictMode: true,
   images: {
    domains: ['spoonacular.com'],
  },
 }

// module.exports = nextConfig;


// module.exports = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: '/spoonacular.com/',
//         port: '',
//         pathname: '/recipeImages/**',
//       },
//     ],
//   },
// }