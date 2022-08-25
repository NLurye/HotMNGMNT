let express = require('express')
    , app = express()
    , http = require('http')
    , server = http.createServer(app)
    , myDB = require("./db")
    , io = require('socket.io')(server);
server.listen(8080);
// myDB.init();

io.sockets.on('connection', function (socket) {
 //############ React to client's emit #################
    socket.on('sendDates', function (from,to,price,beds) { //price+beds
        //prepare rooms available on those dates
        myDB.selectRooms(from, to,price,beds); //price+beds
        setTimeout(getResultFromSelectRooms,1000);//<------Callback
        function getResultFromSelectRooms() {
          // console.log(myDB.selectedRooms);//<----remove
            console.log(myDB.popRoom, myDB.selectedRooms);
            io.sockets.emit('displayRooms', myDB.popRoom, myDB.selectedRooms,from,to);
        }
    });

    socket.on('sendOrderVals', function (room,from,to, name, id) {
        myDB.addOrder(room,from,to, name, id);
        setTimeout(getResultFromAddOrder,1000);//<------Callback
        function getResultFromAddOrder() {
            io.sockets.emit('OrderAdded', room,from,to, name);
        }
    });

    socket.on('displayEmpList', function () {
        //prepare rooms available on those dates
        myDB.getStaff();
        setTimeout(getEmpList,1000);//<------Callback
        function getEmpList() {
            //console.log(myDB.employees);//<----remove
            io.sockets.emit('displayEmployees', myDB.employees);
        }
    });

    socket.on('displayRoomsList', function () {
        //prepare rooms available on those dates
        myDB.getRooms();
        setTimeout(getRoomsList,1000);//<------Callback
        function getRoomsList() {
            io.sockets.emit('displayAdminRooms', myDB.roomsList);
        }
    });

    socket.on('deleteEmployee', function (id) {
        //prepare rooms available on those dates
        myDB.deleteEmployee(id);
        setTimeout(deleteEmp,1000);//<------Callback
        function deleteEmp() {
            io.sockets.emit('deleteEmployeeDone', id); //need to catch error
        }
    });

    socket.on('updateEmployee', function (emp_id, emp_pass, new_emp_pass) {
        //prepare rooms available on those dates
        myDB.changeEmpPass(emp_id, emp_pass, new_emp_pass);
        setTimeout(updateEmp,1000);//<------Callback
        function updateEmp() {
            io.sockets.emit('updateEmployeeDone', emp_id); //need to catch error
        }
    });

    socket.on('searchEmployee', function (id) {
        //prepare rooms available on those dates
        myDB.searchEmp(id);
        setTimeout(srcEmp,1000);//<------Callback
        function srcEmp() {
            if(myDB.showEmp.length !== 0)
                io.sockets.emit('searchEmployeeDone', id);
            else
                io.sockets.emit('searchEmployeeFailed', id);
            myDB.showEmp.length = 0;
        }
    });

    socket.on('UpdateRoom', function (RoomNum, newNumBeds, newPrice) {
        //prepare rooms available on those dates
        myDB.updateRoom(RoomNum, newNumBeds, newPrice);
        setTimeout(updRoom,1000);//<------Callback
        function updRoom() {
            io.sockets.emit('updateRoomDone',RoomNum); //need to catch error
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

    socket.on('valRegister', function (username,pw) {
        // validate login
        myDB.signIn(username,pw);
        setTimeout(getResultFromSignIn,1000);//<------Callback
        function getResultFromSignIn() {
            io.sockets.emit('registerSuccess', username);
        }
    });

    socket.on('sendValsCheckIn',function (id,name,roomNum) {
        myDB.checkIn(id,name,roomNum);
        setTimeout(getResultFromCheckIn,1000);//<------Callback
        function getResultFromCheckIn() {
            if(myDB.validReservation.length !== 0)
                io.sockets.emit('checkInDone', name);
            else
                io.sockets.emit('checkInFailed');
            myDB.validReservation.length = 0;
        }
    });


    socket.on('sendValsCheckOut',function (id,name,from,to) {
        myDB.checkOut(id,name,from,to);
        setTimeout(getResultFromCheckOut,1000);//<------Callback
        function getResultFromCheckOut() {
            io.sockets.emit('checkOutDone', name);
        }
    });

    socket.on('sendDeleteOrder',function (id,name, from, to) {
        myDB.deleteOrder(id,name, from, to);
        setTimeout(getResultFromDeleteOrder,1000);//<------Callback
        function getResultFromDeleteOrder() {
            io.sockets.emit('deleteOrderDone');
        }
    });


    socket.on('addRoom',function (roomNum,numOfBeds,price) {
        myDB.addRoom(roomNum,numOfBeds,price);
        setTimeout(getResultFromAddRoom,1000);//<------Callback
        function getResultFromAddRoom() {
            io.sockets.emit('addRoomDone',roomNum);
        }
    });

    socket.on('DeleteRoom',function (roomNum) {
        myDB.deleteRoom(roomNum);
        setTimeout(getResultFromDelRoom,1000);//<------Callback
        function getResultFromDelRoom() {
            io.sockets.emit('deleteRoomDone',roomNum);
        }
    });


    socket.on('sendValsSearchRoom',function (roomNum) {
        myDB.searchRoom(roomNum);
        setTimeout(getResultFromSearchRoom,1000);//<------Callback
        function getResultFromSearchRoom() {
            if(myDB.showRoom.length===1)
                io.sockets.emit('searchRoomDone',myDB.showRoom);
            else
                io.sockets.emit('searchRoomFailed',roomNum);
                        }
    });


    socket.on('SearchRoom',function (roomNum) {
        myDB.searchRoom(roomNum);
        setTimeout(getResultFromSrcRoom,1000);//<------Callback
        function getResultFromSrcRoom() {
            if(myDB.showRoom.length===1)
                io.sockets.emit('AdminSearchRoomDone',roomNum);
            else
                io.sockets.emit('AdminSearchRoomFailed',roomNum);

        }
    });
    socket.on('SearchRoomTest',function (roomNum,beds,price) {
        console.log(roomNum,beds,price)
        myDB.searchRoom(roomNum,beds,price);
        setTimeout(getResultFromSrcRoom,1000);//<------Callback
        function getResultFromSrcRoom() {
            console.log("????" + myDB.showRoom.length)
            if(myDB.showRoom.length===1){
                console.log(myDB.showRoom);
                io.sockets.emit('AdminSearchRoomDoneTest',myDB.showRoom[0]);
            }

            else
                io.sockets.emit('AdminSearchRoomFailed',roomNum);

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

app.get("/popular.jpg", function (req,res){
    res.sendFile(__dirname + '/popular.jpg');
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

app.use('/', express.static("pages"))


