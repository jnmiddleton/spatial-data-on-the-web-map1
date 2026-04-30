// Initialize the Leaflet map centred on Tartu, Estonia
var map = L.map('map').setView([58.3780, 26.7290], 12);

// Add OpenStreetMap tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  maxZoom: 19
}).addTo(map);


// add geoJSON polygons layer*
async function addDistrictsGeoJson(url) {
  const response = await fetch(url)
  const data = await response.json()
  const polygons = L.geoJson(data)
  polygons.addTo(map)
}
addDistrictsGeoJson('geojson/tartu_city_districts_edu.geojson')