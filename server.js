const http = require("http");
const fs = require("fs");

var port;
if (process.env.PORT === undefined) {
	port = 8080;
} else {
	port = process.env.PORT;
}

http.createServer(function (req, res) {


  	var url = req.url;

  	// default to index.html
  	if (url === "/") {
  		url = "/index.html";
  	} 

	fs.readFile(__dirname + url, function (err,data) {

		if (err) {
		  res.writeHead(404);
		  res.end(JSON.stringify(err));
		  return;
		}
		
		res.writeHead(200);
		res.end(data);
	});

}).listen(port);
