var map = L.map('myMap', {
    crs: L.CRS.Simple,
    minZoom:1, 
    maxZoom:6, 
    maxNativeZoom:6, 
    zoomDelta: 0.5,
    zoomSnap: 0,
    tileSize: L.point(160, 160)
});

var tile = {tileSize: L.point(160, 160)};

var dor_inside_map = L.tileLayer("https://raw.githubusercontent.com/in-stars-and-time-map/tiles/refs/heads/main/Act1/Dor_outside/{z}/{x}/{y}.png", tile)

dor_inside_map.addTo(map)

//set view to roughly coords for meadow, will change so it's focused on room box at a later date 
map.setView([-138, 58], 6);

//credit at bottom right for leaflet, In Stars and Time, and Adrienne
map.attributionControl.addAttribution(
    '<a href="https://store.steampowered.com/app/1677310/In_Stars_And_Time/">In Stars and Time</a> &copy; <a href="https://www.insertdisc5.com/">insertdisc5</a>')
    .setPrefix('Powered by <a href="https://leafletjs.com/">Leaflet</a>')

//testing rectangle building outlines, let me play with my alphebet blocks, yo    
/*
Other
*/

var mapBoxes = {"type":"FeatureCollection","features":[
    {"type":"Feature","id":"01","properties":{"name":"MEADOW"},"geometry":{"type":"Polygon","coordinates":[[[44.1094, -122.8047], [69.5703, -122.8047], [69.5703, -149.8086], [44.1094, -149.8086], [44.1094, -122.8047]]]}},
    {"type":"Feature","id":"02","properties":{"name":"DORMONT"},"geometry":{"type":"Polygon","coordinates":[[[27.5007, -50.7602],[27.5007, -122.8047],[92.0273, -122.8047],[92.0273, -50.7602],[27.5007, -50.7602]]]}},
    {"type":"Feature","id":"03","properties":{"name":"Village E"},"geometry":{"type":"Polygon","coordinates":[[[92.0500, -46.8438],[92.0500, -110.7813],[157.9219, -110.7813],[157.9219, -46.8438],[92.0500, -46.8438]]]}},
    {"type":"Feature","id":"04","properties":{"name":"Village N"},"geometry":{"type":"Polygon","coordinates":[[[44.0313, -13.2344],[44.0313, -50.7656],[69.5469, -50.7656],[69.5469, -13.2344],[44.0313, -13.2344]]]}},
    {"type":"Feature","id":"05","properties":{"name":"Village Tree (LOOP)"},"geometry":{"type":"Polygon","coordinates":[[[2.0156, -35.7813],[2.0156, -85.2969],[27.4990, -85.2969],[27.4990, -35.7813],[2.0156, -35.7813]]]}}
    //template, change with relevant latlngs: {"type":"Feature","id":"06","properties":{"name":"NameHere"},"geometry":{"type":"Polygon","coordinates":[[[1, 2],[1, 3],[4, 3],[4, 2],[1, 2]]]}},
]};

var mapBoxes2 = {"type":"FeatureCollection","features":[
    {"type":"Feature","id":"06","properties":{"name":"Shop"},"geometry":{"type":"Polygon","coordinates":[[[50.8281, -58.125], [70.9219, -58.125], [70.9219, -42.6406], [50.8281, -42.6406], [50.8281, -58.125]]]}},
    {"type":"Feature","id":"07","properties":{"name":"Library"},"geometry":{"type":"Polygon","coordinates":[[[72.3125, -67.2188], [89.4219, -67.2188], [89.4219, -53.1719], [72.3125, -53.1719], [72.3125, -67.2188]]]}},
    {"type":"Feature","id":"08","properties":{"name":"House_FrozenWife"},"geometry":{"type":"Polygon","coordinates":[[[70.1719, -102.6094], [84.0313, -102.6094], [84.0313, -87.1563], [70.1719, -87.1563], [70.1719, -102.6094]]]}},
    {"type":"Feature","id":"09","properties":{"name":"House_Novels"},"geometry":{"type":"Polygon","coordinates":[[[43.6562, -103.125], [57.7656, -103.125], [57.7656, -88.9062], [43.6562, -88.9062], [43.6562, -103.125]]]}},
    {"type":"Feature","id":"10","properties":{"name":"House_Change"},"geometry":{"type":"Polygon","coordinates":[[[28.0625, -92.9531], [42.2188, -92.9531], [42.2188, -78.7813], [28.0625, -78.7813], [28.0625, -92.9531]]]}},
    {"type":"Feature","id":"11","properties":{"name":"House_Boulangerie"},"geometry":{"type":"Polygon","coordinates":[[[32.7813, -68.3125], [46.8594, -68.3125], [46.8594, -52.7344], [32.7813, -52.7344], [32.7813, -68.3125]]]}},
    {"type":"Feature","id":"12","properties":{"name":"House_Flowers"},"geometry":{"type":"Polygon","coordinates":[[[93.7031, -54.75], [107.8125, -54.75], [107.8125, -40.5938], [93.7031, -40.5938], [93.7031, -54.75]]]}},
    {"type":"Feature","id":"13","properties":{"name":"House_Cook"},"geometry":{"type":"Polygon","coordinates":[[[109.2031, -66.875], [126.1406, -66.875], [126.1406, -52.875], [109.2031, -52.875], [109.2031, -66.875]]]}}
    //{"type":"Feature","id":"14","properties":{"name":"House_Storage"},"geometry":{"type":"Polygon","coordinates": }},
]};

