var map = L.map('myMap', {crs: L.CRS.Simple,minZoom:2, maxZoom:6, maxNativeZoom:6, zoomDelta: 0.5,
    zoomSnap: 0});

var tile = {tileSize: L.point(160, 160)};

L.tileLayer('https://raw.githubusercontent.com/in-stars-and-time-map/tiles/refs/heads/main/Act1/Dor_outside/{z}/{x}/{y}.png', tile).addTo(map)

//set view to roughly coords for meadow, will change so it's focused on room box at a later date 
map.setView([-138, 58], 6);

//credit at bottom right for leaflet, In Stars and Time, and Adrienne
map.attributionControl.addAttribution(
    '<a href="https://store.steampowered.com/app/1677310/In_Stars_And_Time/">In Stars and Time</a> &copy; <a href="https://www.insertdisc5.com/">insertdisc5</a>')
    .setPrefix('Powered by <a href="https://leafletjs.com/">Leaflet</a>')

//testing rectangle building outlines, let me play with my alphebet blocks, yo    
/*var bounds = [[-122.8047, 44.1094], [-149.8086, 69.5703]];
var bounds2 = [[-50.7602, 27.5007], [-122.8047, 92.0273]];
var bounds3 = [[-46.8438, 92.0500], [-110.7813, 157.9219]];
var bounds4 = [[-13.2344, 44.0313], [-50.7656, 69.5469]];
var bounds5 = [[-35.7813, 2.0156], [-85.2969, 27.4990]];

L.rectangle(bounds, {color: "#ff7800", weight: 0}).addTo(map);
L.rectangle(bounds2, {color: "#ff4800", weight: 0}).addTo(map);
L.rectangle(bounds3, {color: "#ff1800", weight: 0}).addTo(map);
L.rectangle(bounds4, {color: "#ff1800", weight: 0}).addTo(map);    
L.rectangle(bounds5, {color: "#ff1800", weight: 0}).addTo(map);*/

var mapBoxes = {"type":"FeatureCollection","features":[
    {"type":"Feature","id":"01","properties":{"name":"MEADOW"},"geometry":{"type":"Polygon","coordinates":[[[44.1094, -122.8047], [69.5703, -122.8047], [69.5703, -149.8086], [44.1094, -149.8086], [44.1094, -122.8047]]]}},
    {"type":"Feature","id":"02","properties":{"name":"DORMONT"},"geometry":{"type":"Polygon","coordinates":[[[27.5007, -50.7602],[27.5007, -122.8047],[92.0273, -122.8047],[92.0273, -50.7602],[27.5007, -50.7602]]]}},
    {"type":"Feature","id":"03","properties":{"name":"Village E"},"geometry":{"type":"Polygon","coordinates":[[[92.0500, -46.8438],[92.0500, -110.7813],[157.9219, -110.7813],[157.9219, -46.8438],[92.0500, -46.8438]]]}},
    {"type":"Feature","id":"04","properties":{"name":"Village N"},"geometry":{"type":"Polygon","coordinates":[[[44.0313, -13.2344],[44.0313, -50.7656],[69.5469, -50.7656],[69.5469, -13.2344],[44.0313, -13.2344]]]}},
    {"type":"Feature","id":"05","properties":{"name":"Village Tree (LOOP)"},"geometry":{"type":"Polygon","coordinates":[[[2.0156, -35.7813],[2.0156, -85.2969],[27.4990, -85.2969],[27.4990, -35.7813],[2.0156, -35.7813]]]}}
    //template, change with relevant latlngs: {"type":"Feature","id":"06","properties":{"name":"NameHere"},"geometry":{"type":"Polygon","coordinates":[[[1, 2],[1, 3],[4, 3],[4, 2],[1, 2]]]}},
]};

//set style for mapBoxes, have all these properies aaaand
function style() {
    return {
        weight: 1,
        color: 'black',
        opacity: 0,
        fillColor: 'white',
        fillOpacity: 0
    };
}
//when hovering change it so they actually show up
function highlightFeature(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 4,
        opacity: 0.9,
        fillOpacity: 0.2
    });
    layer.bringToFront();
    info.update(layer.feature.properties);
}

function resetHighlight(e) {
    geojson.resetStyle(e.target);
    info.update();
}

function zoomToRoom(e) {
    map.fitBounds(e.target.getBounds());
}

function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: zoomToRoom
    });
}

geojson = L.geoJson(mapBoxes, {
    style: style,
    onEachFeature: onEachFeature
}).addTo(map);

var info = L.control();

info.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
};

// method that we will use to update the control based on feature properties passed
info.update = function (props) {
    this._div.innerHTML = '<h4>Map Name</h4>' +  (props ?
        '<b>' + props.name + '</b><br />'
        : 'Hover over a map room');
};

info.addTo(map);

//testing popup stuff and how it works
var popup = L.popup()
    .setLatLng([-138, 58])
    .setContent("I am a standalone popup.")
    .openOn(map);

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);