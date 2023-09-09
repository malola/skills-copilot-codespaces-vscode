// Create web server
// Create an HTTP server
const server = http.createServer((req, res) => {
    // Set the response header
    res.setHeader('Content-Type', 'text/plain');
  
    // Check the URL of the incoming request
    if (req.url === '/') {
      // If the URL is '/', send a "Hello, World!" response
      res.end('Hello, World!\n');
    } else if (req.url === '/about') {
      // If the URL is '/about', send an about page response
      res.end('About Page\n');
    } else {
      // If the URL is not recognized, send a 404 response
      res.statusCode = 404;
      res.end('404 Not Found\n');
    }
  });
  
  // Start the server and have it listen on the specified port
  server.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}/`);
  });  