var scoreTextBox = document.getElementById("score-text");

var tempScore = parseInt(currentScore);

const scoreObserver = new MutationObserver(() => {
    var scoreIncreaseText = document.querySelector("#score-increase-text");
    if(currentScore - tempScore > 0){
        scoreIncreaseText.innerHTML = "+" + String(currentScore - tempScore);
    } else {
        scoreIncreaseText.innerHTML = String(currentScore - tempScore);
    }
    
    scoreIncreaseText.classList.add("score-text");
    tempScore = currentScore;
    setTimeout(function () {
        scoreIncreaseText.classList.remove("score-text");
    }, 2000);
});

scoreObserver.observe(scoreTextBox, { childList: true, characterData: true, subtree: true });   