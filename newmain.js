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

//credit at bottom right for leaflet, In Stars and Time, and Adrienne
map.attributionControl.addAttribution(
    '<a href="https://store.steampowered.com/app/1677310/In_Stars_And_Time/">In Stars and Time</a> &copy; <a href="https://www.insertdisc5.com/">insertdisc5</a>')
    .setPrefix('Powered by <a href="https://leafletjs.com/">Leaflet</a>')
 
/*
Other
*/

const mapBoxes = {"type":"FeatureCollection","features":[
    {"type":"Feature","id":"01","properties":{"name":"MEADOW"},"geometry":{"type":"Polygon","coordinates":[[[72.054688, -111.390625], [84.8125, -111.390625], [84.8125, -124.921875], [72.054688, -124.921875], [72.054688, -111.390625]]]}},
    {"type":"Feature","id":"02","properties":{"name":"DORMONT"},"geometry":{"type":"Polygon","coordinates":[[[63.75, -75.367187],[63.75, -111.390625],[96.054688, -111.390625],[96.054688, -75.367187],[63.75, -75.367187]]]}},
    {"type":"Feature","id":"03","properties":{"name":"Village E"},"geometry":{"type":"Polygon","coordinates":[[[96.054688, -73.421875],[96.054688, -105.398437],[128.976563, -105.398437],[128.976563, -73.421875],[96.054688, -73.421875]]]}},
    {"type":"Feature","id":"04","properties":{"name":"Village N"},"geometry":{"type":"Polygon","coordinates":[[[72.015625, -56.625],[72.015625, -75.367187],[84.773438, -75.367187],[84.773438, -56.625],[72.015625, -56.625]]]}},
    {"type":"Feature","id":"05","properties":{"name":"Village Tree (LOOP)"},"geometry":{"type":"Polygon","coordinates":[[[51, -67.882812],[51, -92.640625],[63.75, -92.640625],[63.75, -67.882812],[51, -67.882812]]]}}
    //template, change with relevant latlngs: {"type":"Feature","id":"06","properties":{"name":"NameHere"},"geometry":{"type":"Polygon","coordinates":[[[1, 2],[1, 3],[4, 3],[4, 2],[1, 2]]]}},-83.460937, 113.09375
]};

const mapBoxes2 = {"type":"FeatureCollection","features":[
    {"type":"Feature","id":"06","properties":{"name":"Shop"},"geometry":{"type":"Polygon","coordinates":[[[75.398438, -71.296875], [85.484375, -71.296875], [85.484375, -79.0625], [75.398438, -79.0625], [75.398438, -71.296875]]]}},
    {"type":"Feature","id":"07","properties":{"name":"Library"},"geometry":{"type":"Polygon","coordinates":[[[86.15625, -76.539062], [94.742188, -76.539062], [94.742188, -83.625], [86.15625, -83.625], [86.15625, -76.539062]]]}},
    {"type":"Feature","id":"08","properties":{"name":"House_FrozenWife"},"geometry":{"type":"Polygon","coordinates":[[[85.078125, -93.578125], [92.03125, -93.578125], [92.03125, -101.3125], [85.078125, -101.3125], [85.078125, -93.578125]]]}},
    {"type":"Feature","id":"09","properties":{"name":"House_Novels"},"geometry":{"type":"Polygon","coordinates":[[[71.8125, -94.429687], [78.898438, -94.429687], [78.898438, -101.5625], [71.8125, -101.5625], [71.8125, -94.429687]]]}},
    {"type":"Feature","id":"10","properties":{"name":"House_Change"},"geometry":{"type":"Polygon","coordinates":[[[64.023438, -89.375], [71.125, -89.375], [71.125, -96.492187], [64.023438, -96.492187], [64.023438, -89.375]]]}},
    {"type":"Feature","id":"11","properties":{"name":"House_Boulangerie"},"geometry":{"type":"Polygon","coordinates":[[[66.390625, -76.34375], [73.445313, -76.34375], [73.445313, -84.164062], [66.390625, -84.164062], [66.390625, -76.34375]]]}},
    {"type":"Feature","id":"12","properties":{"name":"House_Flowers"},"geometry":{"type":"Polygon","coordinates":[[[96.828125, -70.289062], [103.914063, -70.289062], [103.914063, -77.390625], [96.828125, -77.390625], [96.828125, -70.289062]]]}},
    {"type":"Feature","id":"13","properties":{"name":"House_Cook"},"geometry":{"type":"Polygon","coordinates":[[[104.59375, -76.4375], [113.09375, -76.4375], [113.09375, -83.460937], [104.59375, -83.460937], [104.59375, -76.4375]]]}}
    //{"type":"Feature","id":"14","properties":{"name":"House_Storage"},"geometry":{"type":"Polygon","coordinates": }},
]};

