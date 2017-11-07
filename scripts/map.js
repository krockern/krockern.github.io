function initMap() {
	    
	//var centerStart = {lat: 62.415023, lng: 15.143264};
	var centerStart = {lat: 62.415, lng: 15.143};
	var statue_001_coordinates = {lat: 58.412363, lng: 15.616854};
	var harjedalens_fjallmuseum_coordinates = {lat: 62.548326, lng: 12.537803};
	

	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 5,
		center: centerStart
	});

	var statue_001_marker = new google.maps.Marker({
		position: statue_001_coordinates,
		map: map,
		title: 'Staty i Linkebode'
	});
	
	//Härjedalens Fjällmuseum
	
	var harjedalens_fjallmuseum_contentString = 
		'<div id="content">'+
		'<div id="siteNotice">'+
		'</div>'+
		'<h4 id="firstHeading" class="firstHeading">Härjedalens Fjällmuseum</h4>'+
		'<div id="bodyContent">'+
		'<p><b>Härjedalens Fjällmuseum</b> har en permanent utställning av ' +
		'en del av <b>Emil Näsvalls</b> verk. '+
		'</p>'+
		'<p>Fjällmuseets hemsida är <a href="http://kommun.herjedalen.se/fjallmuseet.4.7a231afd12424b40e2880001097.html">' +
		'http://kommun.herjedalen.se/fjallmuseet.4.7a231afd12424b40e2880001097.html</a></p>'+
		'</div>'+
		'</div>';
	  
	var harjedalens_fjallmuseum_infowindow = new google.maps.InfoWindow({
		content: harjedalens_fjallmuseum_contentString
	});
	
	var harjedalens_fjallmuseum_marker = new google.maps.Marker({
		position: harjedalens_fjallmuseum_coordinates,
		map: map,
		title: 'Härjedalens Fjällmuseum'
	});
	
	harjedalens_fjallmuseum_marker.addListener('click', function() {
		harjedalens_fjallmuseum_infowindow.open(map, harjedalens_fjallmuseum_marker);
	});
		
}