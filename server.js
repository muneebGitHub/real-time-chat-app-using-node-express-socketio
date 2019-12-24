var express = require("express"); // all requires 
var bodyParser = require("body-parser");

var app = express(); //create app

//use middle wares 
app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



//list to store messages

var messages = [
  { name: "muneeb", body: "hi i am muneeb" },
  { name: "john doe", body: "hi i am john doe" }
];


//routes using express
app.get("/messages", (req, res) => {
  res.send(messages);
});

app.post("/messages", (req, res) => {
  console.log(req.body);
  messages.push(req.body);
  console.log("server side post", messages);
  res.sendStatus(200);
});




//server started listen
var server = app.listen(3301, () => {
  console.log("server is listening on", server.address().port);
});
