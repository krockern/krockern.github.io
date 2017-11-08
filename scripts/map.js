/************************************
* This JS will create a map with markers
* It will also create and manage the info window for the markers
************************************/

//----------------------Content text for the info windows-------------------------
//----------------------------------Start-----------------------------------------

//----------------------
// Staty utanför NH i Linköping
//----------------------
var statue_001_contentString = '';
	
//----------------------
// Maj i Danderyd
//----------------------
var maj_danderyd_contentString = 
	'<div id="content">'+
		'<div id="siteNotice">'+
		'</div>'+
		'<h4 id="firstHeading" class="firstHeading">Maj</h4>'+
		'<div id="bodyContent">'+
			'<div style="float:left; width:160px;"><img src="pics/Maj.jpg" alt="Maj" style="width:150px; align:center;"></div>' +
			'<div style="paddingLeft:5px"><p>Statyn <b>Maj</b> i Danderyd är en bromsstaty, ca. två meter hög på en marmorsockel.</p>'+
			'<p>Maj finns även i Strykjärnsparken, Söderhamn och Skolparken, Vilhelmina</p>' + 
			'<p><a href="https://www.google.com/maps/search/?api=1&query=59.395572,18.037009">Hitta hit</a></p></div>'+
		'</div>'+
	'</div>';

//----------------------
// Härjedalens Fjällmuseum
//----------------------	
var harjedalens_fjallmuseum_contentString = 
	'<div id="content">'+
		'<div id="siteNotice"></div>'+
		'<h4 id="firstHeading" class="firstHeading">Härjedalens Fjällmuseum</h4>'+
		'<div id="bodyContent">'+
			'<p><b>Härjedalens Fjällmuseum</b> har en permanent utställning av ' +
			'en del av <b>Emil Näsvalls</b> verk.</p>'+
			'<p>Fjällmuseets hemsida är <a href="http://kommun.herjedalen.se/fjallmuseet.4.7a231afd12424b40e2880001097.html">' +
			'http://kommun.herjedalen.se/fjallmuseet.4.7a231afd12424b40e2880001097.html</a></p>'+
			'<p><a href="https://www.google.com/maps/search/?api=1&query=62.548326,12.537803">Hitta hit</a></p>'
		'</div>'+
	'</div>';

//----------------------Content text for the info windows-------------------------
//-----------------------------------End------------------------------------------

	
// Add new markers here:
// [marker title, latitude, longitude, content in infowindow]
var markers = [
	['Staty i Linköping', 58.412363, 15.616854, statue_001_contentString],
	['Maj i Danderyd', 59.395572, 18.037009, maj_danderyd_contentString],
	['Härjedalens Fjällmuseum', 62.548326, 12.537803, harjedalens_fjallmuseum_contentString]
];


//Global vars
var infowindow;

//Center the map at creation here
var centerStart = {lat: 62.415, lng: 15.143};



/******
* Create the map
******/
function initMap() {
	
	var options = {
		center: centerStart,
		zoom: 5,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	var map = new google.maps.Map(document.getElementById('map'), options);

	setMarkers(map,markers);	
}
	
/******
* Create and position the markers
* 
******/
function setMarkers(map,markers){

	var marker, i;

	for (i = 0; i < markers.length; i++){  

		//Setup marker info
		var markerTitle = markers[i][0]
		var markerLat = markers[i][1]
		var markerLong = markers[i][2]
		var markerContent =  markers[i][3]

		//Create coordinates in google map format
		latlngset = new google.maps.LatLng(markerLat, markerLong);

		//Create marker
		var marker = new google.maps.Marker({  
			map: map, title: markerTitle , position: latlngset  
		});
		map.setCenter(marker.getPosition());

		//If the marker is clicked - create a infowindow
		google.maps.event.addListener(marker,'click', (function(marker,markerContent,infowindow){
				
			return function() {
				
				openInfowindow(map, marker, markerContent); //Needed to lift out the closing and opening of infowindow to a seperate function so only one infowindow is open at a given time
				
			};
		})(marker,markerContent,infowindow));
	}
}
 
/******
* Close any open infowindow
* and open a new one at the marker
*******/ 
function openInfowindow(map, marker, markerContent) {
	if (infowindow) infowindow.close();
	infowindow = new google.maps.InfoWindow();
	infowindow.setContent(markerContent);
	infowindow.open(map,marker);
} 

 