var express = require("express");
var app = express();
app.get("/", function (req, res) {
	res.send("hello World")
});
app.listen(3000, function() {
	console.log("example listening port 3000")
});
