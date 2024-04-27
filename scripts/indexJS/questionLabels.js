if(parseInt(sessionStorage.getItem('question-number')) == 10){
    document.getElementById('question-final-modal').innerHTML = 
    `<div class="modal-header">
        <h1 class="modal-title fs-5" id="endResultsLabel">Question Criterion:</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onclick="playAgainUpdateDB()"></button>
    </div>
    <div class="modal-body" style="display: flex; flex-wrap: wrap;">
        <ol style="font-size: x-large; width: 100%;" id="question-criteria-results">
        </ol>
    </div>
    <div class="modal-footer">
        <button type="button" class="btn btn-primary" onclick="playAgainUpdateDB()">Play Again</button>
    </div>`;
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
    
    db.collection("users").doc(userId).get().then(function(doc) {
        if (doc.exists) {
            var docData = doc.data();
            var updatedCriterion = docData.questionCriterion || [];
            var updatedUnpickedCriterion = docData.unpickedCriterion || [];
            var updatedScore = docData.score || [];
            var updatedTimeTaken = docData.timeTaken || [];
            var updatedLivesRemaining = docData.livesRemaining || [];

            updatedCriterion.push(chosenCriterion);
            updatedUnpickedCriterion.push(unpickedCriterion);
            score = score - sumArray(updatedScore);
            updatedScore.push(score);
            updatedTimeTaken.push(timeTaken);
            updatedLivesRemaining.push(livesRemaining);

            db.collection("users").doc(userId).set({
                questionCriterion: updatedCriterion,
                unpickedCriterion: updatedUnpickedCriterion,
                score: updatedScore,
                timeTaken: updatedTimeTaken,
                finalScore: sessionStorage.getItem('score'),
                totalTimeTaken: document.getElementById('clock').textContent,
                livesRemaining: updatedLivesRemaining
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
    <h5 style="text-align: center;">${cr}</h5>
    <h5>Principle: ${pr}</h5>
    <div style="display: flex; flex-wrap: wrap; font-size: medium;">
        <div style="padding: 5px; flex: 1;">
            <h5 style="text-align: center;">Incorrect:</h5>
            <div>
                ${incorrectText}
            </div>
        </div>
        <div style="padding: 5px; flex: 1;">
            <h5 style="text-align: center;" >Correct:</h5>
            <div>
                ${correctText}
            </div>
        </div>
    </div>
</li>`;
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

    var chosenCriterion = sessionStorage.getItem('chosenCriterionAll');
    var unpickedCriterion = sessionStorage.getItem('chosenCriterion');
    var score = sessionStorage.getItem('score');
    var timeTaken = document.getElementById('clock-mini').textContent;
    var livesRemaining = document.getElementById('wifi-sidebar-label').innerText.split(' ')[0];
    
    db.collection("users").doc(userId).get().then(function(doc) {
        if (doc.exists) {
            var docData = doc.data();
            var updatedCriterion = docData.questionCriterion || [];
            var updatedUnpickedCriterion = docData.unpickedCriterion || [];
            var updatedScore = docData.score || [];
            var updatedTimeTaken = docData.timeTaken || [];
            var updatedLivesRemaining = docData.livesRemaining || [];

            updatedCriterion.push(chosenCriterion);
            updatedUnpickedCriterion.push(unpickedCriterion);
            score = score - sumArray(updatedScore);
            updatedScore.push(score);
            updatedTimeTaken.push(timeTaken);
            updatedLivesRemaining.push(livesRemaining);

            db.collection("users").doc(userId).set({
                questionCriterion: updatedCriterion,
                unpickedCriterion: updatedUnpickedCriterion,
                score: updatedScore,
                timeTaken: updatedTimeTaken,
                livesRemaining: updatedLivesRemaining
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
    startStop();
    document.getElementById('submit-line-number').style.pointerEvents="auto";
    document.getElementById('game-hint-button').style.pointerEvents="auto";

    if (document.getElementById("hide-starting-instructions").checked) {
        sessionStorage.setItem('start-dont-show', 'true');
    }
}