const mapBoxes3 = {"type":"FeatureCollection","features":[
    {"type":"Feature","id":"15","properties":{"name":"Castle Entrance"},"geometry":{"type":"Polygon","coordinates":[[[94.265625, -153.476562], [94.265625, -179.726562], [81.5, -179.726562], [81.5, -153.476562], [94.265625, -153.476562]]]}},
    {"type":"Feature","id":"16","properties":{"name":"Entrance"},"geometry":{"type":"Polygon","coordinates":[[[93.5625, -132.398437], [93.5625, -153.429687], [82.289063, -153.429687], [82.289063, -132.398437], [93.5625, -132.398437]]]}},
    {"type":"Feature","id":"17","properties":{"name":"TutoMonsterHallway"},"geometry":{"type":"Polygon","coordinates":[[[91.289063, -103.929687], [91.289063, -132.445312], [84.539063, -132.445312], [84.539063, -103.929687], [91.289063, -103.929687]]]}},
    {"type":"Feature","id":"18","properties":{"name":"MonsterHallway"},"geometry":{"type":"Polygon","coordinates":[[[91.28125, -87.453125], [91.28125, -103.929687], [84.546875, -103.929687], [84.546875, -87.453125], [91.28125, -87.453125]]]}},
    {"type":"Feature","id":"19","properties":{"name":"FLOOR 1, START"},"geometry":{"type":"Polygon","coordinates":[[[93.550658, -79.195492], [93.550658, -87.460937], [82.289063, -87.460937], [82.289063, -79.195492], [93.550658, -79.195492]]]}},
    {"type":"Feature","id":"20","properties":{"name":"StorageRoom"},"geometry":{"type":"Polygon","coordinates":[[[82.265625, -77.703125], [82.265625, -85.929687], [72.578125, -85.929687], [72.578125, -77.703125], [82.265625, -77.703125]]]}},
    {"type":"Feature","id":"21","properties":{"name":"KeyRoom (Key 0-0)"},"geometry":{"type":"Polygon","coordinates":[[[101.789063, -79.195312], [101.789063, -85.929687], [93.523438, -85.929687], [93.523438, -79.195312], [101.789063, -79.195312]]]}},
    {"type":"Feature","id":"22","properties":{"name":"DeathCorridor"},"geometry":{"type":"Polygon","coordinates":[[[91.289063, -62.859375], [91.289063, -79.210937], [84.53125, -79.210937], [84.53125, -62.859375], [91.289063, -62.859375]]]}}
    //{"type":"Feature","id":"14","properties":{"name":"House_Storage"},"geometry":{"type":"Polygon","coordinates": }},[[[95.015625, -47.859375], [95.015625, -62.859375], [80.773438, -62.859375], [80.773438, -47.859375], [95.015625, -47.859375]]]
]};

