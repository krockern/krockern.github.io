/************************************
* This JS will create a map with markers
* It will also create and manage the info window for the markers
************************************/
/*
//----------------------Content text for the info windows-------------------------
//----------------------------------Start-----------------------------------------

//----------------------
// Staty utanför NH i Linköping
//----------------------
var statue_001_contentString = null;

//----------------------
// Per Albin Hansson, Parken Zoo, Eskilstuna
//----------------------
var per_albin_hansson_contentString =
	'<div id="content">'+
		'<div id="siteNotice">'+
		'</div>'+
		'<h4 id="firstHeading" class="firstHeading">Per Albin Hansson</h4>'+
		'<div id="bodyContent">'+
			'<div class="infoviewImage" style="float:left; width:160px;"><a href="pages/per_albin_hansson.html"><img src="pics/per_albin_hansson/256px-Byst_av_nämndeman_Per_Albin_Hansson,_av_Emil_Näsvall.JPG" alt="Per Albin Hansson" style="width:150px; align:center;"></a></div>' +
			'<div style="paddingLeft:5px"><p>Byst av <b>Per Albin Hansson</b> i Parken Zoo i Eskilstuna</p>'+
			'<p>Klicka <a href="pages/per_albin_hansson.html">här</a> för mer information</p>' +
			'<p><a href="https://www.google.com/maps/search/?api=1&query=59.372830,16.482146">Hitta hit</a></p></div>'+
		'</div>'+
	'</div>';

//----------------------
// Maj, Danderyd
//----------------------
var maj_danderyd_contentString =
	'<div id="content">'+
		'<div id="siteNotice">'+
		'</div>'+
		'<h4 id="firstHeading" class="firstHeading">Maj</h4>'+
		'<div id="bodyContent">'+
			'<div class="infoviewImage" style="float:left; width:160px;"><a href="pages/maj.html"><img src="pics/maj-danderyd/256px-Emil_Näsvall_Maj.JPG" alt="Maj" style="width:150px; align:center;"></a></div>' +
			'<div style="paddingLeft:5px"><p>Statyn <b>Maj</b> i Danderyd är en bronsstaty, ca. två meter hög på en marmorsockel.</p>'+
			'<p>Maj finns även i Strykjärnsparken, Söderhamn och Skolparken, Vilhelmina</p>' +
			'<p>Klicka <a href="pages/maj.html">här</a> för mer information</p>' +
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
			'<p>Fjällmuseets hemsida hittar du <a href="http://kommun.herjedalen.se/fjallmuseet.4.7a231afd12424b40e2880001097.html">här</a></p>'+
			'<p><a href="https://www.google.com/maps/search/?api=1&query=62.548326,12.537803">Hitta hit</a></p>'
		'</div>'+
	'</div>';

	//----------------------
	// I somamrhagen, Varberg
	//----------------------
	var i_sommarhagen_contentString =
		'<div id="content">'+
			'<div id="siteNotice">'+
			'</div>'+
			'<h4 id="firstHeading" class="firstHeading">I sommarhagen</h4>'+
			'<div id="bodyContent">'+
				'<div class="infoviewImage" style="float:left; width:160px;"><a href="pages/i_sommarhagen.html"><img src="pics/i_sommarhagen/256px-I_sommarhagen.jpg" alt="Maj" style="width:150px; align:center;"></a></div>' +
				'<div style="paddingLeft:5px"><p>Statyn <b>I sommarhagen</b> står mellan två hus i Varberg</p>'+
				'<p>Klicka <a href="pages/i_sommarhagen.html">här</a> för mer information</p>' +
				'<p><a href="https://www.google.com/maps/search/?api=1&query=57.099466,12.248345">Hitta hit</a></p></div>'+
			'</div>'+
		'</div>';
*/
//----------------------Content text for the info windows-------------------------
//-----------------------------------End------------------------------------------


