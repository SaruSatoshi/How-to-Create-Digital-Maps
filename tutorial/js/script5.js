var map = L.map('map');

L.tileLayer('https://tile.mierune.co.jp/mierune_mono/{z}/{x}/{y}.png', {
    attribution: "Maptiles by <a href='http://mierune.co.jp/' target='_blank'>MIERUNE</a>, under CC BY. Data by <a href='http://osm.org/copyright' target='_blank'>OpenStreetMap</a> contributors, under ODbL."
}).addTo(map);

map.setView([36.073507, 139.983009], 12);

var mapstyle910 = {
    "color":"blue",
    "weight":0.5,
    "fill":true,
    "fillcolor":"blue",
    "fillOpacity":0.5};

var mapstyle911 = {
   "color":"red",
    "weight":0.5,
    "fill":true,
    "fillcolor":"red",
    "fillOpacity":0.5}; 

var ibarakiPolygon910 = L.geoJson(ibaraki910Polygon,{
    style:mapstyle910
}).addTo(map);

var ibarakiPolygon911 = L.geoJson(ibaraki911Polygon,{
    style:mapstyle911
}).addTo(map);

var Map_AddLayer = {
    "９月１０日": ibarakiPolygon910,
    "９月１１日": ibarakiPolygon911
};

L.control.layers(
    null,　
    Map_AddLayer,
    {collapsed:false}
).addTo(map);

