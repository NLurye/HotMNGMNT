var express = require('express')
    , app = express()
    , http = require('http')
    , server = http.createServer(app)
    , io = require('socket.io')(server);
server.listen(8080);

const myDB = require("./db");
const row = `
        <tr>
            <td>"Tom"</td>
            <td>"knows all"</td>
            <td>"about 2 types"</td>
            <td>"of snakes"</td>
        </tr>`

app.get("/", function(req, res){
    res.sendFile(__dirname + '/index.html');
});

io.sockets.on('connection', function (socket) {

socket.on('sendDates', function (from,to) {
    //prepare rooms according to dates
    myDB.selectRooms(from, to);
    setTimeout(getResultFromSelectRooms,2000);//<------Callback
    function getResultFromSelectRooms() {
       console.log(myDB.selectedRooms);//<---------append to section instead
        io.sockets.emit('displayRooms', myDB.selectedRooms);
    }
});
});

app.get("/book", function (req,res){
    res.sendFile(__dirname + '/pages/book.html');
});

app.get("/book.css", function (req,res){
    res.sendFile(__dirname + '/book.css');
});

app.get("/index.css", function (req,res){
    res.sendFile(__dirname + '/index.css');
});

app.get("/background.jpg", function (req,res){
    res.sendFile(__dirname + '/background.jpg');
});

//for client (index.html) to use functions from model.js:
app.get("/model.js", function (req,res){
    res.sendFile(__dirname + '/model.js');
});







