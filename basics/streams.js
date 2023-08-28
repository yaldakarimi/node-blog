const fs = require("fs");

const readStream = fs.createReadStream("./streamData.txt", {
	encoding: "utf8",
});
const writeStream = fs.createWriteStream("./docs/writtenStream.txt");
// readStream.on("data", (chunk) => {
// 	writeStream.write("\nnew chunk\n");
// 	writeStream.write(chunk);
// });

readStream.pipe(writeStream);
