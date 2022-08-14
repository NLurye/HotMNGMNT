/*
Server:
Calling for db.js init database
Waiting for a client to connect
Sending to client index.html (main page) with option to login
Handles client's requests:
- [login] ->  send login form to a client -> DB query: Calling for db.js to check staff id -> (if confirmed) send to client page with option (nav-bar) to book and check-in/out
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
                - [log-out] __
                              |
 /____________________________|
 \

 */

const express = require('express');
const myDB = require("./db");
const app = express();
let arr =[];
let from = new Date('2022-08-1');
let to =new Date('2022-08-2')
//myDB.init();
myDB.selectRooms(from,to);
//});

//
// fs = require('fs');
//     app.get('/screen=:num', function(req, res){
//         fs.readFile(__dirname +'/index.html', 'utf8', function (err,data) {
//             replace =  "let Snum = "+ req.params.num;
//             let result = data.replace(/let Snum = 0/g, replace);
//             fs.writeFile(__dirname +'/index.html', result, 'utf8', function (err) {
//                 res.sendFile(__dirname +'/index.html',function (){
//                     result = data.replace(/let Snum = 1/g || /let Snum = 2/g || /let Snum = 3/g, 'let Snum = 0');
//                     fs.writeFile(__dirname +'/index.html', result, 'utf8', function (err) {});
//                 });
//             });
//         });
//     });
//     app.get('/templateA.html', function(req, res){
//         res.sendFile(__dirname +'/templateA.html');
//     });
//     app.get('/templateB.html', function(req, res){
//         res.sendFile(__dirname +'/templateB.html');
//     });
//     app.get('/templateC.html', function(req, res){
//         res.sendFile(__dirname +'/templateC.html');
//     });
//     app.listen(8080);

