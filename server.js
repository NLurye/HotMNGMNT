/*
Server:
Calling for db.js init database
Waiting for a client to connect
Sending to client index.html (main page) with option to login
Handles client's requests:
- [login] ->  send login form to a client -> DB query: Calling for db.js to check staff id -> (if confirmed) send to client page with option (nav-bar) to book and check-in/out and logout.
                - [book] ->
                            - [show available rooms] (in selected dates) -> DB query: Calling for db.js to extract relevant rooms -> send rooms to client
                                - [book] (selected room) -> send order form to a client -> [confirm] -> DB query: Calling for db.js to add an order ____
                                                                                                                                                        |
                          /_____________________________________________________________________________________________________________________________|
                          \
                - [check-in] ->
                            - send id form to a client -> DB query: Calling for db.js to extract relevant order -> send relevant order __
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


//myDB.init();
app.get("/book", function(req, res){
    let from = new Date('2022-08-01'); //<---get from url/form instead
    let to = new Date('2022-08-14'); //<---get from url/form instead
    myDB.selectRooms(from, to);
    setTimeout(getResultFromSelectRooms,1000);
    function getResultFromSelectRooms() {
        console.log(myDB.selectedRooms);//<---------append to section instead
    }
    //<--------------- add filter by num of beds + price + floor
    app.get("/book/??/reserve", function(request, response) {
        //send
    })



    });





app.get('', function(req, res){
res.sendFile(__dirname + '/index.html');
});
app.listen(8080);