var mira_pin = L.marker([-73.8125, 74.796875], {icon: L.icon({iconUrl: 'https://instarsandtime.wiki.gg/images/f/f5/GAMEICON_154.png', iconSize:[32, 32]})}).bindPopup('Mirabelle'),
    isa_pin    = L.marker([-64.921875, 17.609375], {icon: L.icon({iconUrl: 'https://instarsandtime.wiki.gg/images/4/46/GAMEICON_152.png', iconSize:[32, 32]})}).bindPopup('Josy voice: Isabeauuuuu'),
    bon_pin    = L.marker([-100.65625, 103.125], {icon: L.icon({iconUrl: 'https://instarsandtime.wiki.gg/images/5/5f/GAMEICON_150.png', iconSize:[32, 32]})}).bindPopup('Bonnie'),
    odile_pin    = L.marker([-63.910697, 64.276706], {icon: L.icon({iconUrl: 'https://instarsandtime.wiki.gg/images/8/81/GAMEICON_153.png', iconSize:[32, 32]})}).bindPopup('[Odile, inside]').setOpacity(0.5)

var main_chara = L.layerGroup([mira_pin, isa_pin, bon_pin, odile_pin]);

var dor_in = L.tileLayer("https://raw.githubusercontent.com/in-stars-and-time-map/tiles/refs/heads/main/Act1/Dor_inside/{z}/{x}/{y}.png", {
    tileSize: L.point(160, 160)
}), onNewlocation;

var dor_out = L.tileLayer("https://raw.githubusercontent.com/in-stars-and-time-map/tiles/refs/heads/main/Act1/Dor_outside/{z}/{x}/{y}.png", {
    tileSize: L.point(160, 160)
});

//set style for mapBoxes, have all these properies aaaand
function style() {
    return {
        weight: 2,
        color: 'black',
        opacity: .5,
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
    boxFunctions.resetStyle(e.target);
    info.update();
}

function zoomToRoom(e) {
    map.fitBounds(e.target.getBounds().pad(0.1));
}

function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: zoomToRoom
    });
}

boxFunctions = L.geoJson(mapBoxes, {
    style: style,
    onEachFeature: onEachFeature
});

var info = L.control();

info.onAdd = function () {
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
    .setContent("Spawn")
    .openOn(map);

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("Location: " + e.latlng.toString())
        .openOn(map);
}


var baseLayers = {
    "Dormont (Outside)": dor_out,
    "Dormont (Inside)": dor_in
};

var overlayMaps = {
    "Main Characters": main_chara,
    "Rooms": boxFunctions
};

var layerControl = L.control.layers(baseLayers, overlayMaps).addTo(map);

function onOverlayAdd(e){
    if (map.hasLayer(dor_in)) {
        odile_pin
            .setLatLng([-47.77, 66.276706])
            .setOpacity(1.0)
            .setPopupContent('Odile');
        isa_pin.setOpacity(0.5); 
        mira_pin.setOpacity(0.5); 
        bon_pin.setOpacity(0.5);
    } 
    else if (map.hasLayer(dor_out)) {
        odile_pin
            .setLatLng([-63.910697, 64.276706])
            .setOpacity(.5)
            .setPopupContent('[Odile, inside]');
        isa_pin.setOpacity(1.0); 
        mira_pin.setOpacity(1.0); 
        bon_pin.setOpacity(1.0);
  }
}


map.on('click', onMapClick);

map.on('baselayerchange', onOverlayAdd);
