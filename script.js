
var audio = new Audio('theme_short.mp3');

function play_sound() {
	audio.play();
}

function stop_sound() {
	audio.pause();
}

function handleEvents(event) {
	var x = event.acceleration.x
	var y = event.acceleration.y
	var z = event.acceleration.z

	console.log(x, y, z)

}

window.addEventListener('devicemotion', handleEvents, true)