// Add new locations here:
// {lat: <latitude>, lng: <longitude>, title: <title of the marker>, info: <contentString>, pinColor: color of the pin}

/*var locations = [
	{lat: 58.412363, lng: 15.616854, title: "Staty i Linköping", info: statue_001_contentString, pinColor: null},
	{lat: 59.395572, lng: 18.037009, title: "Maj i Danderyd", info: maj_danderyd_contentString, pinColor: null},
	{lat: 62.548326, lng: 12.537803, title: "Härjedalens Fjällmuseum", info: harjedalens_fjallmuseum_contentString,  pinColor: "007569"},
	{lat: 59.372830, lng: 16.482146, title: "Per Albin Hansson", info: per_albin_hansson_contentString, pinColor: null},
	{lat: 57.099466, lng: 12.248345, title: "I sommarhagen", info: i_sommarhagen_contentString, pinColor: null}//,
	//{lat: 59.594572, lng: 18.137009, title: "1", info: null, pinColor: null},
	//{lat: 59.494572, lng: 18.237009, title: "2", info: null, pinColor: null},
	//{lat: 59.294572, lng: 18.337009, title: "3", info: null, pinColor: null},
	//{lat: 59.694572, lng: 18.437009, title: "4", info: null, pinColor: null}
];*/

//var locations = picsList;
var locations = [];
for (var key in picsList) {
	if (picsList[key].lat != null) {
		locations.push(picsList[key]);
	}
}

/*for (let index = 0; index < picsList.length; ++index) {
	locations.push(picsList[index][7]);
}
console.log(locations);
*/

//Global vars
var infowindow;

//Center the map at creation here
//var centerStart = {lat: 62.415, lng: 15.143};
var centerStart = {lat: 59.858413, lng: 14.772211};



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

	var oms = new OverlappingMarkerSpiderfier(map, {
	  markersWontMove: true,
	  markersWontHide: true,
	  basicFormatEvents: true
	});

	// Note: The code uses the JavaScript Array.prototype.map() method to
	// create an array of markers based on a given "locations" array.
	// The map() method here has nothing to do with the Google Maps API.
	var markers = locations.map(function(location, i) {
		if (location.pinColor!=null) {
			var marker = new google.maps.Marker({
				position: location,
				title: location.title,
				icon: "https://mts.googleapis.com/vt/icon/name=icons/spotlight/spotlight-waypoint-a.png&text=A&psize=16&font=fonts/Roboto-Regular.ttf&color=" + location.pinColor + "&ax=44&ay=48&scale=1"
			});
		}
		else {
			var marker = new google.maps.Marker({
				position: location,
				title: location.title
			});
		}
/*		if (location.info!=null) {
			google.maps.event.addListener(marker, 'click', function(evt) {
				infoWin.setContent(location.info);
				infoWin.open(map, marker);
			})
		}*/
		if (location.info!=null) {
			google.maps.event.addListener(marker, 'spider_click', function(evt) {
				infoWin.setContent(location.info);
				infoWin.open(map, marker);
			})
		}

		/*oms.addListener('format', function(marker, status) {
		  var iconURL = status == OverlappingMarkerSpiderfier.markerStatus.SPIDERFIED ? 'images/marker-highlight.svg' :
		    status == OverlappingMarkerSpiderfier.markerStatus.SPIDERFIABLE ? 'images/marker-plus.svg' :
		    status == OverlappingMarkerSpiderfier.markerStatus.UNSPIDERFIABLE ? 'images/marker.svg' :
		    null;
		  marker.setIcon({
		    url: iconURL,
		    scaledSize: new google.maps.Size(23, 32)  // makes SVG icons work in IE
		  });
		});*/

		oms.addMarker(marker);
		return marker;
	});

	// Add a marker clusterer to manage the markers.
	var markerCluster = new MarkerClusterer(map, markers, {
		maxZoom: 10,
		gridSize: 30,
		imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
	});

}
