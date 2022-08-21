/*
Server:
Calling for db.js init database [V]
Waiting for a client to connect [V]
Sending to client index.html [] (main page) with option to login []
Sending to client index.html []
Handles client's requests:
- [login] ->  send login form to a client [] -> DB query: Calling for db.js to check staff id [] -> (if confirmed) send to client page with option (nav-bar) to book and check-in/out and logout.[]
                - [book] ->
                            - [show available rooms] (in selected dates) -> DB query: Calling for db.js to extract relevant rooms -> send rooms to client
                                - [book] (selected room) -> send order form to a client -> [confirm] -> DB query: Calling for db.js to add an order ____
                                                                                                                                                        |
                          /_____________________________________________________________________________________________________________________________|
                          \
                - [check-in] ->
                            - send id form to a client -> DB query: Calling for db.js to extract relevant orders -> send relevant order __
                                                                                                                                         |
                          /______________________________________________________________________________________________________________|
                          \
                - [check-out] ->
                            - send id form to a client -> DB query: Calling for db.js to move relevant order to History _________________
                                                                                                                                         |
                          /______________________________________________________________________________________________________________|
                          \
                - [log-out] ->
                            - returns to the first page (login page)_________________________________________________________________________
                                                                                                                                         |
 /_______________________________________________________________________________________________________________________________________|
 \

 */
const express = require('express');
const myDB = require("./db");
const app = express();

// app.get("/server.js", function (req,res){
//     res.sendFile(__dirname + '/server.js');
// });

app.get("/login", function (req,res){
    res.sendFile(__dirname + '/pages/login.html');
});

app.get("/login.css", function (req,res){
    res.sendFile(__dirname + '/pages/login.css');
});

app.get("/home", function (req,res){
    res.sendFile(__dirname + '/index.html');
});

app.get("/index.css", function (req,res){
    res.sendFile(__dirname + '/index.css');
});

app.get("/book", function (req,res){
    res.sendFile(__dirname + '/pages/book.html');
});

app.get("/book.css", function (req,res){
    res.sendFile(__dirname + '/pages/book.css');
});

app.get("/background.jpg", function (req,res){
    res.sendFile(__dirname + '/background.jpg');
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

app.get("/model.js", function (req,res){
    res.sendFile(__dirname + '/model.js');
});

//myDB.init();

app.get("/", function(req, res){
res.sendFile(__dirname + '/index.html');
});
app.listen(8080);

//module.exports.row = row;


