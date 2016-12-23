var map = L.map('map');

L.tileLayer('https://tile.mierune.co.jp/mierune_mono/{z}/{x}/{y}.png', {
    attribution: "Maptiles by <a href='http://mierune.co.jp/' target='_blank'>MIERUNE</a>, under CC BY. Data by <a href='http://osm.org/copyright' target='_blank'>OpenStreetMap</a> contributors, under ODbL."
}).addTo(map);

map.setView([35.671230, 139.754448], 13);

var Map_Point = L.marker(
    [35.671230, 139.754448]
    ).addTo(map);

var comment = "記者ゼミ第１１回開催中！！";
Map_Point.bindPopup(comment);

var marathonLines = L.geoJson(marathonLines,{
    style:{
    "color":"red",
    "weight":5,
    "opacity":0.7    
}
}).addTo(map);

var marathonPoints = L.geoJson(marathonPoints,{
    onEachFeature:function(feature,layer){
        var field=feature.properties.name;
        layer.bindPopup(field);
    }
}).addTo(map);





