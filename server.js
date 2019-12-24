var express = require("express"); // all requires 
var app = express(); //create app
var http=require('http').createServer(app);
var io=require('socket.io')(http);


var bodyParser = require("body-parser");



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
  io.emit('message',req.body);
  res.sendStatus(200);
});

//log if the connection evernt ocuurs 

io.on('connection',(socket)=>{
    console.log("a user has connected ");
});

//server started listen
var server = http.listen(3301, () => {
  console.log("server is listening on", server.address().port);
});
//test comment contribution 1 to master