const mapBoxes4 = {"type":"FeatureCollection","features":[
    {"type":"Feature","id":"15","properties":{"name":"Castle Entrance"},"geometry":{"type":"Polygon","coordinates":[[[94.265625, -153.476562], [94.265625, -179.726562], [81.5, -179.726562], [81.5, -153.476562], [94.265625, -153.476562]]]}},
    {"type":"Feature","id":"16","properties":{"name":"Entrance"},"geometry":{"type":"Polygon","coordinates":[[[93.5625, -132.398437], [93.5625, -153.429687], [82.289063, -153.429687], [82.289063, -132.398437], [93.5625, -132.398437]]]}},
    {"type":"Feature","id":"17","properties":{"name":"TutoMonsterHallway"},"geometry":{"type":"Polygon","coordinates":[[[91.289063, -103.929687], [91.289063, -132.445312], [84.539063, -132.445312], [84.539063, -103.929687], [91.289063, -103.929687]]]}},
    {"type":"Feature","id":"18","properties":{"name":"MonsterHallway"},"geometry":{"type":"Polygon","coordinates":[[[91.28125, -87.453125], [91.28125, -103.929687], [84.546875, -103.929687], [84.546875, -87.453125], [91.28125, -87.453125]]]}},
    {"type":"Feature","id":"19","properties":{"name":"FLOOR 1, START"},"geometry":{"type":"Polygon","coordinates":[[[93.550658, -79.195492], [93.550658, -87.460937], [82.289063, -87.460937], [82.289063, -79.195492], [93.550658, -79.195492]]]}},
    {"type":"Feature","id":"20","properties":{"name":"StorageRoom"},"geometry":{"type":"Polygon","coordinates":[[[82.265625, -77.703125], [82.265625, -85.929687], [72.578125, -85.929687], [72.578125, -77.703125], [82.265625, -77.703125]]]}},
    {"type":"Feature","id":"21","properties":{"name":"KeyRoom (Key 0-0)"},"geometry":{"type":"Polygon","coordinates":[[[101.789063, -79.195312], [101.789063, -85.929687], [93.523438, -85.929687], [93.523438, -79.195312], [101.789063, -79.195312]]]}},
    {"type":"Feature","id":"22","properties":{"name":"DeathCorridor"},"geometry":{"type":"Polygon","coordinates":[[[91.289063, -62.859375], [91.289063, -79.210937], [84.53125, -79.210937], [84.53125, -62.859375], [91.289063, -62.859375]]]}},
    {"type":"Feature","id":"23","properties":{"name":"FLOOR 1, END"},"geometry":{"type":"Polygon","coordinates":[[[95.015625, -47.859375], [95.015625, -62.859375], [80.773438, -62.859375], [80.773438, -47.859375], [95.015625, -47.859375]]]}},
    {"type":"Feature","id":"24","properties":{"name":"Hallway (LVL difference)"},"geometry":{"type":"Polygon","coordinates":[[[105.507813, -38.132812], [105.507813, -61.359375], [95.023438, -61.359375], [95.023438, -38.132812], [105.507813, -38.132812]]]}},
    {"type":"Feature","id":"25","properties":{"name":"Hallway (Tear)"},"geometry":{"type":"Polygon","coordinates":[[[137.023438, -38.125], [137.023438, -44.125], [105.53125, -44.125], [105.53125, -38.125], [137.023438, -38.125]]]}},
    {"type":"Feature","id":"26","properties":{"name":"BreakRoom"},"geometry":{"type":"Polygon","coordinates":[[[113.773438, -30.609375], [113.773438, -38.101562], [105.53125, -38.101562], [105.53125, -30.609375], [113.773438, -30.609375]]]}},
    {"type":"Feature","id":"27","properties":{"name":"Storage Room (Locked)"},"geometry":{"type":"Polygon","coordinates":[[[137.773438, -30.617187], [137.773438, -38.109375], [129.546875, -38.109375], [129.546875, -30.617187], [137.773438, -30.617187]]]}},
    {"type":"Feature","id":"28","properties":{"name":"Hallway (RowTears)"},"geometry":{"type":"Polygon","coordinates":[[[162.539063, -38.125], [162.539063, -56.875992], [137.039063, -56.875992], [137.039063, -38.125], [162.539063, -38.125]]]}},
    {"type":"Feature","id":"29","properties":{"name":"Room (Crest)"},"geometry":{"type":"Polygon","coordinates":[[[169.273438, -37.34375], [169.273438, -44.882812], [162.515625, -44.882812], [162.515625, -37.34375], [169.273438, -37.34375]]]}},
    {"type":"Feature","id":"30","properties":{"name":"Kitchen (Key 1-1)"},"geometry":{"type":"Polygon","coordinates":[[[155.023438, -56.851562], [155.023438, -63.617187], [146.765625, -63.617187], [146.765625, -56.851562], [155.023438, -56.851562]]]}},
    {"type":"Feature","id":"31","properties":{"name":"Hallway (Locked 1-1)"},"geometry":{"type":"Polygon","coordinates":[[[80.773438, -54.617187], [80.773438, -60.609375], [56.78125, -60.609375], [56.78125, -54.617187], [80.773438, -54.617187]]]}},
    {"type":"Feature","id":"32","properties":{"name":"Armory"},"geometry":{"type":"Polygon","coordinates":[[[74.007813, -47.125], [74.007813, -54.632812], [65.78125, -54.632812], [65.78125, -47.125], [74.007813, -47.125]]]}},
    {"type":"Feature","id":"33","properties":{"name":"Hallway (Ghost1)"},"geometry":{"type":"Polygon","coordinates":[[[56.751518, -35.143829], [56.751518, -61.359375], [46.28125, -61.359375], [46.28125, -35.143829], [56.751518, -35.143829]]]}},
    {"type":"Feature","id":"34","properties":{"name":"Hallway"},"geometry":{"type":"Polygon","coordinates":[[[41.056759, -21.644773], [41.056759, -35.132812], [46.257813, -35.132812], [46.257813, -41.109375], [32.870108, -41.109375], [32.870108, -21.644773], [41.056759, -21.644773]]]}},
    {"type":"Feature","id":"35","properties":{"name":"CandleDorm (Timecraft)"},"geometry":{"type":"Polygon","coordinates":[[[32.788313, -20.115467], [32.788313, -27.625], [24.5625, -27.625], [24.5625, -20.115467], [32.788313, -20.115467]]]}},
    {"type":"Feature","id":"36","properties":{"name":"WritingDorm (Key 1-2F)"},"geometry":{"type":"Polygon","coordinates":[[[50.804688, -21.617187], [50.804688, -28.367187], [41.0625, -28.367187], [41.0625, -21.617187], [50.804688, -21.617187]]]}},
    {"type":"Feature","id":"37","properties":{"name":"BossHallway_1"},"geometry":{"type":"Polygon","coordinates":[[[91.265625, -24.617187], [91.265625, -47.867187], [84.53125, -47.867187], [84.53125, -24.617187], [91.265625, -24.617187]]]}},
    {"type":"Feature","id":"38","properties":{"name":"Hallway"},"geometry":{"type":"Polygon","coordinates":[[[90.492188, -1.367187], [90.492188, -24.640625], [80.023438, -24.640625], [80.023438, -1.367187], [90.492188, -1.367187]]]}}
    //{"type":"Feature","id":"38","properties":{"name":"Test24"},"geometry":{"type":"Polygon","coordinates":[[[90.492188, -1.367187], [90.492188, -24.640625], [80.023438, -24.640625], [80.023438, -1.367187], [90.492188, -1.367187]]]}},
]};

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
    "House of Change (Floor 1 ACT2+)": house_one_act2
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