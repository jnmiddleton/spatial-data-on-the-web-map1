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

// Fetch the districts GeoJSON and add a choropleth layer
async function addGeoJson(url) {
  const response = await fetch(url)
  const data = await response.json()

  console.log('District feature properties:', data.features[0].properties)

  L.choropleth(data, {
    valueProperty: 'OBJECTID',

    scale: ['#ffffff', '#e65c00'],

    steps: 5,

    mode: 'q',

    style: {
      color: '#555555',   // border colour
      weight: 2,
      fillOpacity: 0.75,
    },

    onEachFeature: function (feature, layer) {
  
      layer.bindPopup(
        '<b>' + feature.properties.NIMI + '</b><br>' +
        'Value: ' + feature.properties.OBJECTID
      )
    },
  }).addTo(map)
}

addGeoJson('geojson/tartu_city_districts_edu.geojson')

document.getElementById('resetButton').onclick = function() {
    location.reload();
};
