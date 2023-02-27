// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}



// To handle different HTTP methods in an API route, you can use req.method 
// in your request handler, like so:

// export default function handler(req, res) {
//   if (req.method === 'POST') {
//     // Process a POST request
//   } else {
//     // Handle any other HTTP method
//   }
// }
// To fetch API endpoints, take a look into any of the examples at the start of 
// this section.