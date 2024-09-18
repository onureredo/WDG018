import http from 'http';
import { createFileWithMessage, deleteFileByName } from './fileOperations.js';

const requestHandler = async (req, res) => {
  const singlePostRegex = /^\/files\/[a-zA-Z0-9-]+\/[a-zA-Z0-9-]+\.txt$/;

  const { method, url } = req;
  if (url === '/files') {
    if (method === 'POST') {
      let body = '';
      // The body of the request is received in chunks
      req.on('data', (chunk) => {
        body += chunk.toString();
      });
      // Once all the data is collected
      req.on('end', async () => {
        // Parse the body
        let parsedBody;
        try {
          parsedBody = JSON.parse(body);
        } catch (error) {
          res.statusCode = 400;
          res.setHeader('Content-Type', 'application/json');
          return res.end(JSON.stringify({ message: 'Invalid body' }));
        }
        if (!parsedBody || !parsedBody.message) {
          res.statusCode = 400;
          res.setHeader('Content-Type', 'application/json');
          return res.end(JSON.stringify({ message: 'Body is required' }));
        }
        await createFileWithMessage(parsedBody.message);
        res.statusCode = 201;
        res.setHeader('Content-Type', 'application/json');
        return res.end(
          JSON.stringify({ message: 'File created successfully!' })
        );
      });
    } else {
      res.statusCode = 405;
      res.setHeader('Content-Type', 'application/json');
      return res.end(JSON.stringify({ message: 'Unsupported method' }));
    }
  } else if (singlePostRegex.test(url)) {
    if (method === 'DELETE') {
      const filePath = url.split('/').slice(2).join('/');
      await deleteFileByName(filePath);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      return res.end(JSON.stringify({ message: 'File deleted successfully!' }));
    } else {
      res.statusCode = 405;
      res.setHeader('Content-Type', 'application/json');
      return res.end(JSON.stringify({ message: 'Unsupported method' }));
    }
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'application/json');
    return res.end(JSON.stringify({ message: 'Not found' }));
  }
};

const server = http.createServer(requestHandler);

const port = 3000;
server.listen(port, () =>
  console.log(`Server running at http://localhost:${port}/`)
);
