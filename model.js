let lurl = 'http://localhost:8080';
let socket = io.connect(lurl);

//############ React to server's emit #################
socket.on('displayRooms', function (roomsArr,sfrom,sto) {
    $('#container').empty().append("<table class=\"table table-striped table-hover table-bordered \"><thead><tr><th>Room number</th><th>Number of beds</th><th>Price</th><th></th></tr></thead><tbody id=\"tBody\"></tbody></table>");
    for (const room of roomsArr) {
        const row = `
        <tr>
            <td>${room.room}</td>
            <td>${room.numOfBeds}</td>
            <td>${room.price}</td>
            <td><button onclick="handleReserve('${room.room}','${sfrom}','${sto}')">Reserve</button></td>
        </tr>`
        //tBody.innerHTML += row;
        $('#tBody').append(row);
    }
});

socket.on('displayEmployees', function (staff) {
    $('#container-emp').empty().append("<table style='margin-right: 100px' class=\"table table-striped table-hover table-bordered \"><thead><tr><th>Employee ID</th><th>Admin</th></tr></thead><tbody id=\"tBody\"></tbody></table>");
    for (const emp of staff) {
        const row = `
        <tr>
            <td>${emp.empID}</td>
            <td>${emp.admin}</td>
        </tr>`
        //tBody.innerHTML += row;
        $('#tBody').append(row);
    }
});

socket.on('displayAdminRooms', function (rooms) {
    $('#container-emp').empty().append("<table class=\"table table-striped table-hover table-bordered \"><thead><tr><th>Room Number</th><th>Number of Beds</th><th>Price</th></tr></thead><tbody id=\"tBody\"></tbody></table>");
    for (const room of rooms) {
        const row = `
        <tr>
            <td>${room.room}</td>
            <td>${room.numOfBeds}</td>
            <td>${room.price}</td>
        </tr>`
        tBody.innerHTML += row;
        $('#tBody').append(row);
    }
});

socket.on('deleteSuccess', function (rooms) {
    $('#container-emp').empty().append("<table class=\"table table-striped table-hover table-bordered \"><thead><tr><th>Room Number</th><th>Number of Beds</th><th>Price</th></tr></thead><tbody id=\"tBody\"></tbody></table>");
    for (const room of rooms) {
        const row = `
        <tr>
            <td>${room.room}</td>
            <td>${room.numOfBeds}</td>
            <td>${room.price}</td>
        </tr>`
        tBody.innerHTML += row;
        $('#tBody').append(row);
    }
});

