const express = require("express");
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);


const port = 8080;

app.set("view engine", "jade");

app.use(express.static("static"));

app.get("/", (req, res) => {
	res.render("index");
});

app.get("/track", (req, res) => {
	res.render("track");
});

io.on("connection", socket => {
	console.log("connection from ", socket.id)
	socket.on("location", data => {
		console.log(data);
		io.emit("location", data);
	});
});


server.listen(port);
console.log("listening on port : ", port);