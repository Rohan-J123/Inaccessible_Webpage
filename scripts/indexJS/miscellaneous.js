function onCorrectQuestionComplete(){
    // if(parseInt(sessionStorage.getItem('question-number')) == 10){
    //     sessionStorage.removeItem('user-id');
    // }   
    currentQuestionNumber = parseInt(sessionStorage.getItem('question-number'));
    sessionStorage.setItem('question-number', currentQuestionNumber + 1);
    correctQuesions = JSON.parse(sessionStorage.getItem('correct-questions'));
    correctQuesions.push(currentQuestionNumber);
    sessionStorage.setItem('correct-questions', JSON.stringify(correctQuesions));
    document.getElementById('modalOpenButton').click();
    sessionStorage.setItem('timer', document.getElementById("clock").textContent);
    stop = true;
    confettiAnimation();
}

function onIncorrectQuestionComplete(){
    // if(parseInt(sessionStorage.getItem('question-number')) == 10){
    //     sessionStorage.removeItem('user-id');
    // }
    sessionStorage.setItem('question-number', parseInt(sessionStorage.getItem('question-number')) + 1);
    document.getElementById('modalOpenButton').click();
    sessionStorage.setItem('timer', document.getElementById("clock").textContent);
    stop = true;
    shakeScreen();
}

function onScoreIncrease(){
    document.getElementById('score-text').innerText = "Score: " + currentScore;
}

function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

function updateDB() {
    chosenIncorrectCriterion.forEach(item => {
        if (!criterionLeftToIdentify.includes(item) && !criterionCorrectlyChosenTillNow.includes(item)) {
            criterionCorrectlyChosenTillNow.push(item);
        }
    });

    sessionStorage.setItem("criterion-correctly-chosen-till-now", JSON.stringify(criterionCorrectlyChosenTillNow));
    criterionGivenTillNow = criterionGivenTillNow.concat(chosenIncorrectCriterion);
    sessionStorage.setItem("criterion-given-till-now", JSON.stringify(criterionGivenTillNow));

    document.getElementById('spinner-circle').style.display = 'block';
    var userId = sessionStorage.getItem('user-id');

    if (!userId) {
        console.error("User ID not found in sessionStorage");
        return;
    }

    var chosenCriterion = chosenIncorrectCriterion;
    var unpickedCriterion = criterionLeftToIdentify;
    var score = parseInt(currentScore);
    var timeTaken = document.getElementById('clock-mini').textContent;
    var livesRemaining = document.getElementById('wifi-sidebar-label').innerText.split(' ')[0];
    var hintedCriteriaList = hintedCriteria;
    var correctlyAnswered = true;
    if(document.getElementById('wifi-sidebar-label').innerText == "Game Over!"){
        correctlyAnswered = false;
    }
    
    db.collection(collectionName).doc(userId).get().then(function(doc) {
        if (doc.exists) {
            var docData = doc.data();
            var updatedCriterion = docData.questionCriterion || [];
            var updatedUnpickedCriterion = docData.unpickedCriterion || [];
            var updatedScore = docData.score || [];
            var updatedTimeTaken = docData.timeTaken || [];
            var updatedLivesRemaining = docData.livesRemaining || [];
            var updatedhintedCriteriaList = docData.hintedCriteriaList || [];
            var updatedCorrectlyAnswered = docData.correctlyAnswered || [];

            updatedCriterion.push(JSON.stringify(chosenCriterion));
            updatedUnpickedCriterion.push(JSON.stringify(unpickedCriterion));
            score = score - sumArray(updatedScore);
            updatedScore.push(score);
            updatedTimeTaken.push(timeTaken);
            updatedLivesRemaining.push(livesRemaining);
            updatedhintedCriteriaList.push(JSON.stringify(hintedCriteriaList));
            updatedCorrectlyAnswered.push(correctlyAnswered);

            db.collection(collectionName).doc(userId).set({
                questionCriterion: updatedCriterion,
                unpickedCriterion: updatedUnpickedCriterion,
                score: updatedScore,
                timeTaken: updatedTimeTaken,
                livesRemaining: updatedLivesRemaining,
                hintedCriteriaList: updatedhintedCriteriaList,
                correctlyAnswered: updatedCorrectlyAnswered
            }, { merge: true })
            .then(function() {
                console.log("Document successfully updated!");
                document.getElementById('spinner-circle').style.display = 'none';
                sessionStorage.setItem('score', currentScore);
                location.reload();
            })
            .catch(function(error) {
                console.error("Error writing document: ", error);
            });
        } else {
            console.log("No such document!");
        }
    }).catch(function(error) {
        console.error("Error getting document:", error);
    });
}

if(sessionStorage.getItem('start-dont-show') == 'true'){
    startButtonPressed();
}

function startButtonPressed(){
    document.getElementById('main-code-area').style.display="block";
    document.getElementById('main-start-area').style.display="none";

    var element = document.getElementById("instructions-block-in-sidebar");
    if (element.style.maxHeight) {
        element.style.maxHeight = null;
    } else {
        element.style.maxHeight = element.scrollHeight + "px";
    }

    startStop();

    document.getElementById('submitLineNumber').disabled = false;
    document.getElementById("lineInputFrontButton").disabled = false;
    document.getElementById("lineInputBackButton").disabled = false;

    document.getElementById('game-hint-button').disabled = false;
    document.getElementById('game-run-code-button').disabled = false;

    if (document.getElementById("hide-starting-instructions").checked) {
        sessionStorage.setItem('start-dont-show', 'true');
    }
}

document.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        var focusedElement = document.activeElement;
        if (focusedElement.type === "checkbox") {
            focusedElement.checked = !focusedElement.checked;
        }
    }
});

function scrollWithArrows(event) {
    var keyCode = event.keyCode;
    var scrollableElement = document.querySelector('.scrollable-content');
    var scrollAmount = 50; 

    if (keyCode === 37) {
        scrollableElement.scrollLeft -= scrollAmount;
        event.preventDefault();
    } else if (keyCode === 38) {
        scrollableElement.scrollTop -= scrollAmount;
        event.preventDefault();
    } else if (keyCode === 39) {
        scrollableElement.scrollLeft += scrollAmount;
        event.preventDefault();
    } else if (keyCode === 40) {
        scrollableElement.scrollTop += scrollAmount;
        event.preventDefault();
    }
}

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