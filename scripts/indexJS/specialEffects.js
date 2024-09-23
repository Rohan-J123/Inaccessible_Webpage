function confettiAnimation(){
    confetti({
        particleCount: 500,
        spread: 90,
        origin: {x: 0, y: 1},
        startVelocity: 75,
        angle: 45,
        zIndex: 3000
    });
    confetti({
        particleCount: 500,
        spread: 90,
        origin: {x: 1, y: 1},
        startVelocity: 75,
        angle: 135,
        zIndex: 3000
    });
}

function shakeScreen(){
    var shakeElement = document.querySelector("body");
    shakeElement.classList.add("shake-slow");
    setTimeout(function () {
      shakeElement.classList.remove("shake-slow");
    }, 1000);
}