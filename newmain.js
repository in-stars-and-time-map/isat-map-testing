var map = L.map('myMap', {
    crs: L.CRS.Simple,
    minZoom:2, 
    maxZoom:7, 
    maxNativeZoom:7, 
    zoomDelta: 1,
    zoomSnap: 0,
    tileSize: L.point(180, 180),
});

var tile = {tileSize: L.point(180, 180)};

map.setView([-119.179687, 78.445313], 6);

//alert('The following map contains major spoilers for hit indie videogame "In Stars and Time." You have been warned :0)');

//credit at bottom right for leaflet, In Stars and Time, and Adrienne
map.attributionControl.addAttribution(
    '<a href="https://store.steampowered.com/app/1677310/In_Stars_And_Time/">In Stars and Time</a> &copy; <a href="https://www.insertdisc5.com/">insertdisc5</a>')
    .setPrefix('Powered by <a href="https://leafletjs.com/">Leaflet</a>')
 
/*
Other
*/



var sadness = L.marker([-114.09375, 87.921875]).bindPopup('Tutorial sadness'),
    bell    = L.marker([-80.953125, 76.6875]).bindPopup('Bell that goes ding ding')

var poi = L.layerGroup([sadness, bell]);

var mira_pin = L.marker([-86.921875, 87.40625], {icon: L.icon({iconUrl: 'https://instarsandtime.wiki.gg/images/f/f5/GAMEICON_154.png', iconSize:[32, 32]})}).bindPopup('<a href = "https://instarsandtime.wiki.gg/wiki/Mirabelle">Mirabelle</a>'),
    isa_pin    = L.marker([-82.609375, 58.835938], {icon: L.icon({iconUrl: 'https://instarsandtime.wiki.gg/images/4/46/GAMEICON_152.png', iconSize:[32, 32]})}).bindPopup('<a href = "https://instarsandtime.wiki.gg/wiki/Isabeau">Isabeau</a>'),
    bon_pin    = L.marker([-100.421875, 101.59375], {icon: L.icon({iconUrl: 'https://instarsandtime.wiki.gg/images/5/5f/GAMEICON_150.png', iconSize:[32, 32]})}).bindPopup('<a href = "https://instarsandtime.wiki.gg/wiki/Bonnie">Bonnie</a>'),
    odile_pin    = L.marker([-81.835937, 82.125], {icon: L.icon({iconUrl: 'https://instarsandtime.wiki.gg/images/8/81/GAMEICON_153.png', iconSize:[32, 32]})}).bindPopup('[Odile, inside]').setOpacity(0.5)

var main_chara = L.layerGroup([mira_pin, isa_pin, bon_pin, odile_pin]);

var dor_in = L.tileLayer("https://raw.githubusercontent.com/in-stars-and-time-map/tiles/refs/heads/main/Act1/Dor_inside/{z}/{x}/{y}.png", tile), onNewlocation;
var dor_out = L.tileLayer("https://raw.githubusercontent.com/in-stars-and-time-map/tiles/refs/heads/main/Act1/Dor_outside/{z}/{x}/{y}.png", tile);
var house_one = L.tileLayer("https://raw.githubusercontent.com/in-stars-and-time-map/tiles/refs/heads/main/Act1/Floor1/{z}/{x}/{y}.png", tile);
var house_one_act2 = L.tileLayer("https://raw.githubusercontent.com/in-stars-and-time-map/tiles/refs/heads/main/Act2-4/Floor1/{z}/{x}/{y}.png", tile);
var house_two_act2 = L.tileLayer("https://raw.githubusercontent.com/in-stars-and-time-map/tiles/refs/heads/main/Act2-4/Floor2/{z}/{x}/{y}.png", tile);
var house_three_act2 = L.tileLayer("https://raw.githubusercontent.com/in-stars-and-time-map/tiles/refs/heads/main/Act2-4/Floor3/{z}/{x}/{y}.png", tile);

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
    //window.open(e.target.feature.properties.name);
}

function resetHighlight(e) {
    boxFunctions.resetStyle(e.target);
    info.update();
}

function zoomToRoom(e) {
    map.fitBounds(e.target.getBounds().pad(0.1));
    //window.open(e.target.feature.id);
}

function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: zoomToRoom
    });
}

function boxCalc(boxSel){
cool_var = L.geoJson(boxSel, {
        style: style,
        onEachFeature: onEachFeature
});
return cool_var;
}

boxFunctions = boxCalc(mapBoxes);

var info = L.control();

info.onAdd = function () {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
};

/* method that we will use to update the control based on feature properties passed */
info.update = function (props) {
    this._div.innerHTML = '<h4>Map Name</h4>' +  (props ?
        '<b>' + props.name + '</b><br />'
        : 'Hover over a map room');
};

info.addTo(map);

//testing popup stuff and how it works
var popup = L.popup()
    .setLatLng([-119.179687, 78.445313])
    .setContent("Start")
    .openOn(map);

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("Location: " + e.latlng.toString())
        .openOn(map);
}

function lowerOpacity(){ 
    main_chara.eachLayer(function(charact) {
        charact.setOpacity(0.5);
    });
    odile_pin
            .setLatLng([-74.03125, 83.453125])
            .setOpacity(1)
            .setPopupContent('<a href = "https://instarsandtime.wiki.gg/wiki/Odile">Odile</a>');
}

