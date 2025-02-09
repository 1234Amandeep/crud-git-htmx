const http = require("http");

const reqHandler = (req, res) => {
	let bufferList = [];
	req.on("data", (buffer) => {
		bufferList.push(buffer);
	}).on("end", () => {
		const body = Buffer.concat(bufferList).toString("utf-8");
		console.log(body + " output: request object")
	});

	res.write("Got your todo, Amangene TADA!");
	res.end();
}

const PORT = 8000;

const app = http.createServer(reqHandler);

app.listen(PORT, () => {
	console.log("listening at Port: " + PORT);
});
