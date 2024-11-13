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

function finalDB(){
    var gameID = sessionStorage.getItem('game-id');

    if (!gameID) {
        console.error("Game ID not found in sessionStorage");
        return;
    }
    document.getElementById('spinner-circle').style.display = 'block';

    async function finalGameData(gameID) {
        try {
            const data = {
                id: gameID,
                finalScore: currentScore,
                totalTimeTaken: document.getElementById('clock').textContent
            };
    
            const response = await fetch(`${cloudURL}/addDocumentData?collectionName=${collectionName}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
    
            if (!response.ok) {
                throw new Error('Failed to update document');
            }
    
            const result = await response.json();
            console.log("Document successfully updated!");
            document.getElementById('spinner-circle').style.display = 'none';
            window.location.href = './checkpoint.html';
        } catch (error) {
            console.error('Error updating document:', error);
        }
    }

    finalGameData(sessionStorage.getItem('game-id'));
}

if(parseInt(sessionStorage.getItem('question-number')) == 6 && sessionStorage.getItem('checkpoint-5') == 'false'){
    window.location.href = './checkpoint.html';
}

if(parseInt(sessionStorage.getItem('question-number')) > 10 && sessionStorage.getItem('checkpoint-10') == 'false'){
    finalDB();
}

if(parseInt(sessionStorage.getItem('question-number')) > 10 && sessionStorage.getItem('checkpoint-10') == 'true'){
    window.location.href = './index.html';
}

var gameID = sessionStorage.getItem('game-id');

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