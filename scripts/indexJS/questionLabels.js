var s = "";
correctQuestions = JSON.parse(sessionStorage.getItem('correct-questions'));

document.getElementById('question-label-text').innerText = "Question: " + sessionStorage.getItem('question-number');
document.getElementById('score-text').innerText = "Score: " + sessionStorage.getItem('score');
document.getElementById('criterions-remaining-label-text').innerText = "Criteria Left: " + remaining;

for(var i = 1; i < parseInt(sessionStorage.getItem('question-number')); i++){
    if(correctQuestions.includes(i)){
        s += '<button type="button" class="btn btn-success question-label" id="question-label-1" tabindex="-1">' + i +'</button>';
    } else {
        s += '<button type="button" class="btn btn-danger question-label" id="question-label-1" tabindex="-1">' + i +'</button>';
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
    location.reload();
}

function onIncorrectQuestionComplete(){
    sessionStorage.setItem('question-number', parseInt(sessionStorage.getItem('question-number')) + 1);
    location.reload();
}

function onScoreIncrease(){
    document.getElementById('score-text').innerText = "Score: " + sessionStorage.getItem('score');
}

