var myVideo = document.getElementById("video1"); 
var ss = document.getElementById("s-s"); 
var ts = document.getElementById("timestamp"); 
var et = document.getElementById("endtime");
var player = document.getElementById("player");
var styles = document.getElementById("styles");
styles.innerHTML = '#time {width: ' + (player.offsetWidth - 25) + "px}";

function format(time) {
    var hrs = ~~(time / 3600);
    var mins = ~~((time % 3600) / 60);
    var secs = ~~time % 60;

    var ret = "";
    if (hrs > 0) {
        ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }
    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    return ret;
}

function loop(){
    ts.innerHTML = format(myVideo.currentTime); 
    //et.phonehome
    et.innerHTML = format(myVideo.duration);
    if(myVideo.ended){
    ss.innerHTML = '<i class="material-icons">loop</i>';}
    requestAnimationFrame(loop)
}

loop();

function fullScreen(){
    player.requestFullscreen()
}

function playPause() { 
  if (myVideo.paused) {
    myVideo.play(); 
    ss.innerHTML = '<i class="material-icons">pause</i>';
  }
else {
    myVideo.pause(); 
    ss.innerHTML = '<i class="material-icons">play_arrow</i>';
}}