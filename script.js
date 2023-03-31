
const audio = new Audio('theme_short.mp3');
let th = 650
document.getElementById('th-div').style.visibility = 'hidden'

function play_sound() {
	audio.play();
	
}

function stop_sound() {
	audio.pause();
}

function th_plus() {th += 20; document.getElementById('th').innerHTML = th;}
function th_minus() {th -= 20; document.getElementById('th').innerHTML = th}


function check_motion(gamma){
	// gamma entspricht rotationsrate um Vektor normal zu Bildschirm
	
	if (Math.abs(gamma) > th) {
		audio.play()
	}

	// document.getElementById('value_x').innerHTML = event.acceleration.x
	// document.getElementById('value_y').innerHTML = event.acceleration.y
	// document.getElementById('value_z').innerHTML = event.acceleration.z
	// document.getElementById('rotRate').innerHTML = event.rotationRate.gamma + '' + event.rotationRate.beta + '' + event.rotationRate.alpha

}

function start_motion(){
	if (typeof DeviceMotionEvent.requestPermission === 'function') {
		DeviceMotionEvent.requestPermission()
		.then(permissionState => {
			if (permissionState === 'granted') {
				
				window.addEventListener('devicemotion', event => {check_motion(event.rotationRate.gamma)})
			}
		})
		.catch(error => {console.log(error); alert(error)});
	} 
	

	audio.play().then(audio.pause()).catch(error => {console.log(error)})
}


function start_orientation(){
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
