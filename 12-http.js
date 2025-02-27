const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
  }

  if (req.url === "/about") {
    res.end("About Page");
  }

  res.end(`<h1>Oops</h1><p>We can't find the page you are looking for</p>`);
});

server.listen(5000);
