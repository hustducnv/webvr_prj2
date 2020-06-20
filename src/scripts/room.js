function play_pause_speaker() {
    var speaker = document.querySelector('#speaker');
    if (speaker.components.sound.on == true) {
          console.log('pause');
          speaker.components.sound.pauseSound();
          speaker.components.sound.on = false;
      } else {
          console.log("play");
          speaker.components.sound.playSound();
          speaker.components.sound.on = true;
      }
}

function play_pause_tv() {
    var myVideo = document.getElementById('kid_vocab_video');
    var myVideoFrame = document.getElementById('tv-video-frame')
    if (myVideo.paused) {
        myVideo.play();
        myVideoFrame.setAttribute("visible", "true");

    } else {
        myVideo.pause();
        myVideoFrame.setAttribute("visible", "false");
    }
}