let map = L.map("mijnRegio").setView([51.1965, 4.4409], 13);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

// Cirkel rond Antwerpen-Berchem
var circle = L.circle([51.1965, 4.4409], {
  radius: 1200,
  color: "green",
  fillColor: "#90ee90",
  fillOpacity: 0.3,
}).addTo(map);

circle.bindPopup("Antwerpen Berchem");
