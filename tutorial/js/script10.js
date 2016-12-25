window.onload = function(){
//①背景地図を表示する準備
var map = L.map('map');

//②背景地図にMIERUNE地図を選択
var haikeimap =
L.tileLayer('https://tile.mierune.co.jp/mierune_mono/{z}/{x}/{y}.png', {
    attribution: "Maptiles by <a href='http://mierune.co.jp/' target='_blank'>MIERUNE</a>, under CC BY. Data by <a href='http://osm.org/copyright' target='_blank'>OpenStreetMap</a> contributors, under ODbL."
});

//③背景地図を表示
haikeimap.addTo(map);

//④背景地図の中央位置情報を設定
map.setView([35.671230, 139.754448], 13);

//⑤マラソンコースを区間ごとに色分け
var line_data = L.geoJson(marathonLines,{
     style:function(features) {
     switch (features.properties.id) {
            case 1: return{
                "color":"#E60012",
                "weight":7,
                "opacity":1.0    
                };
            case 2: return{
                "color":"#F39800",
                "weight":7,
                "opacity":1.0     
                };
            case 3: return{
                "color":"#FFF100",
                "weight":7,
                "opacity":1.0     
                };
            case 4: return{
                "color":"#FFF100",
                "weight":7,
                "opacity":1.0     
                };
            case 5: return{
                "color":"#009944",
                "weight":7,
                "opacity":1.0     
                };
            case 6: return{
                "color":"#009E96",
                "weight":7,
                "opacity":1.0    
                };
            case 7: return{
                "color":"#00A0E9",
                "weight":7,
                "opacity":1.0     
                };
            case 8: return{
                "color":"#0068B7",
                "weight":7,
                "opacity":1.0     
                };
            case 9: return{
                "color":"#1D2088",
                "weight":7,
                "opacity":1.0    
                };
        }
     }
});

//⑥色分けしたマラソンコースを表示
line_data.addTo(map);

//⑦ポップアップに☆キロ地点と世界記録のデータを追加
var pointMarkers = [];
function eachFeature (feature, layer) {
    var popupHTML = '<div class="record"><h4>' +               feature.properties.name + "</h4>";       
    if(feature.properties.WR_man != ""){
        popupHTML += '<div class="wr">世界最高</div><div class="split">' + feature.properties.WR_man + "</div>";
		}
    popupHTML += "</div>";
    layer.bindPopup(popupHTML);
//⑧ポップアップデータを各地点に追加
    pointMarkers.push(layer);
	};
//console.log(pointMarkers);
//⑨ポップアップデータの入った地点を地図の表示
var points_data = L.geoJson( marathonPoints, {
    	onEachFeature: eachFeature
	});

points_data.addTo(map);

//⑫地点ごとにボタンを作成
marathonPoints.features.forEach(function(p){
    var node = document.createElement("button");
//⑫地点ごとのボタンに名前を追加（地点名）
    var textnode = document.createTextNode(p.properties.name);
    node.appendChild(textnode);
//⑬"data-id"という属性に地点ごとのidを値として付ける
    node.setAttribute("data-id", p.properties.id);
//⑭id"buttons"を取得しボタンを追加
    document.getElementById("buttons").appendChild(node);
//⑮クリックすると記述したイベントが挙動するよう指示
    node.addEventListener("click", onClick);
	});

//⑩クリック時のイベントを作成
function onClick(evt){
//console.log(evt);
//⑪属性値"data-id"を取得
    var index = parseInt(this.getAttribute("data-id"));
//⑫クリック時のイベントを記述（パン先＆ズーム先＆ポップアップ）
    var point = marathonPoints.features[index].geometry.coordinates;
    //map.panTo([ point[1], point[0] ]);
    //map.setZoom(16);
    map.setView([ point[1], point[0] ], 16);
    pointMarkers[index].openPopup();
	};
};
