// const data = require('./data.js')

// console.log(data)

// const os = require('os')

// console.log(os.platform(), os.homedir())

const fs = require("fs");

// the read and write functions are async

// read file
// fs.readFile("./docs/text2.txt", (err, data) => {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log(data.toString());
// 	}
// });

// write file

// fs.writeFile("./docs/text2.txt", "hello again", (err) => {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log("file written");
// 	}
// });

// make directory

// if (!fs.existsSync("./docs2")) {
// 	fs.mkdir("./docs2", (err) => {
// 		if (err) {
// 			console.log(err);
// 		} else {
// 			console.log("created");
// 		}
// 	});
// } else {
// 	fs.rmdir("./docs2", (err) => {
// 		if (err) {
// 			console.log(err);
// 		} else {
// 			console.log("deleted dir");
// 		}
// 	});
// }

// delete a file
// if (fs.existsSync("./docs/text2.txt")) {
// 	fs.unlink("./docs/text2.txt", (err) => {
// 		if (err) {
// 			console.log(err);
// 		} else {
// 			console.log("file deleted");
// 		}
// 	});
// }





