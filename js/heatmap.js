// Initialize the Leaflet map centred on Tartu, Estonia
var map = L.map('map').setView([58.3780, 26.7290], 12);

// Add OpenStreetMap tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  maxZoom: 19
}).addTo(map);

// Reset view button
function defaultMapSettings() {
  map.setView([58.3780, 26.7290], 12);
}

// Convert a GeoJSON feature to the [lat, lon, intensity] format Leaflet.heat expects
function heatDataConvert(feature) {
  return [
    feature.geometry.coordinates[1], // latitude  (GeoJSON stores [lon, lat], so index 1)
    feature.geometry.coordinates[0], // longitude (index 0)
    feature.properties.area,         // intensity value — higher area code = stronger heat colour
  ]
}

// Fetch the cell tower GeoJSON, convert it, and add the heatmap layer
async function addGeoJson(url) {
  const response = await fetch(url)
  const data = await response.json()
  const heatData = data.features.map(heatDataConvert)
  const heatMap = L.heatLayer(heatData, { radius: 10 })
  heatMap.addTo(map)
}

addGeoJson('geojson/tartu_city_celltowers_edu.geojson')

document.getElementById('resetButton').onclick = function() {
    location.reload();
};
