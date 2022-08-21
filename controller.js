var express = require('express')
    , app = express()
    , http = require('http')
    , server = http.createServer(app)
    , myDB = require("./db")
    , io = require('socket.io')(server);
server.listen(8080);
//myDB.init();
io.sockets.on('connection', function (socket) {
 //############ React to client's emit #################
    socket.on('sendDates', function (from,to) {
        //prepare rooms available on those dates
        myDB.selectRooms(from, to);
        setTimeout(getResultFromSelectRooms,1000);//<------Callback
        function getResultFromSelectRooms() {
           console.log(myDB.selectedRooms);//<----remove
            io.sockets.emit('displayRooms', myDB.selectedRooms,from,to);
        }
    });
    socket.on('valLogin', function (username,pw) {
       // validate login
        myDB.logIn();
        setTimeout(getResultFromValLogin,1000);//<------Callback
        function getResultFromValLogin() {
            if (myDB.validLogIn.length===1)
            io.sockets.emit('loginSuccess');
            else
                io.sockets.emit('loginFail');
        }
    });
    socket.on('sendValsCheckIn',function (id,name) {
        myDB.checkInCust(id,name);
        setTimeout(getResultFromCheckIn,1000);//<------Callback
        function getResultFromCheckIn() {
                io.sockets.emit('checkInDone');
        }
    });

    socket.on('sendValsCheckOut',function (id,name) {
        myDB.checkOutCust(id,name);
        setTimeout(getResultFromCheckOut,1000);//<------Callback
        function getResultFromCheckOut() {
            io.sockets.emit('checkOutDone', id ,name);
        }

    socket.on('newOrder', function (room,from,to,custName, custId) {
        myDB.addOrder(room,from,to,custName, custId);
        //add email+whatsapp confirmation+maps location
    });
});
});

//############ Routing  #################
app.get("/", function(req, res){
    res.sendFile(__dirname + '/pages/login.html');
});

app.get("/login.css", function (req,res){
    res.sendFile(__dirname + '/pages/login.css');
});

app.get("/home", function (req,res){
    res.sendFile(__dirname + '/index.html');//<---------ad login validation
});

app.get("/book", function (req,res){
    res.sendFile(__dirname + '/pages/book.html');
});

app.get("/book.css", function (req,res){
    res.sendFile(__dirname + '/pages/book.css');
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

app.get("/checkIn", function (req,res){
    res.sendFile(__dirname + '/pages/checkIn.html');
});

app.get("/pages/checkIn.css", function (req,res){
    res.sendFile(__dirname + '/pages/checkIn.css');
});

app.get("/checkOut", function (req,res){
    res.sendFile(__dirname + '/pages/checkOut.html');
});

app.get("/pages/checkOut.css", function (req,res){
    res.sendFile(__dirname + '/pages/checkOut.css');
});



