var video;

function getVid(){
	video = document.querySelector("#myVideo"); 
}

function playVid() { 
	video.play();
	document.getElementById("volume").innerHTML = video.volume *100 +"%";
	console.log("Play Video");
	console.log(video);

} 

function pauseVid() { 
	video.pause();
	console.log("Pause Video");
} 

function decreaseSpeed() {
	video.playbackRate *= 0.8;
  	console.log("Speed is "+ video.playbackRate);
} 

function increaseSpeed() {
	video.playbackRate *= 1.2;
	console.log("Speed is "+ video.playbackRate);
} 


function skipAhead() {
	var vid = document.getElementById("myVideo");
	vid.currentTime += 60;
	if (video.ended) {
		vid.currentTime = 0;
	}
	console.log("Current location is "+ video.currentTime);
} 


function mute() { 
  	if (video.muted){
  		document.getElementById("mute").innerHTML = "Mute";
  		console.log("Changing to Unmuted");
  		video.muted = false;
  	}
  	else{
      	document.getElementById("mute").innerHTML = "Unmute";
      	console.log("Changing to Muted");
      	video.muted = true;
  	}
}


function changeVolume() {
	var volume = document.querySelector("#volumeSlider").value;
	video.volume = volumeSlider.value /100;
	document.querySelector("#volume").innerHTML = video.volume *100 +"%";
	console.log("Volume is ");
}
       

function gray() { 
	video.classList.add("grayscale");
	console.log("In grayscale")
}


function color() {
	video.classList.remove("grayscale")
	console.log("In color") 
}
