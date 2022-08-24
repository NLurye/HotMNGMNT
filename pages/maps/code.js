// Initialize and add the map
function initMap() {
    // The location of ourHotel
    const ourHotel = { lat: 32.065997, lng: 34.775369 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 13,
        center: ourHotel,
    });
    // The marker, positioned at ourHotel
    const marker = new google.maps.Marker({
        position: ourHotel,
        map: map,
    });
}

window.initMap = initMap;

