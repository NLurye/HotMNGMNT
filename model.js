var lurl = 'http://localhost:8080';
var socket = io.connect(lurl);

//############ React to server's emit #################
socket.on('displayRooms', function (pop, roomsArr,sfrom,sto) {
    $('#container').empty().append("<table id=\"myTable\" class=\"table table-striped table-hover table-bordered \"><thead><tr><th onclick=\"sortTable(0)\">Room number</th><th onclick=\"sortTable(1)\">Number of beds</th><th onclick=\"sortTable(2)\">Price</th><th></th></tr></thead><tbody id=\"tBody\"></tbody></table>");
    const mostPop = `
        <tr id="pop">
            <td>${pop[0].room}</td>
            <td>${pop[0].numOfBeds}</td>
            <td>${pop[0].price}</td>
            <td><button onclick="handleReserve('${pop[0].room}','${sfrom}','${sto}')">Reserve</button></td>
        </tr>`
    $('#tBody').append(mostPop);
    $('#pop').css("background-color", "#FF6F61","background","url(popular.jpg)");
    for (const room of roomsArr) {
        const row = `
        <tr>
            <td>${room.room}</td>
            <td>${room.numOfBeds}</td>
            <td>${room.price}</td>
            <td><button onclick="handleReserve('${room.room}','${sfrom}','${sto}')">Reserve</button></td>
        </tr>`
        $('#tBody').append(row);
    }


});

socket.on('AdminSearchRoomDoneTest', function (roomsArr) {
    $('#container').empty().append("<table id=\"myTable\" class=\"table table-striped table-hover table-bordered \"><thead><tr><th onclick=\"sortTable(0)\">Room number</th><th onclick=\"sortTable(1)\">Number of beds</th><th onclick=\"sortTable(2)\">Price</th><th></th></tr></thead><tbody id=\"tBody\"></tbody></table>");
    for (const room of roomsArr) {
        const row = `
        <tr>
            <td>${room.room}</td>
            <td>${room.numOfBeds}</td>
            <td>${room.price}</td>
        </tr>`
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
        $('#tBody').append(row);
    }
});

socket.on('searchRoomFailed',function (roomNum) {
    alert("There is no room "+roomNum+" in your hotel.");
});

let handleReserve = function (sroom,sfrom,sto){
let selfrom = new Date(sfrom).toLocaleDateString('en-IL');
let selto = new Date(sto).toLocaleDateString('en-IL');
     $('#container').empty().append("<table class=\"table table-striped table-hover table-bordered \"><thead class='thead-dark'><tr><th scope='col'>Room number</th><th scope='col'>Check-in</th><th scope='col'>Check-out</th></tr></thead><tbody id=\"tBody\"></tbody></table>");

    const row = `
        <tr>
            <td id="selected-room-num">${sroom}</td>
            <td id="selected-from">${selfrom}</td>
            <td id="selected-to">${selto}</td>
        </tr>`
    const row2 = `<div>
          <div class="col-75">
            <div class="container">
              <form>
        
                <div class="row">
                  <div class="col-50">
                    <h3>Billing Address</h3>
                    <label for="fname"><i class="fa fa-user"></i> Full Name</label>
                    <input type="text" id="cust-name" name="firstname" placeholder="John M. Doe">
                    <label for="id"><i class="fa fa-user"></i> Identification Number</label>
                    <input type="text" id="cust-id" name="id" placeholder="123456789">
                  </div>
        
                  <div class="col-50">
                    <h3>Payment</h3>
                    <label for="fname">Accepted Cards</label>
                    <div class="icon-container">
                      <i class="fa fa-cc-visa" style="color:navy;"></i>
                      <i class="fa fa-cc-amex" style="color:blue;"></i>
                      <i class="fa fa-cc-mastercard" style="color:red;"></i>
                      <i class="fa fa-cc-discover" style="color:orange;"></i>
                    </div>
                    <label for="cname">Name on Card</label>
                    <input type="text" id="cname" name="cardname" placeholder="John More Doe">
                    <label for="ccnum">Credit card number</label>
                    <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444">
                    <label for="expmonth">Exp Month</label>
                    <input type="text" id="expmonth" name="expmonth" placeholder="September">
        
                    <div class="row">
                      <div class="col-50">
                        <label for="expyear">Exp Year</label>
                        <input type="text" id="expyear" name="expyear" placeholder="2018">
                      </div>
                      <div class="col-50">
                        <label for="cvv">CVV</label>
                        <input type="text" id="cvv" name="cvv" placeholder="352">
                      </div>
                    </div>
                  </div>
        
                </div>
               <button id="book-btn-success" type="button" class="btn btn-success" onclick="completeBook('${sroom}','${sfrom}','${sto}')">Book</button>
              </form>
            </div>
          </div>
        </div>`
    
    $('#tBody').append(row).append(row2)
}