function raiseOpacity(){
    main_chara.eachLayer(function(charact) {
        charact.setOpacity(1);
    });
    odile_pin
            .setLatLng([-81.835937, 82.125])
            .setOpacity(.5)
            .setPopupContent('[Odile, inside]');
}

var baseLayers = {
    "Dormont (Outside)": dor_out,
    "Dormont (Inside)": dor_in,
    "House of Change (Floor 1 ACT1)": house_one,
    "House of Change (Floor 1 ACT2+)": house_one_act2,
    "House of Change (Floor 2 ACT2+)": house_two_act2,
    "House of Change (Floor 3 ACT2+)": house_three_act2
};

var overlayMaps = {
    "Rooms": boxFunctions,
    "Main Characters": main_chara,
};

var overlayMapsACT1House = {
    "Rooms": boxFunctions,
    "Points of Interest": poi,
};

var layerControl = L.control.layers(baseLayers, overlayMaps, { collapsed: false }).addTo(map);

//urlMapSet = '';
let url = new URL("https://in-stars-and-time-map.github.io/isat-map-testing/");
let params = new URLSearchParams(url.search);

function onOverlayAdd(e){
    if (map.hasLayer(dor_in)) {
        //urlMapSet = 'Dor_in';
        params.append("map", "Dor_in");
        lowerOpacity();
        poi.removeFrom(map);
        if (map.hasLayer(boxFunctions)) {
            boxFunctions.removeFrom(map);
            boxFunctions = boxCalc(mapBoxes2);
            var overlayMaps = {
                "Rooms for Dor IN 1": boxFunctions,
                "Main Characters": main_chara,
            };
            layerControl.remove(map);
            layerControl = L.control.layers(baseLayers, overlayMaps, { collapsed: false }).addTo(map);
            boxFunctions.addTo(map);
        } else {
            boxFunctions.removeFrom(map);
            boxFunctions = boxCalc(mapBoxes2);
            var overlayMaps = {
                "Rooms for Dor IN 2": boxFunctions,
                "Main Characters": main_chara,
            };
            layerControl.remove(map);
            layerControl = L.control.layers(baseLayers, overlayMaps, { collapsed: false }).addTo(map);
        }
    } 
    if (map.hasLayer(dor_out)) {
        urlMapSet = 'Dor_out'
        raiseOpacity();
        poi.removeFrom(map);
        if (map.hasLayer(boxFunctions)) {
            boxFunctions.removeFrom(map);
            boxFunctions = boxCalc(mapBoxes);
            var overlayMaps = {
                "Rooms for Dor OUT 1": boxFunctions,
                "Main Characters": main_chara,
            };
            layerControl.remove(map);
            layerControl = L.control.layers(baseLayers, overlayMaps, { collapsed: false }).addTo(map);
            boxFunctions.addTo(map);
        } else {
            boxFunctions.removeFrom(map);
            boxFunctions = boxCalc(mapBoxes);
            var overlayMaps = {
                "Rooms for Dor OUT 2": boxFunctions,
                "Main Characters": main_chara,
            };
            layerControl.remove(map);
            layerControl = L.control.layers(baseLayers, overlayMaps, { collapsed: false }).addTo(map);
        }
        //layerControl.remove(map);
        //layerControl = L.control.layers(baseLayersACT1, overlayMaps, { collapsed: false }).addTo(map);
        alert('Flag2');
    }
    if (map.hasLayer(house_one)) {
        layerControl.removeLayer(main_chara);
        main_chara.removeFrom(map);
        if (map.hasLayer(boxFunctions)) {
            boxFunctions.removeFrom(map);
            boxFunctions = boxCalc(mapBoxes3);
            var overlayMaps = {
                "Rooms": boxFunctions,
                "Points of Interest": poi,
            };
            layerControl.remove(map);
            layerControl = L.control.layers(baseLayers, overlayMaps, { collapsed: false }).addTo(map);
            boxFunctions.addTo(map);
        } else {
            boxFunctions = boxCalc(mapBoxes3);
            var overlayMaps = {
                "Rooms": boxFunctions,
                "Points of Interest": poi,
            };
            layerControl.remove(map);
            layerControl = L.control.layers(baseLayers, overlayMaps, { collapsed: false }).addTo(map);
        }
    } 
    if (map.hasLayer(house_one_act2)) {
        layerControl.removeLayer(main_chara);
        main_chara.removeFrom(map);
        if (map.hasLayer(boxFunctions)) {
            boxFunctions.removeFrom(map);
            boxFunctions = boxCalc(mapBoxes4);
            var overlayMaps = {
                "Rooms": boxFunctions,
                "Points of Interest": poi,
            };
            layerControl.remove(map);
            layerControl = L.control.layers(baseLayers, overlayMaps, { collapsed: false }).addTo(map);
            boxFunctions.addTo(map);
        } else {
            boxFunctions = boxCalc(mapBoxes4);
            var overlayMaps = {
                "Rooms": boxFunctions,
                "Points of Interest": poi,
            };
            layerControl.remove(map);
            layerControl = L.control.layers(baseLayers, overlayMaps, { collapsed: false }).addTo(map);
        }
    } 
}
//setting default map to dor outside act1 
dor_out.addTo(map);
map.on('draw:created', function(e){
    var type = e.layerType,
        layer = e.layer;

    layer.on('click', function(){
       window.open('http://www.example.com','_blank');
    });  

    drawnItems.addLayer(layer);
});  
map.on('click', onMapClick);
map.on('baselayerchange', onOverlayAdd);