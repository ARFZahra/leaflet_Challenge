# leaflet_Challenge

Leaflet Earthquake Data Visualization

Challenge Overview: This challenge creates an interactive map to display earthquake data provided by the United States Geological Survey (USGS) using JavaScript, Leaflet, and HTML.

Repository Structure: The  challenge is housed in a repository named leaflet-challenge and contains the following key components:

Folder: Leaflet-Part-1
Static Folder:
js/logic.js: Contains the JavaScript code for the map logic.
css/style.css: Contains the CSS styles for the map visualization.
index.html: The main HTML file for the map visualization.

Dataset:
Source: USGS Earthquake Data
Description: All Earthquakes from the Past 7 Days in GeoJSON format.

Map Features:

Centered World Map:
The map is centered on the world, with a zoom level of 2 to display the entire globe.
Tile Layer: The base map layer is provided by OpenStreetMap.

Earthquake Data Visualization:
Circle Markers: Each earthquake is represented by a circle marker. The size of the marker is proportional to the earthquake's magnitude, and the color represents the depth of the earthquake. earthquakes with greater depth should appear darker in colour.

Popup Information: When a marker is clicked, a popup displays detailed information about the earthquake, including location, magnitude, depth, and time.
Legend:

A legend is added to the bottom right corner of the map to help users understand the colour coding for earthquake depths
