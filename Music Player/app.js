var play = document.querySelector("#play");
var song = document.querySelector("#song");
var progress = document.querySelector("#progress");
var PlayBtn = document.querySelector("#play-btn");


song.onloadedmetadata = function () {
    progress.max = song.duration;
    progress.value = song.currenTime;
}

function playpause() {
    if (play.classList.contains("fa-pause")) {
        song.pause();
        play.classList.remove("fa-pause");
        play.classList.add("fa-play");
    } else {
        song.play();
        play.classList.add("fa-pause");
        play.classList.remove("fa-play");
    }
}

if (song.play()) {
    setInterval(() => {
        progress.value = song.currentTime;
    }, 500);
}

progress.onchange = function() {
    song.play();
    song.currentTime = progress.value;
    play.classList.add("fa-pause");
    play.classList.remove("fa-play");
}

PlayBtn.addEventListener("click", () => {
    playpause();
})