let handleReserve = function (curRoom,sfrom,sto){
let selfrom = new Date(sfrom).toLocaleDateString('en-IL');
let selto = new Date(sto).toLocaleDateString('en-IL');
     $('#container').empty().append("<table class=\"table table-striped table-hover table-bordered \"><thead class='thead-dark'><tr><th scope='col'>Room number</th><th scope='col'>Check-in</th><th scope='col'>Check-out</th></tr></thead><tbody id=\"tBody\"></tbody></table>");

    const row = `
        <tr>
            <td id="selected-room-num">${curRoom}</td>
            <td id="selected-from">${selfrom}</td>
            <td id="selected-to">${selto}</td>
        </tr>`
    $('#tBody').append(row).append('<div>\n' +
        '  <div class="col-75">\n' +
        '    <div class="container">\n' +
        '      <form>\n' +
        '\n' +
        '        <div class="row">\n' +
        '          <div class="col-50">\n' +
        '            <h3>Billing Address</h3>\n' +
        '            <label for="fname"><i class="fa fa-user"></i> Full Name</label>\n' +
        '            <input type="text" id="cust-name" name="firstname" placeholder="John M. Doe">\n' +
        '            <label for="id"><i class="fa fa-user"></i> Identification Number</label>\n' +
        '            <input type="text" id="cust-id" name="id" placeholder="123456789">\n' +
        '          </div>\n' +
        '\n' +
        '          <div class="col-50">\n' +
        '            <h3>Payment</h3>\n' +
        '            <label for="fname">Accepted Cards</label>\n' +
        '            <div class="icon-container">\n' +
        '              <i class="fa fa-cc-visa" style="color:navy;"></i>\n' +
        '              <i class="fa fa-cc-amex" style="color:blue;"></i>\n' +
        '              <i class="fa fa-cc-mastercard" style="color:red;"></i>\n' +
        '              <i class="fa fa-cc-discover" style="color:orange;"></i>\n' +
        '            </div>\n' +
        '            <label for="cname">Name on Card</label>\n' +
        '            <input type="text" id="cname" name="cardname" placeholder="John More Doe">\n' +
        '            <label for="ccnum">Credit card number</label>\n' +
        '            <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444">\n' +
        '            <label for="expmonth">Exp Month</label>\n' +
        '            <input type="text" id="expmonth" name="expmonth" placeholder="September">\n' +
        '\n' +
        '            <div class="row">\n' +
        '              <div class="col-50">\n' +
        '                <label for="expyear">Exp Year</label>\n' +
        '                <input type="text" id="expyear" name="expyear" placeholder="2018">\n' +
        '              </div>\n' +
        '              <div class="col-50">\n' +
        '                <label for="cvv">CVV</label>\n' +
        '                <input type="text" id="cvv" name="cvv" placeholder="352">\n' +
        '              </div>\n' +
        '            </div>\n' +
        '          </div>\n' +
        '\n' +
        '        </div>\n' +
        '       <button id="book-btn-success" type="button" class="btn btn-success" onclick="completeBook()">Book</button>\n' +
        '      </form>\n' +
        '    </div>\n' +
        '  </div>\n' +
        '\n' +
        '</div>')
     //socket.emit('newOrder',room,from,to,custName, custId);

}

// function handleConfirm(room,sfrom,sto) {
// }



function completeBook() {
    let id = ($('#cust-id').val());
    let name = ($('#cust-name').val());
    let from = ($('#fromDate').val());
    let to = ($('#toDate').val());
    let room = ($('#selected-room-num').val());
    socket.emit('sendOrderVals',room, from  ,to, name, id);
}
$(function(){
    // when client clicks Register
    $('#register-submit').click( function() {
        let username = ($('#username-r').val());
        let pw = ($('#password-r').val());
        // trigger server to validate login
        socket.emit('valRegister',username,pw);
    });
});

$(function () {
    $('#check-in-btn').click(function () {
        let id = $('#id-num').val();
        let name = $('#cust-name').val();
        socket.emit('sendValsCheckIn',id,name);
    });
});

$(function () {
    $('#check-out-btn').click(function () {
        let id = $('#id-num-co').val();
        let name = $('#cust-name-co').val();
        let from = new Date($('#fromOutDate').val());
        let to  = new Date($('#toOutDate').val());
        socket.emit('sendValsCheckOut',id,name,from,to);
    });
});

$(function () {
    $('#del-check-out-btn').click(function () {
        let id = $('#id-num-co').val();
        let name = $('#cust-name-co').val();
        let from = new Date($('#fromOutDate').val());
        let to  = new Date($('#toOutDate').val());
        socket.emit('sendDeleteOrder',id,name,from,to);
    });
});


$(function () {
    $('#emp-del-btn').click(function () {
        let id = $('#emp-id-del').val();
        socket.emit('deleteEmployee',id);
    });
});

socket.on('checkInDone',function () {
    //alert("Welcome to our hotel");
    renderHome('home');
});

socket.on('checkInFailed',function () {
    alert("reservation doesn't exist");
});

socket.on('checkOutDone',function () {
    renderHome('home');
});

socket.on('deleteOrderDone',function () {
    alert('order deleted');
    renderHome('home');
});

socket.on('deleteEmployeeDone',function () {
    alert('employee deleted');
    renderHome('home');
});

