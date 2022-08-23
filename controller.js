var express = require('express')
    , app = express()
    , http = require('http')
    , server = http.createServer(app)
    , myDB = require("./db")
    , io = require('socket.io')(server);
server.listen(8080);
//myDB.init();
//myDB.checkIn();
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

    socket.on('sendOrderVals', function (room,from,to, name, id) {
        myDB.addOrder(room,from,to, name, id);
        setTimeout(getResultFromAddOrder,1000);//<------Callback
        function getResultFromAddOrder() {
            console.log('blablabla');
            io.sockets.emit('OrderAdded', room,from,to, name);
        }
    });

    socket.on('displayEmpList', function () {
        //prepare rooms available on those dates
        myDB.getStaff();
        setTimeout(getEmpList,1000);//<------Callback
        function getEmpList() {
            console.log(myDB.employees);//<----remove
            io.sockets.emit('displayEmployees', myDB.employees);
        }
    });

    socket.on('displayRoomsList', function () {
        //prepare rooms available on those dates
        myDB.getRooms();
        setTimeout(getRoomsList,1000);//<------Callback
        function getRoomsList() {
            console.log(myDB.roomsList);//<----remove
            io.sockets.emit('displayAdminRooms', myDB.roomsList);
        }
    });

    socket.on('deleteEmployee', function (id) {
        //prepare rooms available on those dates
        myDB.deleteEmployee(id);
        setTimeout(deleteEmp,1000);//<------Callback
        function deleteEmp() {
            io.sockets.emit('deleteEmployeeDone'); //need to catch error
        }
    });

    socket.on('updateRoom', function (newRoomNum, newNumBeds, newPrice) {
        //prepare rooms available on those dates
        myDB.updateRoom(newRoomNum, newNumBeds, newPrice);
        setTimeout(updRoom,1000);//<------Callback
        function updRoom() {
            io.sockets.emit('updateRoomDone',newRoomNum); //need to catch error
        }
    });

    socket.on('valLogin', function (username,pw) {
       // validate login
        myDB.logIn(username,pw);
        setTimeout(getResultFromValLogin,1000);//<------Callback
        function getResultFromValLogin() {
            if (myDB.validLogIn.length===1)
            io.sockets.emit('loginSuccess');
            else
                io.sockets.emit('loginFail');
        }
    });
    socket.on('sendValsCheckIn',function (id,name) {
        myDB.checkIn(id,name);
        setTimeout(getResultFromCheckIn,1000);//<------Callback
        function getResultFromCheckIn() {
            if(myDB.validReservation.length !== 0)
                io.sockets.emit('checkInDone');
            else
                io.sockets.emit('checkInFailed');
            myDB.validReservation.length = 0;
        }
    });

    socket.on('sendValsCheckOut',function (id,name) { //from-to
        myDB.checkOut(id,name);
        setTimeout(getResultFromCheckOut,1000);//<------Callback
        function getResultFromCheckOut() {
            io.sockets.emit('checkOutDone', id ,name);
        }
    });

    socket.on('sendDeleteOrder',function (id,name, from, to) {
        myDB.deleteOrder(id,name, from, to);
        setTimeout(getResultFromDeleteOrder,1000);//<------Callback
        function getResultFromDeleteOrder() {
            io.sockets.emit('deleteOrderDone', id ,name, from, to);
        }
    });


    socket.on('newOrder', function (room,from,to,custName, custId) {
        myDB.addOrder(room,from,to,custName, custId);
        //add email+whatsapp confirmation+maps location
    });

    socket.on('addRoom',function (roomNum,numOfBeds,price) {
        myDB.addRoom(roomNum,numOfBeds,price);
        setTimeout(getResultFromAddRoom,1000);//<------Callback
        function getResultFromAddRoom() {
            io.sockets.emit('addRoomDone',roomNum);
        }
    });

    socket.on('deleteRoom',function (roomNum) {
        myDB.deleteRoom(roomNum);
        setTimeout(getResultFromDeleteRoom,1000);//<------Callback
        function getResultFromDeleteRoom() {
            io.sockets.emit('deleteRoomDone',roomNum);
        }
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

app.get("/admin", function (req,res){
    res.sendFile(__dirname + '/pages/admin.html');
});




