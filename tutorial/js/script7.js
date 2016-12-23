var map = L.map('map');

var positron =
L.tileLayer('https://tile.mierune.co.jp/mierune_mono/{z}/{x}/{y}.png', {
    attribution: "Maptiles by <a href='http://mierune.co.jp/' target='_blank'>MIERUNE</a>, under CC BY. Data by <a href='http://osm.org/copyright' target='_blank'>OpenStreetMap</a> contributors, under ODbL."
}).addTo(map);

map.setView([35.671230, 139.754448], 13);

var marathonPoints = L.geoJson(marathonPoints,{
    onEachFeature:function(feature,layer){
        var field=feature.properties.name;
        layer.bindPopup(field);
    }
}).addTo(map);

var marathonLines = L.geoJson(marathonLines,{
     style:function(features) {
    switch (features.properties.id) {
            case 1: return{
                "color":"red",
                "weight":5,
                "opacity":0.7    
                };
            case 2: return{
                "color":"orange",
                "weight":5,
                "opacity":0.7    
                };
            case 3: return{
                "color":"pink",
                "weight":5,
                "opacity":0.7    
                };
            case 4: return{
                "color":"yellow",
                "weight":5,
                "opacity":0.7    
                };
            case 5: return{
                "color":"gold",
                "weight":5,
                "opacity":0.7    
                };
            case 6: return{
                "color":"green",
                "weight":5,
                "opacity":0.7    
                };
            case 7: return{
                "color":"blue",
                "weight":5,
                "opacity":0.7    
                };
            case 8: return{
                "color":"navy",
                "weight":5,
                "opacity":0.7    
                };
            case 9: return{
                "color":"black",
                "weight":5,
                "opacity":1.0    
                };
        }
     }
}).addTo(map);

function snake() {
			marathonLines.snakeIn();
		}

