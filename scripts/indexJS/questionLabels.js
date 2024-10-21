var button1 = document.getElementById('button1');
button1.innerText = data[chosenButtonValues[0]]['Criterion'];

var button2 = document.getElementById('button2');
button2.innerText = data[chosenButtonValues[1]]['Criterion'];

var button3 = document.getElementById('button3');
button3.innerText = data[chosenButtonValues[2]]['Criterion'];

var button4 = document.getElementById('button4');
button4.innerText = data[chosenButtonValues[3]]['Criterion'];

var button5 = document.getElementById('button5');
button5.innerText = data[chosenButtonValues[4]]['Criterion'];

var button6 = document.getElementById('button6');
button6.innerText = data[chosenButtonValues[5]]['Criterion'];

var button7 = document.getElementById('button7');
button7.innerText = data[chosenButtonValues[6]]['Criterion'];

var button8 = document.getElementById('button8');
button8.innerText = data[chosenButtonValues[7]]['Criterion'];

var button9 = document.getElementById('button9');
button9.innerText = data[chosenButtonValues[8]]['Criterion'];

var button10 = document.getElementById('button10');
button10.innerText = data[chosenButtonValues[9]]['Criterion'];

var hintedCriteria = [];
var currentScore = parseInt(sessionStorage.getItem('score'));

if(parseInt(sessionStorage.getItem('question-number')) == 10){
    document.getElementById('question-final-modal').innerHTML = 
    `<div class="modal-header">
        <h1 class="modal-title fs-5" id="endResultsLabel">Question Criterion:</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onclick="playAgainUpdateDB();"></button>
    </div>
    <div class="modal-body" style="display: flex; flex-wrap: wrap; overflow: scroll; height: 70vh;">
        <ol style="font-size: x-large; width: 100%;" id="question-criteria-results">
        </ol>
    </div>
    <div class="modal-footer">
        <a href="./Images/WCAG Level A.pdf" download="WCAG_LevelA_Criteria.pdf" style="margin-left: 20px;">
            <button type="button" class="btn btn-primary">Download WCAG Criteria (Level A)</button>
        </a>
        <button type="button" class="btn btn-primary" onclick="playAgainUpdateDB()">Play Again</button>
    </div>`;
}

if(parseInt(sessionStorage.getItem('question-number')) == 6 && sessionStorage.getItem('checkpoint-5') == 'false'){
    window.location.href = './checkpoint.html';
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
                finalScore: currentScore,
                totalTimeTaken: document.getElementById('clock').textContent,
                livesRemaining: updatedLivesRemaining,
                hintedCriteriaList: updatedhintedCriteriaList,
                correctlyAnswered: updatedCorrectlyAnswered
            }, { merge: true })
            .then(function() {
                console.log("Document successfully updated!");
                document.getElementById('spinner-circle').style.display = 'none';
                sessionStorage.setItem('score', currentScore);
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
document.getElementById('score-text').innerText = "Score: " + currentScore;
document.getElementById('criterions-remaining-label-text').innerText = "Bugs To Hunt: " + remaining;

var disabledCheckpoint = 
`<button type="button" class="btn btn-outline-warning question-label" style="font-size: x-large;">
    &#128274;
</button>`;

var abledCheckpoint = 
`<button type="button" class="btn btn-outline-warning question-label" style="font-size: x-large;">
    &#128275;
</button>`;

for(var i = 1; i < parseInt(sessionStorage.getItem('question-number')); i++){
    if(correctQuestions.includes(i)){
        s += '<button type="button" class="btn btn-success question-label" id="question-label-1" tabindex="-1" style="font-size: x-large;" disabled>' + i +'<span>&#10003;</span></button>';
    } else {
        s += '<button type="button" class="btn btn-danger question-label" id="question-label-1" tabindex="-1" style="font-size: x-large;" disabled>' + i +'<span>&#10007;</span></button>';
    }

    if (i == 5 || i == 10) {
        if(i > parseInt(sessionStorage.getItem('question-number'))){
            s += disabledCheckpoint;
        } else {
            s += abledCheckpoint;
        }
        
    }
}

s += '<button type="button" class="btn btn-warning question-label" id="question-label-1" tabindex="-1" style="font-size: x-large;">' + parseInt(sessionStorage.getItem('question-number')) +'</button>';
if(i == 10 || i == 5){
    s += disabledCheckpoint;
}

for(var i = parseInt(sessionStorage.getItem('question-number')) + 1; i <= 10; i++){
    s += '<button type="button" class="btn btn-outline-primary question-label" id="question-label-1" tabindex="-1" style="font-size: x-large;" disabled>' + i +'</button>';
    if (i == 5 || i == 10) {
        s += disabledCheckpoint;
    }
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
    confettiAnimation();
}

function onIncorrectQuestionComplete(){
    if(parseInt(sessionStorage.getItem('question-number')) == 10){
        sessionStorage.removeItem('user-id');
    }
    sessionStorage.setItem('question-number', parseInt(sessionStorage.getItem('question-number')) + 1);
    document.getElementById('modalOpenButton').click();
    sessionStorage.setItem('timer', document.getElementById("clock").textContent);
    stop = true;
    shakeScreen();
}

function onScoreIncrease(){
    document.getElementById('score-text').innerText = "Score: " + currentScore;
}

var result = "";

for(var i = 0; i < chosenIncorrectCriterion.length; i++) {
    var incorrectText = data[chosenIncorrectCriterion[i]]["Incorrect"].replace(new RegExp('<', 'g'), '&lt;').replace(new RegExp('>', 'g'), '&gt;');
    var correctText = data[chosenIncorrectCriterion[i]]["Correct"].replace(new RegExp('<', 'g'), '&lt;').replace(new RegExp('>', 'g'), '&gt;');
    var cr = data[[chosenIncorrectCriterion[i]]]['Criterion'];
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