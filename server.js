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
let arr = [];
let from = new Date('2022-08-01');
let to = new Date('2022-08-14')
//myDB.init();
myDB.selectRooms(from,to);
//});

app.get('', function(req, res){
res.sendFile(__dirname + '/index.html');
});
app.listen(8080);


