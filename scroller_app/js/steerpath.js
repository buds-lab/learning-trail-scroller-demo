

// base code to run steerpath
mapboxgl.accessToken = '';
var token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzY29wZXMiOiJiYXNlOnI7bnVzX3N0YXRpYzpyO251c19keW5hbWljOnIiLCJtZXRhQWNjZXNzIjoieSIsImp0aSI6IjkzYzM1Yjk5LTU4NWItNDE4NC1hZGZkLWVjYmE1OGMwNjc2ZSIsInN1YiI6Im51cyIsImVkaXRSaWdodHMiOiIiLCJlaWRBY2Nlc3MiOiJ5In0.EjYm2hieaJaEjr6Bsq9cHBIoModZyfTAB6ojJyWTXD8";
var styleUrl = "https://mapdata.eu.steerpath.com/style/web.json?access_token="+token

var mapboxMap = new mapboxgl.Map({
  container: 'mapboxMap',
  style: styleUrl,
  center: [103.770322, 1.296876],
  zoom: 18.6,
  bearing: 0,
  pitch: 0
});


      
//Adding markers

mapboxMap.once('load', function(e){
   addMarkers();
 });


//options for SteerpathMap class
var options = {
inspectionZoomLevel: 15,
inspectionBoundaries: 0.5,
queryOnceMapLoad: true
};

//create instance of SteerpathMap
var steerpathMap = new steerpath.SteerpathMap(mapboxMap, options);
//create floor switcher control and add it to the map
var floorSwitcher = new steerpath.FloorSwitcherControl(steerpathMap);
mapboxMap.addControl(floorSwitcher, 'bottom-right');

//some building ref thing that I don't know
var buildingRef = steerpathMap.getActiveBuildingRef()
console.log(buildingRef)


 var geojson = {
     "type": "FeatureCollection",
     "features": [
         {
             "type": "Feature",
             "properties": {
                 "icon": "marker",
                 "layerIndex": 1,
                 "message": "miu",
                 "iconSize": [40, 40],
                 "buildingRef": "250"

             },

             "geometry": {
                 "type": "Point",
                 "coordinates": [103.772022, 1.296746]
             }
         },{
             "type": "Feature",
             "properties": {
                 "icon": "marker",
                 "message": "mau",
                 "layerIndex": 3,
                 "iconSize": [40, 40],
                 "buildingRef": "your_building_ref"

             },
             "geometry": {
                 "type": "Point",
                 "coordinates": [2, 2]
             }
         }
     ]
 }

 //Steerpath marker
 function addMarkers(){
   geojson.features.forEach(function(marker) {
     // create a DOM element for the marker
     var el = document.createElement('div');
     el.className = 'marker';
     el.style.backgroundImage = 'url(https://placekitten.com/g/' + marker.properties.iconSize.join('/') + '/)';
     el.style.width = marker.properties.iconSize[0] + 'px';
     el.style.height = marker.properties.iconSize[1] + 'px';
     el.style.display = "block";

     // create the popup
     var myPopup = new mapboxgl.Popup({offset:[0, -30]})
       .setText(marker.properties.message);
     // add marker to map
     new steerpath.Marker(el, {offset: [-marker.properties.iconSize[0] / 2, -marker.properties.iconSize[1] / 2]})
         .setLngLat(marker.geometry.coordinates)
         .setPopup(myPopup)
         .setLayerIndex(marker.properties.layerIndex)
         .setBuildingRef(marker.properties.buildingRef)
         .addTo(mapboxMap);

   });
 }