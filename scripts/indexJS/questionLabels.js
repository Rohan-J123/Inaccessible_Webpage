if(parseInt(sessionStorage.getItem('question-number')) == 10){
    document.getElementById('question-final-modal').innerHTML = 
    `<div class="modal-header">
        <h1 class="modal-title fs-5" id="endResultsLabel">Question Criterion:</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onclick="updateDB();"></button>
    </div>
    <div class="modal-body" style="display: flex; flex-wrap: wrap; overflow: scroll; height: 70vh;">
        <ol style="font-size: x-large; width: 100%;" id="question-criteria-results">
        </ol>
    </div>
    <div class="modal-footer">
        <button type="button" class="btn btn-primary" onclick="playAgainUpdateDB()">Play Again</button>
    </div>`;
}

if(parseInt(sessionStorage.getItem('question-number')) > 10){
    window.location.href = './index.html';
}

var userId = sessionStorage.getItem('user-id');

function playAgainUpdateDB(){
    if (!userId) {
        console.error("User ID not found in sessionStorage");
        return;
    }
    document.getElementById('spinner-circle').style.display = 'block';
    var chosenCriterion = sessionStorage.getItem('chosenCriterionAll');
    var unpickedCriterion = sessionStorage.getItem('chosenCriterion');
    var score = sessionStorage.getItem('score');
    var timeTaken = document.getElementById('clock-mini').textContent;
    var livesRemaining = document.getElementById('wifi-sidebar-label').innerText.split(' ')[0];
    var hintedCriteriaList = JSON.stringify(hintedCriteria);
    var correctlyAnswered = true;
    if(document.getElementById('wifi-sidebar-label').innerText == "Game Over!"){
        correctlyAnswered = false;
    }
    
    db.collection("users").doc(userId).get().then(function(doc) {
        if (doc.exists) {
            var docData = doc.data();
            var updatedCriterion = docData.questionCriterion || [];
            var updatedUnpickedCriterion = docData.unpickedCriterion || [];
            var updatedScore = docData.score || [];
            var updatedTimeTaken = docData.timeTaken || [];
            var updatedLivesRemaining = docData.livesRemaining || [];
            var updatedhintedCriteriaList = docData.hintedCriteriaList || [];
            var updatedCorrectlyAnswered = docData.correctlyAnswered || [];

            updatedCriterion.push(chosenCriterion);
            updatedUnpickedCriterion.push(unpickedCriterion);
            score = score - sumArray(updatedScore);
            updatedScore.push(score);
            updatedTimeTaken.push(timeTaken);
            updatedLivesRemaining.push(livesRemaining);
            updatedhintedCriteriaList.push(hintedCriteriaList);
            updatedCorrectlyAnswered.push(correctlyAnswered);

            db.collection("users").doc(userId).set({
                questionCriterion: updatedCriterion,
                unpickedCriterion: updatedUnpickedCriterion,
                score: updatedScore,
                timeTaken: updatedTimeTaken,
                finalScore: sessionStorage.getItem('score'),
                totalTimeTaken: document.getElementById('clock').textContent,
                livesRemaining: updatedLivesRemaining,
                hintedCriteriaList: updatedhintedCriteriaList,
                correctlyAnswered: updatedCorrectlyAnswered
            }, { merge: true })
            .then(function() {
                console.log("Document successfully updated!");
                document.getElementById('spinner-circle').style.display = 'none';
                window.location.href = './index.html';
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

var s = "";
correctQuestions = JSON.parse(sessionStorage.getItem('correct-questions'));

document.getElementById('question-label-text').innerText = "Question: " + sessionStorage.getItem('question-number');
document.getElementById('score-text').innerText = "Score: " + sessionStorage.getItem('score');
document.getElementById('criterions-remaining-label-text').innerText = "Criteria Left: " + remaining;

for(var i = 1; i < parseInt(sessionStorage.getItem('question-number')); i++){
    if(correctQuestions.includes(i)){
        s += '<button type="button" class="btn btn-success question-label" id="question-label-1" tabindex="-1" style="font-size: x-large;">' + i +'<span>&#10003;</span></button>';
    } else {
        s += '<button type="button" class="btn btn-danger question-label" id="question-label-1" tabindex="-1" style="font-size: x-large;">' + i +'<span>&#10007;</span></button>';
    }
}

s += '<button type="button" class="btn btn-warning question-label" id="question-label-1" tabindex="-1" style="font-size: x-large;">' + parseInt(sessionStorage.getItem('question-number')) +'</button>';

for(var i = parseInt(sessionStorage.getItem('question-number')) + 1; i <= 10; i++){
    s += '<button type="button" class="btn btn-outline-primary question-label" id="question-label-1" tabindex="-1" style="font-size: x-large;">' + i +'</button>';
}

document.getElementById('question-label-container').innerHTML = s;

function onCorrectQuestionComplete(){
    if(parseInt(sessionStorage.getItem('question-number')) == 10){
        sessionStorage.removeItem('user-id');
    }   
    currentQuestionNumber = parseInt(sessionStorage.getItem('question-number'));
    sessionStorage.setItem('question-number', currentQuestionNumber + 1);
    correctQuesions = JSON.parse(sessionStorage.getItem('correct-questions'));
    correctQuesions.push(currentQuestionNumber);
    sessionStorage.setItem('correct-questions', JSON.stringify(correctQuesions));
    document.getElementById('modalOpenButton').click();
    sessionStorage.setItem('timer', document.getElementById("clock").textContent);
    stop = true;
}

function onIncorrectQuestionComplete(){
    if(parseInt(sessionStorage.getItem('question-number')) == 10){
        sessionStorage.removeItem('user-id');
    }
    sessionStorage.setItem('question-number', parseInt(sessionStorage.getItem('question-number')) + 1);
    document.getElementById('modalOpenButton').click();
    sessionStorage.setItem('timer', document.getElementById("clock").textContent);
    stop = true;
}

function onScoreIncrease(){
    document.getElementById('score-text').innerText = "Score: " + sessionStorage.getItem('score');
}

var result = "";
var chosenCriterionAll = JSON.parse(sessionStorage.getItem('chosenCriterionAll'));

for(var i = 0; i < chosenCriterionAll.length; i++) {
    var incorrectText = data[chosenCriterionAll[i]][0].replace(new RegExp('<', 'g'), '&lt;').replace(new RegExp('>', 'g'), '&gt;');
    var correctText = data[chosenCriterionAll[i]][1].replace(new RegExp('<', 'g'), '&lt;').replace(new RegExp('>', 'g'), '&gt;');
    var cr = successCriterionLabels[chosenCriterionAll[i]];
    var prNo = cr.split(' ')[1].split('.')[0];
    var pr = "";
    if(prNo == 1){
        pr = "Perceivable";
    }  else if (prNo == 2){
        pr = "Operable";
    }  else if (prNo == 3){
        pr = "Understandable";
    }  else if (prNo == 4){
        pr = "Robost";
    }

    result += 
`<li>
    <h4 style="text-align: center;" class="lobster-regular">${cr}</h4>
    <h5 style="text-align: center; color: rgb(100, 100, 100)">${pr}</h5>
    <div style="display: flex; flex-wrap: wrap; font-size: medium;">
        <div style="padding: 5px; flex: 1; width: 50%;">
            <h5 style="text-align: center;" class="lobster-regular">Incorrect:</h5>
            <div style="white-space: pre-line; background-color: black; color: white; height: 150px; border-radius: 10px; padding: 10px; overflow-y: scroll;">${incorrectText}</div>
        </div>
        <div style="padding: 5px; flex: 1; width: 50%;">
            <h5 style="text-align: center;" class="lobster-regular">Correct:</h5>
            <div style="white-space: pre-line; background-color: black; color: white; height: 150px; border-radius: 10px; padding: 10px; overflow-y: scroll;">${correctText}</div>
        </div>
    </div>
</li>
<br>`;
}

document.getElementById('question-criteria-results').innerHTML = result;

function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

function updateDB() {
    document.getElementById('spinner-circle').style.display = 'block';
    var userId = sessionStorage.getItem('user-id');

    if (!userId) {
        console.error("User ID not found in sessionStorage");
        return;
    }

    console.log(hintedCriteria);

    var chosenCriterion = sessionStorage.getItem('chosenCriterionAll');
    var unpickedCriterion = sessionStorage.getItem('chosenCriterion');
    var score = sessionStorage.getItem('score');
    var timeTaken = document.getElementById('clock-mini').textContent;
    var livesRemaining = document.getElementById('wifi-sidebar-label').innerText.split(' ')[0];
    var hintedCriteriaList = JSON.stringify(hintedCriteria);
    var correctlyAnswered = true;
    if(document.getElementById('wifi-sidebar-label').innerText == "Game Over!"){
        correctlyAnswered = false;
    }
    
    db.collection("users").doc(userId).get().then(function(doc) {
        if (doc.exists) {
            var docData = doc.data();
            var updatedCriterion = docData.questionCriterion || [];
            var updatedUnpickedCriterion = docData.unpickedCriterion || [];
            var updatedScore = docData.score || [];
            var updatedTimeTaken = docData.timeTaken || [];
            var updatedLivesRemaining = docData.livesRemaining || [];
            var updatedhintedCriteriaList = docData.hintedCriteriaList || [];
            var updatedCorrectlyAnswered = docData.correctlyAnswered || [];

            updatedCriterion.push(chosenCriterion);
            updatedUnpickedCriterion.push(unpickedCriterion);
            score = score - sumArray(updatedScore);
            updatedScore.push(score);
            updatedTimeTaken.push(timeTaken);
            updatedLivesRemaining.push(livesRemaining);
            updatedhintedCriteriaList.push(hintedCriteriaList);
            updatedCorrectlyAnswered.push(correctlyAnswered);

            db.collection("users").doc(userId).set({
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
    document.getElementById('submit-line-number').disabled = false;
    document.getElementById('game-hint-button').disabled = false;

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

    if (keyCode === 37) { // Left arrow
        scrollableElement.scrollLeft -= scrollAmount;
        event.preventDefault();
    } else if (keyCode === 38) { // Up arrow
        scrollableElement.scrollTop -= scrollAmount;
        event.preventDefault();
    } else if (keyCode === 39) { // Right arrow
        scrollableElement.scrollLeft += scrollAmount;
        event.preventDefault();
    } else if (keyCode === 40) { // Down arrow
        scrollableElement.scrollTop += scrollAmount;
        event.preventDefault();
    }
}