function completeBook(room,from,to) {
    let id = ($('#cust-id').val());
    let name = ($('#cust-name').val());
    socket.emit('sendOrderVals',room,from,to, name, id);
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

$(function() {

    $('#login-form-link').click(function(e) {
        $("#login-form").delay(100).fadeIn(100);
        $("#register-form").fadeOut(100);
        $('#register-form-link').removeClass('active');
        $(this).addClass('active');
        e.preventDefault();
    });
    $('#register-form-link').click(function(e) {
        $("#register-form").delay(100).fadeIn(100);
        $("#login-form").fadeOut(100);
        $('#login-form-link').removeClass('active');
        $(this).addClass('active');
        e.preventDefault();
    });

});

function onCIClick() {
    let id = $('#id-num-ci').val();
    let name = $('#cust-name-ci').val();
    let roomNum = $('#room-num-ci').val();
    socket.emit('sendValsCheckIn', id,name,roomNum);
}


function onCOClick() {
    let id = $('#id-num-co').val();
    let name = $('#cust-name-co').val();
    let from = new Date($('#fromOutDate').val());
    let to  = new Date($('#toOutDate').val());
    socket.emit('sendValsCheckOut', id,name,from,to);
}

function onDelOrderClick() {
    let id = $('#id-num-co').val();
    let name = $('#cust-name-co').val();
    let from = new Date($('#fromOutDate').val());
    let to  = new Date($('#toOutDate').val());
    socket.emit('sendDeleteOrder', id,name,from,to);
}


socket.on('checkInDone',function (name) {
    alert("Welcome to our hotel " + name);
    renderHome('home');
})

socket.on('checkInFailed',function () {
    alert("reservation doesn't exist");
});

socket.on('checkOutDone',function (name) {
    alert(name + " has checked out");
    renderHome('home');
});

socket.on('deleteOrderDone',function () {
    alert('order deleted');
    renderHome('home');
});

socket.on('deleteEmployeeDone',function (id) {
    alert('employee ' + id + ' deleted');
    renderPage('admin');
});

socket.on('updateEmployeeDone',function (id) {
    alert('employee ' + id + ' updated');
    renderPage('admin');
});

socket.on('searchEmployeeDone',function (id) {
    alert('employee ' + id + ' has found');
    renderPage('admin');
});

socket.on('AdminSearchRoomDone',function (roomNum) {
    alert('room ' + roomNum + ' has found');
    renderPage('admin');
});

socket.on('AdminSearchRoomFailed',function (roomNum) {
    alert('room ' + roomNum + ' has not found');
    renderPage('admin');
});

socket.on('searchEmployeeFailed',function (id) {
    alert('employee ' + id + ' has not found');
    renderPage('admin');
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
    renderPage('admin');
});

socket.on('deleteRoomDone',function (roomNum) {
    alert("Room " +roomNum+ " deleted");
    renderPage('admin');
});

socket.on('OrderAdded',function (room,from,to, name) {
    alert("room number " + room + " is reserved to " + name + " from " + new Date(from) + " until " + to);
    renderHome('home');
});

socket.on('updateRoomDone',function (RoomNum) {
    alert("room number " + RoomNum + " updated ");
    renderPage('admin');
});


//############ Ping to server #################

function onBookClick() {
    let from = new Date($('#fromDate').val());//2022-08-01
    let to  = new Date($('#toDate').val());//2022-08-14
    let price  = $('#price-book').val();//2022-08-14
    let beds  = $('#beds-book').val();//2022-08-14

    // trigger server to execute selectRooms by chosen dates
    socket.emit('sendDates',from,to,price,beds);
}

function onEmpListClick() {
    socket.emit('displayEmpList');
}

function onEmpDelClick() {
    let id = $('#emp-id-del').val();
    socket.emit('deleteEmployee',id);
}

function onEmpUpdClick() {
    let id = $('#emp-id-del').val();
    let emp_pass = $('#emp-id-oldp').val();
    let new_emp_pass = $('#emp-id-newp').val();
    socket.emit('updateEmployee', id,emp_pass, new_emp_pass);
}

function onEmpSrcClick() {
    let id = $('#emp-id-del').val();
    socket.emit('searchEmployee', id);
}

function onRoomsListClick() {
    socket.emit('displayRoomsList');
}

function onAddRoomClick() {
    let roomNum = $("#room-num").val();
    let beds = $("#room-num-beds").val();
    let price = $("#room-price").val();
    socket.emit('addRoom' , roomNum, beds,price);
}

function onDelRoomClick() {
    let roomNum = $("#room-num").val();
    socket.emit('DeleteRoom' , roomNum);
}

function onSrcRoomClick() {
    let roomNum = $("#room-num").val();
    socket.emit('SearchRoom' , roomNum);
}
function onSrcRoomClickTest() {
    let roomNum = $("#room-num").val();
    let beds = $("#room-num-beds").val();
    let price = $("#room-price").val();
    socket.emit('SearchRoomTest' , roomNum,beds,price);
}

function onUpdRoomClick() {
    let roomNum = $("#room-num-upd").val();
    let newBeds = $("#room-new-beds").val();
    let newPrice = $("#room-new-price").val();
    socket.emit('UpdateRoom' ,roomNum, newBeds, newPrice);
}


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


//Fixed price
renderPage = function (page) { // here the data and url are not hardcoded anymore
    return $.ajax({
        type: "GET",
        url: "http://localhost:8080/" + page,
        contentType: "text/html",
        success: function (data) {
            $("#main").empty();
            $("#weather-table").empty();
            $("#container").html(data);
        }
    })}


renderHome = function (page) { // here the data and url are not hardcoded anymore
    addMapMarkers();
    let row1 = `<a id="weather-btn" onclick="useWeatherAPI()" class="navbar-brand">Show weather</a>`;
    $('#nav-nav').append(row1);
    return $.ajax({
        type: "GET",
        url: "http://localhost:8080/" + page,
        contentType: "text/html",
        success: function (data) {
            $("body").html(data);
        }
    });
}

function sortTable(n) {
    var table, rows, swapped, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("myTable");
    swapped = true;
    dir = "asc";
    while (swapped) {
        swapped = false;
        rows = table.rows;
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];
            if (dir === "asc") {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            } else if (dir === "desc") {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            swapped = true;
            switchcount++;
        } else {
            if (switchcount === 0 && dir === "asc") {
                dir = "desc";
                swapped = true;
            }
        }
    }
}

