const video = document.querySelector(".viewer");
const toggle = document.querySelector(".toggle");
const progress = document.querySelector(".progress");
const volume = document.querySelector(".volume");
const playbackSpeed = document.querySelector(".playbackSpeed");
const rewind = document.querySelector(".rewind");
const forward = document.querySelector(".forward");

function togglePlay() {
    if (video.paused) {
        video.play();
        toggle.textContent = "❚ ❚";
    } else {
        video.pause();
        toggle.textContent = "►";
    }
}

function updateProgress() {
    progress.value = (video.currentTime / video.duration) * 100;
}

function setProgress() {
    video.currentTime = (progress.value / 100) * video.duration;
}

function updateVolume() {
    video.volume = volume.value;
}

function updateSpeed() {
    video.playbackRate = playbackSpeed.value;
}

function skipBackward() {
    video.currentTime -= 10;
}

function skipForward() {
    video.currentTime += 25;
}

video.addEventListener("click", togglePlay);
toggle.addEventListener("click", togglePlay);
video.addEventListener("timeupdate", updateProgress);
progress.addEventListener("input", setProgress);
volume.addEventListener("input", updateVolume);
playbackSpeed.addEventListener("input", updateSpeed);
rewind.addEventListener("click", skipBackward);
forward.addEventListener("click", skipForward);
