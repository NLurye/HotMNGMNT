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
            <td><button onclick="handleReserve(${room.room},${sfrom},${sto})">Reserve</button></td>
        </tr>`
        //tBody.innerHTML += row;
       $('#tBody').append(row);
    }
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
        socket.emit('sendValsCheckOut',id,name);
    });
});

socket.on('checkInDone',function () {
    renderHome('home');
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
    // when client clicks Login
    $('#login-submit').click( function() {
        let username = ($('#username-l').val());
        let pw = ($('#password-l').val());
        // trigger server to validate login
        socket.emit('valLogin',username,pw);
    });
});

//Fixed price
function handleReserve(room,from,to){
    socket.emit('newOrder',room,from,to,custName, custId);
}

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
        contentType: "text/html"
    }).success(function (data) {
        $("body").html(data);
    }).fail(function (sender, message, details) {
        alert("Sorry, something went wrong!");
    });
}



