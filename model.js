var lurl = 'http://localhost:8080';
var socket = io.connect(lurl);
// React to server's emit
socket.on('displayRooms', function (roomsArr) {
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

//Ping to server
$(function(){
    // when the client clicks Send dates
    $('#search-btn').click( function() {
        // tell server to execute selectRooms (and send along dates)
        let from = new Date('2022-08-01'); //<---get from url/form instead
        let to = new Date('2022-08-14'); //<---get from url/form instead
        socket.emit('sendDates',from,to);
    });
});








