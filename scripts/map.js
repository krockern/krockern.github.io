function initMap() {
	    
	//var centerStart = {lat: 62.415023, lng: 15.143264};
	var centerStart = {lat: 62.415, lng: 15.143};
	
	
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 5,
		center: centerStart
	});
	
	//Staty utanför NH i Linköping

	var statue_001_coordinates = {lat: 58.412363, lng: 15.616854};

	var statue_001_marker = new google.maps.Marker({
		position: statue_001_coordinates,
		map: map,
		title: 'Staty i Linköping'
	});
	
	//Maj i Danderyd
	//59.395572, 18.037009
	var maj_danderyd_coordinates = {lat: 59.395572, lng: 18.037009};
	
	var maj_danderyd_contentString = 
		'<div id="content">'+
			'<div id="siteNotice">'+
			'</div>'+
			'<h4 id="firstHeading" class="firstHeading">Maj</h4>'+
			'<div id="bodyContent">'+
				'<div style="float:left; width:160px;"><img src="pics/Maj.jpg" alt="Maj" style="width:150px; align:center;"></div>' +
				'<div style="paddingLeft:5px"><p>Statyn <b>Maj</b> i Danderyd är en broms staty, ca. två meter hög på en marmorsockel.</p>'+
				'<p>Maj finns även i Strykjärnsparken, Söderhamn och Skolparken, Vilhelmina</p></div>'+
			'</div>'+
		'</div>';
	  
	var maj_danderyd_infowindow = new google.maps.InfoWindow({
		content: maj_danderyd_contentString
	});
	
	var maj_danderyd_marker = new google.maps.Marker({
		position: maj_danderyd_coordinates,
		map: map,
		title: 'Maj i Danderyd'
	});
	
	maj_danderyd_marker.addListener('click', function() {
		maj_danderyd_infowindow.open(map, maj_danderyd_marker);
	});
	
	//Härjedalens Fjällmuseum
	var harjedalens_fjallmuseum_coordinates = {lat: 62.548326, lng: 12.537803};
	
	var harjedalens_fjallmuseum_contentString = 
		'<div id="content">'+
			'<div id="siteNotice"></div>'+
			'<h4 id="firstHeading" class="firstHeading">Härjedalens Fjällmuseum</h4>'+
			'<div id="bodyContent">'+
				'<p><b>Härjedalens Fjällmuseum</b> har en permanent utställning av ' +
				'en del av <b>Emil Näsvalls</b> verk.</p>'+
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