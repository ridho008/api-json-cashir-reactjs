var express = require("express"); // requre the express framework
var app = express();
var fs = require("fs"); //require file system object

// Endpoint to Get a list of users
app.get("/", function (req, res) {
  fs.readFile(
    __dirname + "/keranjangs" + "db.json",
    "utf8",
    function (err, data) {
      console.log(data);
      res.end(data); // you can also use res.send()
    }
  );
});

// Create a server to listen at port 8080
var server = app.listen(8080, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log(`Server running at http://${host}:${port}/`);
});
