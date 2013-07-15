$(document).delegate("#mapView", "pageinit", function() {
	var map = L.map('map', {
		zoomControl: false
	});
	var myPos = L.circleMarker([44, 33], 10).addTo(map);
	L.tileLayer('http://{s}.tile.cloudmade.com/BC9A493B41014CAABB98F0471D759707/997/256/{z}/{x}/{y}.png', {
		maxZoom: 18
	}).addTo(map);
	// init locate

	function findLocation() {
		map.locate({
			watch: true,
			setView: true,
			minZoom: 10,
			maxZoom: 16
		});
	}

	function onLocationFound(e) {
		var lat = (e.latlng.lat);
		var lng = (e.latlng.lng);
		var newLatLng = new L.LatLng(lat, lng);
		myPos.setLatLng(newLatLng);
	}
	map.on('locationfound', onLocationFound);

	function onLocationError(e) {
		alert(e.message);
	}
	map.on('locationerror', onLocationError);
	
	$('#map').css({
		'height': window.innerHeight
	});
	
	$('#clientLocate').click(function() {
		findLocation();
	});
	
	
	findLocation();
});