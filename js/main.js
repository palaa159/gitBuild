var map = L.map('map');
L.tileLayer('http://{s}.tile.cloudmade.com/API-key/997/256/{z}/{x}/{y}.png', {
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