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



//app.set('view engine', 'ejs');

//app.use(express.static(__dirname + '/index.css'));

//routing test

app.get("/home", function (req,res){
    res.sendFile(__dirname + '/index.html');

});

app.get("/index.css", function (req,res){
    res.sendFile(__dirname + '/index.css');
});

app.get("/book1", function (req,res){
    res.sendFile(__dirname + '/pages/book.html');
});

app.get("/book.css", function (req,res){
    res.sendFile(__dirname + '/book.css');
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


//myDB.init();
app.get("/book", function(req, res){
    let from = new Date('2022-08-01'); //<---get from url/form instead
    let to = new Date('2022-08-14'); //<---get from url/form instead
    myDB.selectRooms(from, to);
    setTimeout(getResultFromSelectRooms,1000);//<------Callback
    function getResultFromSelectRooms() {
        console.log(myDB.selectedRooms);//<---------append to section instead
    }
    //<--------------- add filter by num of beds + price + floor
    app.get("/book/??/reserve", function(request, response) {
        //<--- append confirmation form
        app.get("/book/??/reserve/confirm", function(request, response) {
            myDB.addOrder(from,to,custName,custID);
        })
    })

    });




app.get("/", function(req, res){
res.sendFile(__dirname + '/index.html');
});
app.listen(8080);


