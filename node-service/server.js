var http = require('http');

function startServer() {
  let port = process.env.PORT || "8080";
  let ipAddress = process.env.IP_ADDRESS || "127.0.0.1";

  http.createServer(function(req, res) {
    console.log("request arrived at", {
      ip: ipAddress,
      port,
      req_url: req.url
    })
    res.end(`OK - Served from ${ipAddress}:${port}`);
  })
  .listen(parseInt(port));
  console.log(`Server running at ${ipAddress}:${port}`);
}
startServer();
