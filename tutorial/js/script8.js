// 背景地図を表示
var map = L.map('map');

var positron =
L.tileLayer('https://tile.mierune.co.jp/mierune_mono/{z}/{x}/{y}.png', {
    attribution: "Maptiles by <a href='http://mierune.co.jp/' target='_blank'>MIERUNE</a>, under CC BY. Data by <a href='http://osm.org/copyright' target='_blank'>OpenStreetMap</a> contributors, under ODbL."
}).addTo(map);

map.setView([35.671230, 139.754448], 13);

// ポイントを表示
var marathonPoints = L.geoJson(marathonPoints,{
    onEachFeature:function(feature,layer){
        var field=feature.properties.name;
        layer.bindPopup(field);
    }
}).addTo(map);

// コース全体と前半と後半のobjectを変数でつかむ
var marathonLines = L.geoJson( marathonLines,{
    	style: function (feature) {
        	return {color: "#360",
                    weight:5,
                    opacity:1.0
                   };
    	}
	})

var marathonLines_zenhan = L.geoJson( marathonLines_zenhan,{
    	style: function (feature) {
        	return {color: "#009",
                    weight:5,
                    opacity:1.0
                   };
    	}
	})

var marathonLines_kouhan = L.geoJson( marathonLines_kouhan,{
    	style: function (feature) {
        	return {color: "#c00",
                    weight:5,
                    opacity:1.0
                   };
    	}
	})

// 最初は全コースが表示される
marathonLines.addTo(map);


// コースが表示されているかどうかを記憶しておく変数を用意
var state_zentai = "表示中";
var state_zenhan = "非表示";
var state_kouhan = "非表示";

// ボタンをプログラムでつかむ
var button_zentai = document.getElementById("zentai");
var button_zenhan = document.getElementById("zenhan");
var button_kouhan = document.getElementById("kouhan");

// 全体表示ボタン
button_zentai.addEventListener("click",function(){
    if( state_zentai == "表示中" ){
    // 全体を表示
      marathonLines.addTo(map);
    // 前半をremove（削除）
       marathonLines_zenhan.remove();
    // 後半をremove（削除）
       marathonLines_kouhan.remove();
    // 全体ボタンは非表示を促し、前半後半ボタンは表示を促す
    button_zentai.innerText = "全体非表示";
    button_zenhan.innerText = "前半を表示";
    button_kouhan.innerText = "後半を表示";
    // 変数も非表示にする
    state_zentai = "非表示";
    }else{
    // 全体を非表示
      marathonLines.addTo(map).remove();
    // 全体ボタンの表示を促す
    button_zentai.innerText = "全体を表示";
    // 変数を表示中にする
    state_zentai = "表示中";	
    }
});


// 前半表示ボタン
button_zenhan.addEventListener("click",function(){
    if( state_zenhan == "非表示" ){
    // 前半をsnake
      marathonLines_zenhan.addTo(map).snakeIn();
    // 後半をremove（削除）
       marathonLines_kouhan.remove();
    // 全体をremove（削除）
       marathonLines.remove();
    // 前半ボタンは非表示を促し全体後半ボタンは表示を促す
    button_zenhan.innerText = "前半非表示";
    button_kouhan.innerText = "後半を表示";
    button_zentai.innerText = "全体を表示";
    // 変数も表示にします
    state_zenhan = "表示中";
    }else{
    // 前半をremove（削除）
       marathonLines_zenhan.remove();
    // 前半ボタンを表示を促す
    button_zenhan.innerText = "前半を表示";
    // 変数を非表示にする
    state_zenhan = "非表示";	
    }
});

// 後半表示ボタン
button_kouhan.addEventListener("click",function(){
    if( state_kouhan == "非表示" ){
    // 後半をsnake
      marathonLines_kouhan.addTo(map).snakeIn();
    // 前半をremove（削除）
      marathonLines_zenhan.remove();
    // 全体をremove（削除）
       marathonLines.remove();
    // 後半ボタンは非表示を促し全体前半ボタンは表示を促す
    button_kouhan.innerText = "後半非表示";
    button_zentai.innerText = "全体非表示";
    button_zenhan.innerText = "前半を表示";
    // 変数も表示にする
    state_kouhan = "表示中";
    }else{
    // 後半をremove（削除）
       marathonLines_kouhan.remove();
    // 後半ボタンを表示を促す
    button_kouhan.innerText = "後半を表示";
    // 変数を非表示にする
    state_kouhan = "非表示";	
    }
});

