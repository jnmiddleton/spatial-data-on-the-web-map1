# Spatial Data on the Web: Map 1 (Phase 1)

This project is my phase one rendering an interactive web mapping application focused on Tartu, Estonia, created for the University of Tartu's Spring 2026 course *Spatial Data on the Web*. It demonstrates three distinct spatial data visualizations using Leaflet.js to analyze radio and cell tower distribution.


## Core Visualizations
 - Clustered Radio Tower Points: Efficiently manages high-density point data using marker clustering.
 - Choropleth Map: Visualizes district-level cell tower density using a custom continuous red color scale.
 - Dynamic Heatmap: Provides a visual representation of tower intensity across the city.


## Data Sources and Libraries
 - GeoJSON: District boundaries and tower locations for Tartu, Estonia.
 - Libraries: Leaflet.js, Leaflet.markercluster, Leaflet.heat.


## Repository Structure
```
spatial-data-on-the-web-map1/
├── README.md
├── choroplethmap.html
├── heatmap.html
├── index.html
├── css/
│     └── styles.css
├── img/
│     └── banner.jpeg
├── js/
      ├── choroplethmap.js
      ├── heatmap.js
│     └── javascript.js
└── geojson/
      ├── tartu_city_celltowers_edu.geojson
      └── tartu_city_districts_edu.geojson
```
## Further Reading

The interactive web rendering is available on my [ePortfolio](https://sites.google.com/view/jessicamiddleton-eportfolio/selected-geospatial-visualizations/interactive-web-mapping?authuser=0) or at [https://jnmiddleton.github.io/spatial-data-on-the-web-map1/](https://jnmiddleton.github.io/spatial-data-on-the-web-map1/).
   
