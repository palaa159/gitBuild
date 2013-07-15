$( document ).delegate("#mapView", "pageinit", function() {
  var map = L.map('map', {
	zoomControl: false
});
L.tileLayer('http://{s}.tile.cloudmade.com/BC9A493B41014CAABB98F0471D759707/997/256/{z}/{x}/{y}.png', {
	maxZoom: 18
}).addTo(map);
// init locate

function initLocatation() {
	map.locate({
		setView: true,
		maxZoom: 16
	});
}
initLocatation();

function onLocationFound(e) {
	var radius = e.accuracy / 2;
	L.marker(e.latlng).addTo(map).bindPopup("You are within " + radius + " meters from this point").openPopup();
	L.circle(e.latlng, radius).addTo(map);
}
map.on('locationfound', onLocationFound);

function onLocationError(e) {
	alert(e.message);
}
map.on('locationerror', onLocationError);

$('#map').css({
	'height': window.innerHeight - 47
});
});