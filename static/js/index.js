var map;

var socket = io();
var markers = []; 

function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		zoom: 2,
		center: {lat: 51.5207929, lng: -3.2420027}
	});
}

socket.on("location", function (data) {
	if(map) {
		var marker = markers.find(function(e) {
			return e.id == data.id
		})

		if(marker){
			marker.marker.setPosition({lat: data.lat, lng: data.long});
		} else {
			var mapmarker = new google.maps.Marker({
				position: {lat: data.lat, lng: data.long},
				map: map
			});
			data.marker = mapmarker;
			markers.push(data)
		}
	}
});