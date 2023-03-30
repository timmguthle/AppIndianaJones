
const audio = new Audio('theme_short.mp3');
let th = 50

function play_sound() {
	audio.play();
	
}

function stop_sound() {
	audio.pause();
}
 audio.pl

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
				
				})
			}
		})
		.catch(console.error);
	} 
	
	/* else {
		window.addEventListener('devicemotion', event => {
			document.getElementById('value_x').innerHTML = event.acceleration.x
			document.getElementById('value_y').innerHTML = event.acceleration.y
			document.getElementById('value_z').innerHTML = event.acceleration.z
		})} */

	
	audio.play()
	setTimeout(audio.pause, 1)
}


function stop_motion(){
	window.removeEventListener('devicemotion', )
	document.getElementById('stop_button').style.visibility = 'hidden'
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