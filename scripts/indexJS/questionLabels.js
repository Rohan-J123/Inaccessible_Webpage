var s = "";
correctQuestions = JSON.parse(sessionStorage.getItem('correct-questions'));

document.getElementById('question-label-text').innerText = "Question: " + sessionStorage.getItem('question-number');
document.getElementById('score-text').innerText = "Score: " + sessionStorage.getItem('score');
document.getElementById('criterions-remaining-label-text').innerText = "Criteria Left: " + remaining;

for(var i = 1; i < parseInt(sessionStorage.getItem('question-number')); i++){
    if(correctQuestions.includes(i)){
        s += '<button type="button" class="btn btn-success question-label" id="question-label-1" tabindex="-1">' + i +'<span>&#10003;</span></button>';
    } else {
        s += '<button type="button" class="btn btn-danger question-label" id="question-label-1" tabindex="-1">' + i +'<span>&#10007;</span></button>';
    }
}

s += '<button type="button" class="btn btn-warning question-label" id="question-label-1" tabindex="-1">' + parseInt(sessionStorage.getItem('question-number')) +'</button>';

for(var i = parseInt(sessionStorage.getItem('question-number')) + 1; i <= 10; i++){
    s += '<button type="button" class="btn btn-outline-primary question-label" id="question-label-1" tabindex="-1">' + i +'</button>';
}

document.getElementById('question-label-container').innerHTML = s;


function onCorrectQuestionComplete(){
    currentQuestionNumber = parseInt(sessionStorage.getItem('question-number'));
    sessionStorage.setItem('question-number', currentQuestionNumber + 1);
    correctQuesions = JSON.parse(sessionStorage.getItem('correct-questions'));
    correctQuesions.push(currentQuestionNumber);
    sessionStorage.setItem('correct-questions', JSON.stringify(correctQuesions));
    document.getElementById('modalOpenButton').click();
}

function onIncorrectQuestionComplete(){
    sessionStorage.setItem('question-number', parseInt(sessionStorage.getItem('question-number')) + 1);
    document.getElementById('modalOpenButton').click();
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
    <h5>Criterion: ${cr}</h5>
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

