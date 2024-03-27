function onCorrectQuestionComplete(){
    sessionStorage.setItem('question-number', parseInt(sessionStorage.getItem('question-number')) + 1);
    location.reload();
}

function onIncorrectQuestionComplete(){
    sessionStorage.setItem('question-number', parseInt(sessionStorage.getItem('question-number')) + 1);
}

function onScoreIncrease(){
    document.getElementById('score-text').innerText = "Score: " + sessionStorage.getItem('score');
}

