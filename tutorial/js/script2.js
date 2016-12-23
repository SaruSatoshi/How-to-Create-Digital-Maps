var map = L.map('map');

L.tileLayer('https://tile.mierune.co.jp/mierune_mono/{z}/{x}/{y}.png', {
    attribution: "Maptiles by <a href='http://mierune.co.jp/' target='_blank'>MIERUNE</a>, under CC BY. Data by <a href='http://osm.org/copyright' target='_blank'>OpenStreetMap</a> contributors, under ODbL."
}).addTo(map);

map.setView([36.073507, 139.983009], 12);

var ibarakiPolygon = L.geoJson(ibarakiPolygon,{
    style:{
    "color":"red",
    "weight":0.5,
    "fill":true,
    "fillcolor":"blue",
    "fillOpacity":0.4    
}
}).addTo(map);
