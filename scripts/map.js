/************************************
* This JS will create a map with markers
* It will also create and manage the info window for the markers
************************************/

//----------------------Content text for the info windows-------------------------
//----------------------------------Start-----------------------------------------

//----------------------
// Staty utanför NH i Linköping
//----------------------
var statue_001_contentString = null;
	
//----------------------
// Maj i Danderyd
//----------------------
var maj_danderyd_contentString = 
	'<div id="content">'+
		'<div id="siteNotice">'+
		'</div>'+
		'<h4 id="firstHeading" class="firstHeading">Maj</h4>'+
		'<div id="bodyContent">'+
			'<div style="float:left; width:160px;"><a href="pages/maj.html"><img src="pics/Maj.jpg" alt="Maj" style="width:150px; align:center;"></a></div>' +
			'<div style="paddingLeft:5px"><p>Statyn <b>Maj</b> i Danderyd är en bromsstaty, ca. två meter hög på en marmorsockel.</p>'+
			'<p>Maj finns även i Strykjärnsparken, Söderhamn och Skolparken, Vilhelmina</p>' +
			'<p>Klicka på bilden för mer information</p>' +
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

	
// Add new locations here:
// {lat: <latitude>, lng: <longitude>, title: <title of the marker>, info: <contentString>}

var locations = [
	{lat: 58.412363, lng: 15.616854, title: "Staty i Linköping", info: statue_001_contentString},
	{lat: 59.395572, lng: 18.037009, title: "Maj i Danderyd", info: maj_danderyd_contentString},
	{lat: 62.548326, lng: 12.537803, title: "Härjedalens Fjällmuseum", info: harjedalens_fjallmuseum_contentString},
	{lat: 59.594572, lng: 18.137009, title: "1", info: null},
	{lat: 59.494572, lng: 18.237009, title: "2", info: null},
	{lat: 59.294572, lng: 18.337009, title: "3", info: null},
	{lat: 59.694572, lng: 18.437009, title: "4", info: null}
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

	setMarkers(map,locations);	
}
	
/******
* Create and position the markers
* 
******/
function setMarkers(map,locations){


	var infoWin = new google.maps.InfoWindow();
	// Note: The code uses the JavaScript Array.prototype.map() method to
	// create an array of markers based on a given "locations" array.
	// The map() method here has nothing to do with the Google Maps API.
	var markers = locations.map(function(location, i) {
		var marker = new google.maps.Marker({
			position: location,
			title: location.title
		});
    
		if (location.info!=null) {
			google.maps.event.addListener(marker, 'click', function(evt) {
				infoWin.setContent(location.info);
				infoWin.open(map, marker);
			})
		}
		return marker;
	});

	// Add a marker clusterer to manage the markers.
	var markerCluster = new MarkerClusterer(map, markers, {
		maxZoom: 6,
		gridSize: 30,
		imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
	});
	
} 