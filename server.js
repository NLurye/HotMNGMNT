/*
Calling for db.js to create database of all messages
Waiting for a client to connect
Calling for db.js to extract relevant adds:
    Depending on num of screen received in the request (/screen=:num)
    and time and date db.js sending a query to DB i.e the business logics is happening in db.js
sending to client index.html
index.html only go through an array

Waiting for a client to connect
Sending to client index.html (main page) with option to login
Handles client's requests:
- login ->  DB query (if confirmed) send to client:
            - page with option (nav-bar) to book and check-in
            - book ->
                        - show available rooms in selected dates -> DB query -> send rooms to client
            - check-in
fffffffffffffffffffffffffffffffffffffffffffffffffffffff
 */

const express = require('express');
const myDB = require("./db");
const app = express();
let arr =[];

//app.get('/screen=:num', function(req, res){
function foo(){
    console.log(myDB.ress);
}
myDB.createMsgsCollection(myDB.chooseMsgs(foo()));
//});


fs = require('fs');
    app.get('/screen=:num', function(req, res){
        fs.readFile(__dirname +'/index.html', 'utf8', function (err,data) {
            replace =  "let Snum = "+ req.params.num;
            let result = data.replace(/let Snum = 0/g, replace);
            fs.writeFile(__dirname +'/index.html', result, 'utf8', function (err) {
                res.sendFile(__dirname +'/index.html',function (){
                    result = data.replace(/let Snum = 1/g || /let Snum = 2/g || /let Snum = 3/g, 'let Snum = 0');
                    fs.writeFile(__dirname +'/index.html', result, 'utf8', function (err) {});
                });
            });
        });
    });
    app.get('/templateA.html', function(req, res){
        res.sendFile(__dirname +'/templateA.html');
    });
    app.get('/templateB.html', function(req, res){
        res.sendFile(__dirname +'/templateB.html');
    });
    app.get('/templateC.html', function(req, res){
        res.sendFile(__dirname +'/templateC.html');
    });
    app.listen(8080);

