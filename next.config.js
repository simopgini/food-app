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
        pathname: '/recipeImages/**',
      },
    ],
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