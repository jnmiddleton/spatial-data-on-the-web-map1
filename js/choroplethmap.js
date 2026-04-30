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

  // Log the first feature's properties to the console so you can confirm
  // the exact attribute names available in the GeoJSON file
  console.log('District feature properties:', data.features[0].properties)

  L.choropleth(data, {
    // valueProperty is the attribute that drives the colour scale.
    // Your districts file uses OBJECTID (a unique ID per district).
    // If a "cell tower count" attribute exists (e.g. celltower_count),
    // replace 'OBJECTID' with that name after checking the console log above.
    valueProperty: 'OBJECTID',

    // Colour scale: white → orange. Adjust end colour to taste.
    scale: ['#ffffff', '#e65c00'],

    // Number of colour steps/buckets
    steps: 5,

    // 'q' = quantile (distributes features evenly across steps)
    // 'e' = equidistant (equal numeric range per step)
    mode: 'q',

    style: {
      color: '#555555',   // border colour
      weight: 2,
      fillOpacity: 0.75,
    },

    onEachFeature: function (feature, layer) {
      // NIMI is the district name field you already use in javascript.js
      // OBJECTID is the value being visualised — update the label if you
      // switch valueProperty to a cell tower count field
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
