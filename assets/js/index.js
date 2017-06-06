(function(){

let playaudio = document.getElementById('playBtn'),
 	audio = document.getElementById('audio'),
 	stopaudio = document.getElementById('stopBtn'),
    video = document.getElementById('videox'),
    playvideo = document.getElementById('playBtnvid'),
    stopvideo = document.getElementById('stopBtnvid');


playaudio.onclick = function(){
	
	if(audio.paused){

		audio.play();
		playBtn.innerText = "Pause";
		playBtn.style.backgroundColor = "#ccccff";
	}
	else{

		audio.pause();
		playBtn.innerText = "Play";
		playBtn.style.backgroundColor = "blue";
	}
	// return audio.paused ? audio.play() : audio.pause();	
}

stopaudio.onclick = function(){
	audio.load();
	playBtn.innerText = "Play";
	playBtn.style.backgroundColor = "blue";
}

playvideo.onclick = function(){
    if(video.paused){
        video.play();
        playBtnvid.innerText = "Pause";
        playBtnvid.style.backgroundColor = "#ccccff";

    }else{
        video.pause();
        playBtnvid.innerText = "Play";
        playBtnvid.style.backgroundColor = "blue";
    }
}

 stopvideo.onclick = function(){
    video.load();   
    playBtnvid.innerText = "Play";
    playBtnvid.style.backgroundColor = "blue";

}


function loadDoc(){
	var xhttp = new XMLHttpRequest();

	xhttp.onreadystatechange = function(){

		if(xhttp.readyState == 4 && xhttp.status == 200){

			document.getElementById("demo").innerHTML = xhttp.responseText;

		}
	};

		xhttp.open("GET", "ajaxsamp.html", true);
		xhttp.send();
	}


loadthis.onclick = function(){
	loadDoc();
}

})(); <!--javascript -->




// <!--jquery-->
// (function(){
// 	let video = $("#videox")[0],
// 		play  = $("#playBtnvid"),
// 		stop  = $("#stopBtnvid");

//     play.click(function(){
//     	if(video.paused){
//     		video.play();
//             playBtnvid.innertext ="Pause";

//     	}else{
//     		video.pause();
//     	}
//     });

//     stop.click(function(){
//     	  video.stop(videox);   
//     	});

//     console.log(play);

//    })(); 

    

// $(function(){

// 		let play = $("#playBtn"),
// 			stop = $("#stopBtn"),
// 			audio = $("#audio")[0];

// 	play.click(function(){
// 		if(audio.paused){
// 			audio.play();
// 		}
// 		else{
// 			audio.pause();
// 		}
// 	});

//    stop.click(function(){
//    	audio.load();
//    });

// });


// $(function(){
//  let audio = $('.player audio').get(0),
// 	loadingIndicator = $('.player #loading'),
// 	positionIndicator = $('.player #handle'),
// 	timeleft = $('.player #timeleft');

// if ((audio.buffered != undefined) && (audio.buffered.length != 0)) {
//   $(audio).bind('progress', function() {
//     var loaded = parseInt(((audio.buffered.end(0) / audio.duration) * 100), 10);
//     loadingIndicator.css({width: loaded + '%'});
//   });
// }
// else {
//   loadingIndicator.remove();
// }
// });

// $audio.bind('timeupdate',function()){
// 	let rem = parseInt(audio.duration - audio.currentTime, 10),
// 		pos = (audio.currentTime/audio.duration)*100,
// 		min = Math.floor(rem/60,10),
// 		secs = rem - min * 60;

// 	timeleft.text("-"+min + ":" + (secs > 9 ? : "0" + secs));
  
//     if()
// }
