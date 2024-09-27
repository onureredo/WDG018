// const http = require('http'); // commonJS
import http from 'http'; // ES-Modules

const requestListener = function (req, res) {
  res.writeHead(404);
  res.end('Hello World!');
  // res.end(
  //   JSON.stringify({
  //     id: 1,
  //     title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
  //     price: 109.95,
  //     description:
  //       'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
  //     category: "men's clothing",
  //     image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
  //     rating: {
  //       rate: 3.9,
  //       count: 120,
  //     },
  //   })
  // );

  // res.end(`
  //   <!DOCTYPE html>
  //   <html lang="en">
  //   <head>
  //     <meta charset="UTF-8">
  //     <meta name="viewport" content="width=device-width, initial-scale=1.0">
  //     <script src="https://cdn.tailwindcss.com"></script>
  //     <title>Document</title>
  //   </head>
  //   <body>
  //     <div class="container mx-auto p-4">
  //       <h1 class="text-2xl font-bold text-center">Here's a dog!</h1>
  //       <p class="text-center">This code came from a Node-powered server!</p>
  //       <img src="https://placedog.net/500/280" alt="Dog" class="mx-auto mt-4">
  //     </div>
  //   </body>
  //   </html>
  //   `);
};

const server = http.createServer(requestListener);
server.listen(3000, () => console.log('Server is running'));
