# Spatial Data on the Web: Map 1 (Phase 1)

This project is my phase one rendering an interactive web mapping application focused on Tartu, Estonia, created for the University of Tartu's Spring 2026 course *Spatial Data on the Web*. It demonstrates three distinct spatial data visualizations using Leaflet.js to analyze radio and cell tower distribution.


## Core Visualizations:
 - Clustered Radio Tower Points: Efficiently manages high-density point data using marker clustering.
 - Choropleth Map: Visualizes district-level cell tower density using a custom continuous red color scale.
 - Dynamic Heatmap: Provides a visual representation of tower intensity across the city.


## Data Sources and Libraries
 - GeoJSON: District boundaries and tower locations for Tartu, Estonia.
 - Libraries: Leaflet.js, Leaflet.markercluster, Leaflet.heat.


## Local Setup
 1. Clone the repository: git clone [https://github.com/jnmiddleton/spatial-data-on-the-web-map1.git](https://github.com/jnmiddleton/spatial-data-on-the-web-map1.git)
 2. Open index.html in a modern web browser (Chrome, Firefox, or Safari).
 3. Use the top-left UI controls to toggle between the Choropleth and Heatmap modes. Use the Reset button to snap back to the default view (full extent of Tartu).
   
