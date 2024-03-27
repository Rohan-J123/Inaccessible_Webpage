let timer;
let seconds = 0;
let minutes = 0;
let hours = 0;

function startStop() {
    if (!timer) {
        timer = setInterval(updateTime, 1000);
    } else {
        clearInterval(timer);
        timer = null;
    }
}

function updateTime() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }
    document.getElementById("clock").textContent =
        (hours < 10 ? "0" : "") + hours + ":" +
        (minutes < 10 ? "0" : "") + minutes + ":" +
        (seconds < 10 ? "0" : "") + seconds;
}

startStop();