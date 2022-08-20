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
const express = require('express')
    ,app = express()
    , http = require('http')
    , server = http.createServer(app);

app.get("/", function(req, res){
    res.sendFile(__dirname + '/index.html');
});
let from = new Date('2022-08-01'); //<---get from url/form instead
let to = new Date('2022-08-14'); //<---get from url/form instead myDB.selectRooms(from, to);
//myDB.init();
var sR = require('./selectRooms');
app.get("/book", function(req, res){
   //res.write(JSON.stringify(sR.selectedRooms(from,to)))
    sR.selectedRooms(from,to)
    });

server.listen(8080)






