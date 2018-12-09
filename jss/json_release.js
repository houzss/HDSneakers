var txt ={ 
	"sneakers":[
		{"img":"release1.jpg\">","ID":"Carhartt WIP x Nike Air Force 1 Low","date":"2018-12-06","price":"$130 美元"},
		{"img":"release2.jpg\">","ID":"CLOT x Air Jordan 13 Low","date":"2018-12-08","price":"$200 美元"},
		{"img":"release3.jpg\">","ID":"Air Jordan 11 “Concord”","date":"2018-12-08","price":"$220 美元"},
		{"img":"release4.jpg\">","ID":"Air Jordan 1 “Chicago Crystal”","date":"2018-12-14","price":"$160 美元"},
		{"img":"release5.jpg\">","ID":"Air Jordan 15 Doernbecher","date":"2018-12-14","price":"$190 美元"},
		{"img":"release6.jpg\">","ID":"Nike Zoom Fly SP Doernbecher","date":"2018-12-14","price":"$170 美元"},
		{"img":"release7.jpg\">","ID":"Nike WMNS Air Force 1 Low Doernbecher","date":"2018-12-14","price":"$90 美元"},
		{"img":"release8.jpg\">","ID":"adidas Yeezy 350 V2 “Semi Frozen Yellow”","date":"2018-12-14","price":"$220 美元"},
		{"img":"release9.jpg\">","ID":"Nike Air Fear of God 1","date":"2018-12-14","price":"￥2599 RMB"},
		{"img":"release10.jpg\">","ID":"Air Jordan 3 Retro “Mocha”","date":"2018-12-15","price":"$190 美元"},
		{"img":"release11.jpg\">","ID":"Nike Zoom LeBron 3 “Navy”","date":"2018-12-15","price":"$130 美元"},
		{"img":"release12.jpg\">","ID":"A-Cold-Wall* x Nike Air Force 1 Low","date":"2018-12-21","price":"$190 美元"},
		{"img":"release13.jpg\">","ID":"Air Jordan 8 “Tinker”","date":"2018-12-22","price":"$190 美元"},
		{"img":"release14.jpg\">","ID":"Air Jordan 1 Retro High OG “A Star Is Born”","date":"2018-12-27","price":"$160 美元"},
		{"img":"release15.jpg\">","ID":	"Fear of God x Nike Air Skylon 2","date":"2018-12-27","price":"$140 美元"},
		{"img":"release16.jpg\">","ID":	"adidas Yeezy Boost 350 V2 “Static”待定","date":"2018-12-27","price":"$220 美元"},
		{"img":"release17.jpg\">","ID":	"adidas Yeezy 700 V2 “Static”","date":"2018-12-29","price":"￥2599 RMB"},
		{"img":"release18.jpg\">","ID":"Nike Kobe 1 Protro “USA”","date":"2018-12-30","price":"$175 美元"},
		{"img":"release19.jpg\">","ID":"Nike Air Foamposite One “Floral”","date":"2019-01-01","price":"$230 美元"}
	]
}	
	var i;
	var x="";
	for(i in txt.sneakers){
	x+="<li><div class=\"img_box\"><img src=\"img_release/"+txt.sneakers[i].img+"</div>";
	x+="<div class=\"item_box\"><a target=\"_blank\" href=\"#\"><B>"+txt.sneakers[i].ID+"</B></a>";
	x+="<div class=\"date\"><b>发售日期:</b><h4>"+txt.sneakers[i].date+"</h4></div>";
	x+="<div class=\"price\"><b>发售价:</b><h4>"+txt.sneakers[i].price+"</h4></div></div></li><BR>";
}
	document.getElementById("release").innerHTML = x;


