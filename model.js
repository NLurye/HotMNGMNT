var lurl = 'http://localhost:8080';
var socket = io.connect(lurl);

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
    $('#container-emp').empty().append("<table class=\"table table-striped table-hover table-bordered \"><thead><tr><th>Employee ID</th><th>Admin: 1/0</th></tr></thead><tbody id=\"tBody\"></tbody></table>");
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

handleReserve = function (room,sfrom,sto){
let selfrom = new Date(sfrom).toLocaleDateString('en-IL');
let selto = new Date(sto).toLocaleDateString('en-IL');
     $('#container').empty().append("<table class=\"table table-striped table-hover table-bordered \"><thead><tr><th>Room number</th><th>Check-in</th><th>Check-out</th><th></th></tr></thead><tbody id=\"tBody\"></tbody></table>");
    const row = `
        <tr>
            <td>${room}</td>
            <td>${selfrom}</td>
            <td>${selto}</td>
            <td><button onclick="handleConfirm(${room},${sfrom},${sto})">Confirm</button></td>
        </tr>`
    $('#tBody').append(row).append('<br><br><br><div id="billing" style="margin-left: 400px"><div class="row">\n' +
        '  <div class="col-75">\n' +
        '    <div class="container">\n' +
        '      <form action="/action_page.php">\n' +
        '\n' +
        '        <div class="row">\n' +
        '          <div class="col-50">\n' +
        '            <h3>Billing Address</h3>\n' +
        '            <label for="fname"><i class="fa fa-user"></i> Full Name</label>\n' +
        '            <input type="text" id="fname" name="firstname" placeholder="John M. Doe">\n' +
        '  <button style="margin-top: 250px" id="search-btn" type="button" class="btn btn-success">Book</button>\n' +

        '          </div>\n' +
        '\n' +
        '          <div class="col-50">\n' +
        '            <h3>Payment</h3>\n' +
        '            <label for="fname">Accepted Cards</label>\n' +
        '            <div class="icon-container">\n' +
        '              <i class="fa-brands fa-cc-visa" style="color:navy;"></i>\n' +
        '              <i class="fa-brands fa-cc-amex" style="color:blue;"></i>\n' +
        '              <i class="fa-brands fa-cc-mastercard" style="color:red;"></i>\n' +
        '              <i class="fa-brands fa-cc-discover" style="color:orange;"></i>\n' +
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
        '      </form>\n' +
        '    </div>\n' +
        '  </div>\n' +
        '\n' +
        '    </div>\n' +
        '  </div>\n' +
        '</div></div>')
     //socket.emit('newOrder',room,from,to,custName, custId);
}

function handleConfirm(room,sfrom,sto) {
}

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

socket.on('loginSuccess', function () {
    renderHome('home');
//-------> if admin add options like delete/add employee
});
socket.on('loginFail', function () {
    alert("Incorrect user name or password, try again.");
});

socket.on('addRoomDone',function (roomNum) {
    alert("Room " +roomNum+ " added");
    renderHome('home');
});


// $(function(){
//     $('').click( function() {
//
//     });
// });


//############ Ping to server #################
$(function(){
    // when client clicks Search Rooms
    $('#search-btn').click( function() {
        let from = new Date($('#fromDate').val());//2022-08-01
        let to  = new Date($('#toDate').val());//2022-08-14
        // trigger server to execute selectRooms by chosen dates
        socket.emit('sendDates',from,to);
    });
});

$(function(){
    // when client clicks Search Rooms
    $('#emp-list-btn').click( function() {
        // trigger server to execute selectRooms by chosen dates
        socket.emit('displayEmpList');
    });
});

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
    $('#add-room-btn').click(function () {
        let roomNum = $('#room-num').val();
        let numOfBeds = $('#num-beds').val();
        let price = $('#room-price').val();
        socket.emit('addRoom',roomNum,numOfBeds,price);
    });
});

//Fixed price


renderPage = function (page) { // here the data and url are not hardcoded anymore
    return $.ajax({
        type: "GET",
        url: "http://localhost:8080/" + page,
        contentType: "text/html",
        success: function (data) {
            $("#container").html(data);
        }
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

renderHome = function (page) { // here the data and url are not hardcoded anymore
    return $.ajax({
        type: "GET",
        url: "http://localhost:8080/" + page,
        contentType: "text/html",
        success: function (data) {
            $("body").html(data);
        }
    });
}




