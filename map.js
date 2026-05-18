const map = L.map('map').setView([20.5937, 78.9629], 5);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

navigator.geolocation.getCurrentPosition((position) => {

    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    map.setView([lat, lon], 15);

    L.marker([lat, lon])
        .addTo(map)
        .bindPopup("You are here")
        .openPopup();

});