socket.on('loginSuccess', function () {
    renderHome('home');
//-------> if admin add options like delete/add employee
});
socket.on('loginFail', function () {
    alert("Incorrect user name or password, try again.");
});


socket.on('registerSuccess', function (username) {
    alert(username + "has registered");
});


socket.on('addRoomDone',function (roomNum) {
    alert("Room " +roomNum+ " added");
    renderHome('home');
});

socket.on('deleteRoomDone',function (roomNum) {
    alert("Room " +roomNum+ " deleted");
    renderHome('home');
});

socket.on('OrderAdded',function (room,from,to, name) {
    alert("room number " + room + " is reserved to " + name + " from " + new Date(from).toLocaleDateString() + " until " + new Date(to).toLocaleDateString());
    renderHome('home');
});

socket.on('updateRoomDone',function (newRoomNum) {
    alert("room number " + newRoomNum + " updated ");
    renderHome('home');
});


// $(function(){
//     $('').click( function() {
//
//     });
// });


//############ Ping to server #################
// $(function(){
//     // when client clicks Search Rooms
//     $('#search-btn').click( function() {
//         let from = new Date($('#fromDate').val());//2022-08-01
//         let to  = new Date($('#toDate').val());//2022-08-14
//         // trigger server to execute selectRooms by chosen dates
//         socket.emit('sendDates',from,to);
//     });
// });

function onBookClick() {
    let from = new Date($('#fromDate').val());//2022-08-01
    let to  = new Date($('#toDate').val());//2022-08-14
    // trigger server to execute selectRooms by chosen dates
    socket.emit('sendDates',from,to);
}

function empListClick() {
    // trigger server to execute selectRooms by chosen dates
    socket.emit('displayEmpList');
}


// $(function(){
//     // when client clicks Employee List
//     $('#emp-list-btn').click( function() {
//         // trigger server to execute selectRooms by chosen dates
//         console.log('button clicked')
//         socket.emit('displayEmpList');
//     });
// });

$(function(){
    // when client clicks Search Rooms
    $('#room-list-btn').click( function() {
        // trigger server to execute selectRooms by chosen dates
        socket.emit('displayRoomsList');
    });
});

$(function(){
    // when client clicks Login
    $('#login-submit').click( function() {
        let username = ($('#username-l').val());
        let pw = ($('#password-l').val());
        // trigger server to validate login
        socket.emit('valLogin',username,pw);
    });
});



$(function () {
    $('#room-add-btn').click(function () {
        let roomNum = $('#room-num').val();
        let numOfBeds = $('#num-beds').val();
        let price = $('#room-price').val();
        socket.emit('addRoom',roomNum,numOfBeds,price);
    });
});

$(function () {
    $('#room-del-btn').click(function () {
        let roomNum = $('#del-room').val();
        socket.emit('deleteRoom',roomNum);
    });
});

$(function () {
    $('#room-upd-btn').click(function () {
        let newRoomNum = $('#room-num-upd').val();
        let newNumBeds = $('#new-num-beds').val();
        let newPrice = $('#new-price').val();
        socket.emit('updateRoom',newRoomNum, newNumBeds, newPrice);
    });
});



//Fixed price


renderPage = function (page) { // here the data and url are not hardcoded anymore
    return $.ajax({
        type: "GET",
        url: "http://localhost:8080/" + page,
        contentType: "text/html",
        success: function (data) {
            $("#container").html(data);}
    })}

// renderPage = function (page) { // spa routing using ajax
//     return $.ajax({
//         type: "GET",
//         url: "http://localhost:8080/" + page,
//         contentType: "text/html"
//     }).success(function (data) {
//         $("#container").html(data);
//     }).fail(function (sender, message, details) {
//         alert("Sorry, something went wrong!");
//     });
// }

renderHome = function (page) {
    return $.ajax({
        type: "GET",
        url: "http://localhost:8080/" + page,
        contentType: "text/html",
        success: function (data) {
            $("body").html(data);}
    })

}



