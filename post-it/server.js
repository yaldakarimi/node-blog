const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
	// console.log(req.url)
	// console.log("==================")
	// console.log(req.method)
	// console.log("==================")
	// console.log(req.headers)

	// how to respond to the request

	// 1 set header and content type
	res.setHeader("Content-Type", "text/html");

	// defining routes
	let path = "./views/";

	switch (req.url) {
		case "/":
			path += "index.html";
			res.statusCode = 200;
			break;
		case "/about":
			path += "about.html";
			res.statusCode = 200;
			break;

		case "/about-me":
			res.statusCode = 301;
			res.setHeader("Location", "/about");
			res.end();
			break;
		default:
			path += "404.html";
			res.statusCode = 404;
			break;
	}

	// 2 write a response
	fs.readFile(path, (err, data) => {
		if (err) {
			console.log(err);
			res.end();
		} else {
			res.write(data);
			res.end();
		}
	});

	// end the request
});

server.listen(3000, "localhost", () => {
	console.log("server listening to port 3000");
});
