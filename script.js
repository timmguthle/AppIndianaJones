
const audio = new Audio('theme_short.mp3');
let th = 250
let max_gamma = 0;

function play_sound() {
	audio.play();
	
}

function stop_sound() {
	audio.pause();
}


function check_motion(gamma){
	// gamma entspricht rotationsrate um Vektor normal zu Bildschirm
	
	if (Math.abs(gamma) > th) {
		audio.play()
	}
}

function start_motion(){
	if (typeof DeviceMotionEvent.requestPermission === 'function') {
		DeviceMotionEvent.requestPermission()
		.then(permissionState => {
			if (permissionState === 'granted') {
				document.getElementById('stop_button').style.visibility = 'visible';

				window.addEventListener('devicemotion', event => {
					document.getElementById('value_x').innerHTML = event.acceleration.x
					document.getElementById('value_y').innerHTML = event.acceleration.y
					document.getElementById('value_z').innerHTML = event.acceleration.z
					document.getElementById('rotRate').innerHTML = event.rotationRate.gamma + '' + event.rotationRate.beta + '' + event.rotationRate.alpha
					check_motion(event.rotationRate.gamma)
					if (event.gamma > max_gamma) {
						max_gamma = event.gamma
						console.log(max_gamma)
					}
				
				})
			}
		})
		.catch(error => {console.log(error); alert(error)});
	} 
	
	/* else {
		window.addEventListener('devicemotion', event => {
			document.getElementById('value_x').innerHTML = event.acceleration.x
			document.getElementById('value_y').innerHTML = event.acceleration.y
			document.getElementById('value_z').innerHTML = event.acceleration.z
		})} */

	
	audio.play()
	setTimeout(stop_sound, 1)
}


function start(){
	if (typeof DeviceOrientationEvent.requestPermission === 'function') {
		DeviceOrientationEvent.requestPermission()
		.then(permissionState => {
			if (permissionState === 'granted') {
				window.addEventListener('deviceorientation', event => {
					document.getElementById('value_x').innerHTML = event.alpha
					document.getElementById('value_y').innerHTML = event.beta
					document.getElementById('value_z').innerHTML = event.gamma
				})
			}
		})
		.catch(console.error);
	} else {
		console.log('test')
		window.addEventListener('deviceorientation', event => {
			document.getElementById('value_x').innerHTML = event.alpha
			document.getElementById('value_y').innerHTML = event.beta
			document.getElementById('value_z').innerHTML = event.gamma
	})}
}

function stop(){
	window.removeEventListener('deviceorientation')
}