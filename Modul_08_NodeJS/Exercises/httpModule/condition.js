import http from 'http';

const requestHandler = (req, res) => {
  // Regex (Regulärer Ausdruck) ist ein Muster, das verwendet wird, um Zeichenfolgen zu suchen oder zu überprüfen.

  //   Dieser Regex prüft, ob eine URL mit "/posts/" beginnt, gefolgt von mindestens einem alphanumerischen Zeichen, und nichts danach kommt.
  const singlePostRegex = /^\/posts\/[0-9a-zA-Z]+$/; // Simple expression to match the pattern /posts/anything
  const { method, url } = req;
  if (url === '/posts') {
    if (method === 'GET') {
      return console.log('GET request on /posts');
    }
    if (method === 'POST') {
      return console.log('POST request on /posts');
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
