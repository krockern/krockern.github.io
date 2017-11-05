function initMap() {
	    
	//var centerStart = {lat: 62.415023, lng: 15.143264};
	var centerStart = {lat: 62.415, lng: 15.143};
	var statue_001_coordinates = {lat: 58.412363, lng: 15.616854};
	var statue_002_coordinates = {lat: 62.545822, lng: 12.558756};

	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 5,
		center: centerStart
	});

	var statue_001_marker = new google.maps.Marker({
		position: statue_001_coordinates,
		map: map,
		title: 'Staty i Linkebode'
	});
	
	var statue_002_marker = new google.maps.Marker({
		position: statue_002_coordinates,
		map: map,
		title: 'Museum'
	});
		
}