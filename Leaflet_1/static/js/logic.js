// Creating the map object. Center of the world map. used zoom level 2 to show entire worldmap.
let myMap = L.map("map", {
  center: [0, 0],  
  zoom: 2 
});

// Adding the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// Load earthquake data from USGS
d3.json('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson').then(function(data) {
  // Function to determine marker size based on earthquake magnitude
  function markerSize(magnitude) {
    return magnitude * 2;
  }


  // Add earthquake data to the map
  data.features.forEach(function(earthquake) {
    let coordinates = earthquake.geometry.coordinates;
    let magnitude = earthquake.properties.mag;
    let depth = coordinates[2];
    
    L.circleMarker([coordinates[1], coordinates[0]], {
      radius: markerSize(magnitude),
      fillColor: markerColor(depth),
      color: "#000",
      weight: 1,
      opacity: 1,
      fillOpacity: 0.8
    }).bindPopup(
      `<h3>Location: ${earthquake.properties.place}</h3>
       <hr>
       <p>Magnitude: ${magnitude}</p>
       <p>Depth: ${depth} km</p>`
    ).addTo(myMap);
  });

  // Function to determine marker color based on earthquake depth
  function markerColor(depth) {
    return depth > 90 ? '#800026' :
    depth > 70 ? '#BD0026' :
    depth > 50 ? '#E31A1C' :
    depth > 30 ? '#FC4E2A' :
    depth > 10 ? '#FD8D3C' :
    depth >= -10 ? '#FEB24C' :  
                 '#FFEDA0';   // Default color for depths below -10 km
}

  // Add the legend with colors to correlate with depth
let legend = L.control({ position: "bottomright" });

legend.onAdd = function() {
  let div = L.DomUtil.create("div", "info legend"),
      depth = [-10, 10, 30, 50, 70, 90];

  for (let i = 0; i < depth.length; i++) {
    // Ensure 'markerColor' function is used to get colors
    div.innerHTML +=
      '<i style="background:' + markerColor(depth[i] + 1) + '"></i> ' +
      depth[i] + (depth[i + 1] ? '&ndash;' + depth[i + 1] + '<br>' : '+');
  }
  return div;
};

legend.addTo(myMap);
});