async function useWeatherAPI() {
const header =
    ` <tr>
         <th>Time</th>
         <th>Temperature</th>
     </tr>`
    const res = await fetch('https://api.open-meteo.com/v1/forecast?latitude=32.52&longitude=34.41&hourly=temperature_2m').then(res => res.json())
    $('#weather-table tbody').empty().append(header);
    for (let i = 0; i < res.hourly.time.length; i+=24) {
        let row = `
        <tr>
            <td style="width:50px; font-family: monospace; font-weight: bold">${new Date(res.hourly.time[i]).toLocaleDateString()}</td>
            <td style="width:50px; font-family: monospace; font-weight: bold">${res.hourly.temperature_2m[i]}</td>
        </tr>`
        $('#weather-table tbody').append(row);
        $('#weather-btn').empty();
    }

}


function addMapMarkers() {
    socket.emit('getLocations');
}
socket.on('newLocations',function initMap(arrLocations) {
    const ourHotel = { lat: 32.065997, lng: 34.775369 };
    // Initialize and add the map
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 13,
        center: ourHotel,
    });
    // The marker, positioned at ourHotel
    new google.maps.Marker({
        position: ourHotel,
        map: map,
        label: {
            color: 'black',
            fontWeight: 'bold',
            text: "HotMNGMNT Hotel",
        }
    });
    for(const attr of arrLocations ) {
        new google.maps.Marker({
            position: {lat: attr.lat, lng: attr.lng},
            map: map,
            label: {
                color: 'purple',
                fontWeight: 'bold',
                text: attr.description,
            }
        });
    }
    window.initMap = initMap;
});




