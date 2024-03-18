let timer;
let seconds = 0;
let minutes = 0;

function startStop() {
    if (!timer) {
        timer = setInterval(updateTime, 1000);
        // document.getElementById("startStop").textContent = "Stop";
    } else {
        clearInterval(timer);
        timer = null;
        // document.getElementById("startStop").textContent = "Start";
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
        (minutes < 10 ? "0" : "") + minutes + ":" +
        (seconds < 10 ? "0" : "") + seconds;
}

startStop();

// function reset() {
//     clearInterval(timer);
//     timer = null;
//     seconds = 0;
//     minutes = 0;
//     hours = 0;
//     document.getElementById("display").textContent = "00:00:00";
//     document.getElementById("startStop").textContent = "Start";
// }
