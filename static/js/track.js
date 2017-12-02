(function () {
	var socket = io();
	var track = document.getElementById('track');
	var $name = document.getElementById("name");
	var stop = document.getElementById("stop");
	var trackfunc;

	track.addEventListener("click", function(e) {

		trackfunc = setInterval(function () {
			var name = $name.value;

			navigator.geolocation.getCurrentPosition(function (position) {
				var data = {
					name: name,
					id: socket.id,
					lat: position.coords.latitude,
					long: position.coords.longitude
				};

				socket.emit("location", data);
				console.log(data);
			});
		}, 100);
	});

	stop.addEventListener("click", function(e) {
		clearInterval(trackfunc);
	});
})();