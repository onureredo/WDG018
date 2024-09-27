import http from 'http';

const posts = [
  {
    id: '1',
    title: 'First post',
    content: 'Hello world!',
  },
  {
    id: '2',
    title: 'Second post',
    content: 'My second post!',
  },
];

const requestHandler = (req, res) => {
  const singlePostRegex = /^\/posts\/[0-9a-zA-Z]+$/;
  const { method, url } = req;
  if (url === '/posts') {
    if (method === 'GET') {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      return res.end(JSON.stringify(posts));
    }
    if (method === 'POST') {
      let body = '';
      // The body of the request is received in chunks
      req.on('data', (chunk) => {
        body += chunk.toString();
      });
      // Once all the data is collected
      req.on('end', () => {
        const newPost = { id: crypto.randomUUID(), ...JSON.parse(body) };
        posts.push(newPost);
        res.statusCode = 201;
        res.setHeader('Content-Type', 'application/json');
        return res.end(JSON.stringify(newPost));
      });
    }
    return console.log('Invalid method');
  }
  if (singlePostRegex.test(url)) {
    if (method === 'GET') {
      return console.log(`GET request on ${url}`);
    }
    if (method === 'PUT') {
      return console.log(`PUT request on ${url}`);
    }
    if (method === 'DELETE') {
      return console.log(`DELETE request on ${url}`);
    }
    return console.log('Invalid method');
  }
  return console.log('Invalid request');
};

const server = http.createServer(requestHandler);

const port = 3000;
server.listen(port, () =>
  console.log(`Server running at http://localhost:${port}/`)
);
