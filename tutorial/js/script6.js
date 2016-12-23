var map = L.map('map');

var positron =
L.tileLayer('https://tile.mierune.co.jp/mierune_mono/{z}/{x}/{y}.png', {
    attribution: "Maptiles by <a href='http://mierune.co.jp/' target='_blank'>MIERUNE</a>, under CC BY. Data by <a href='http://osm.org/copyright' target='_blank'>OpenStreetMap</a> contributors, under ODbL."
}).addTo(map);

map.setView([35.671230, 139.754448], 13);

var marathonLines = L.geoJson(marathonLines,{
        style:{
        "color":"#248",
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

function snake() {
			marathonLines.snakeIn();
		}



