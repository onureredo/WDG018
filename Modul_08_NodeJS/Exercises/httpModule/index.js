import http from 'http';

const requestHandler = (req, res) => {
  const { method, url } = req;
  console.log(method, url);
  res.end('see vscode terminal');
};

const server = http.createServer(requestHandler);

const port = 3000;
server.listen(port, () =>
  console.log(`Server running at http://localhost:${port}/`)
);
