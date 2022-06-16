
var audio = new Audio('theme_short.mp3');

function play_sound() {
	audio.play();
}

function stop_sound() {
	audio.pause();
}

function handleEvents(event) {
	var e_x = document.getElementById('value_x')
	var e_y = document.getElementById('value_y')
	var e_z = document.getElementById('value_z')

	var x = event.acceleration.x
	var y = event.acceleration.y
	var z = event.acceleration.z

	e_x.textContent = x
	e_y.textContent = y
	e_z.textContent = z

	

}

window.addEventListener('devicemotion', handleEvents, true)