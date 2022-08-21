var lurl = 'http://localhost:8080';
var socket = io.connect(lurl);
//############ React to server's emit #################
socket.on('displayRooms', function (roomsArr) {
    $('#container').replaceAll("<div id=\"container\"><table class=\"table table-striped table-hover table-bordered \"><thead><tr><th>Room number</th><th>Number of beds</th><th>Price</th></tr></thead><tbody id=\"tBody\"></tbody></table></div>");
    for (const room of roomsArr) {
        const row = `
        <tr>
            <td>${room.room}</td>
            <td>${room.numOfBeds}</td>
            <td>${room.price}</td>
        </tr>`
        //tBody.innerHTML += row;
       $('#tBody').append(row);
    }
});
//
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









