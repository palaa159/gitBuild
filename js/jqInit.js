$(document).bind("mobileinit", function() {
	// Make your jQuery Mobile framework configuration changes here!
	/* $.mobile.defaultPageTransition = 'none'; */
	$.mobile.buttonMarkup.hoverDelay = 0;
	$.mobile.allowCrossDomainPages = true;
	$.mobile.loader.prototype.options.text = "loading";
	$.mobile.loader.prototype.options.textVisible = true;
	$.mobile.loader.prototype.options.theme = "a";
	$.mobile.loader.prototype.options.html = "";
});

function checkConnection() {
	var networkState = navigator.connection.type;
	var states = {};
	states[Connection.UNKNOWN] = 'Unknown connection';
	states[Connection.ETHERNET] = 'Ethernet connection';
	states[Connection.WIFI] = 'WiFi connection';
	states[Connection.CELL_2G] = 'Cell 2G connection';
	states[Connection.CELL_3G] = 'Cell 3G connection';
	states[Connection.CELL_4G] = 'Cell 4G connection';
	states[Connection.CELL] = 'Cell generic connection';
	states[Connection.NONE] = 'No network connection';
	alert('Connection type: ' + states[networkState]);
}
checkConnection();