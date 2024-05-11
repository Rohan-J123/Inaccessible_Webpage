function onSubmitPourQuestion(id){
    var pourClicked = document.getElementById(id).value;
    var currentLineNumber = sessionStorage.getItem('currentLineNumber');

    var criterionSelected = successCriterionLabels[onFindingCriterion(currentLineNumber)].split(" ")[1];
    var criterionPour = criterionSelected.split('.')[0];

    var chosenCriterion = JSON.parse(sessionStorage.getItem('chosenCriterion'));
    chosenCriterion = chosenCriterion.filter(item => item !== onFindingCriterion(currentLineNumber));
    sessionStorage.setItem('chosenCriterion', JSON.stringify(chosenCriterion));

    if(chosenCriterion.length != 0){
        if(criterionPour == 1 && id == 'button-perceivable' ){
            onCorrectPour();
        } else if(criterionPour == 2 && id == 'button-operable' ){
            onCorrectPour();
        } else if(criterionPour == 3 && id == 'button-understandable' ){
            onCorrectPour();
        } else if(criterionPour == 4 && id == 'button-robost' ){
            onCorrectPour();
        } else {
            onWrongPour();
        }
    } else {
        if(criterionPour == 1 && id == 'button-perceivable' ){
            onCorrectPourButQuestionComplete();
        } else if(criterionPour == 2 && id == 'button-operable' ){
            onCorrectPourButQuestionComplete();
        } else if(criterionPour == 3 && id == 'button-understandable' ){
            onCorrectPourButQuestionComplete();
        } else if(criterionPour == 4 && id == 'button-robost' ){
            onCorrectPourButQuestionComplete();
        } else {
            onWrongPour();
        }
    }

    document.getElementById('goToPart2Result').click();
}

function onFindingCriterion(lineNumber){
    var validLineNumbers = JSON.parse(sessionStorage.getItem('correct-line-numbers'));
    var chosenCriterionAll = JSON.parse(sessionStorage.getItem('chosenCriterionAll'));

    if(validLineNumbers.includes(parseInt(lineNumber))){
        return chosenCriterionAll[validLineNumbers.indexOf(parseInt(lineNumber))];
    } else {
        return -1;
    }
} 

function onCorrectPour(){
    var inner = 
    `<h3 style="font-family: 'Times New Roman', Times, serif; text-align: center;">Congratulations!</h3>
    <div  style="font-size: large; text-align: center;">Bonus questions have no penalties so feel free to choose the option that feels right. Correct answer refills the Wifi strength and also fetches you 50 extra points.</div>
    <div style="display: flex; font-size: x-large;">
        <button type="button" class="btn btn-outline-warning" style="flex: 1; margin-right: 1vw; font-size: x-large; height: 50px; margin-top: 20px; margin-left: 1vw;" onclick="document.getElementById('goToPart3').click();">BONUS</button>
        <button type="button" class="btn btn-outline-primary" style="flex: 1; margin-right: 1vw; font-size: x-large; height: 50px; margin-top: 20px; margin-left: 1vw;" onclick="document.getElementById('goToPart1').click(); document.getElementById('sidebar-line').innerText = ''; if(hintedCriteria.includes(onFindingCriterion(sessionStorage.getItem('currentLineNumber')))){document.getElementById('game-hint-button').disabled = false;}">SKIP</button>
    </div>`;
    document.getElementById('part2Result').innerHTML = inner;
    sessionStorage.setItem('score', parseInt(sessionStorage.getItem('score')) + 30);
    onScoreIncrease();
    remaining -= 1;
    document.getElementById('criterions-remaining-label-text').innerText = "Criteria Left: " + remaining;
    document.getElementById('criteria-mainbar-label').innerText = document.getElementById('criterions-remaining-label-text').innerText;
}

document.getElementById('criteria-mainbar-label').innerText = document.getElementById('criterions-remaining-label-text').innerText;

function onCorrectPourButQuestionComplete(){
    var inner = 
    `<h3 style="font-family: 'Times New Roman', Times, serif; text-align: center;">Congratulations!</h3>
    <div  style="font-size: large; text-align: center;">Bonus questions have no penalties so feel free to choose the option that feels right. Correct answer refills the Wifi strength and also fetches you 50 extra points.</div>
    <div style="display: flex; font-size: x-large;">
        <button type="button" class="btn btn-outline-warning" style="flex: 1; margin-right: 1vw; font-size: x-large; height: 50px; margin-top: 20px; margin-left: 1vw;" onclick="document.getElementById('goToPart3').click();">BONUS</button>
        <button type="button" class="btn btn-outline-info" style="flex: 1; margin-right: 1vw; font-size: x-large; height: 50px; margin-top: 20px; margin-left: 1vw;" onclick="onCorrectQuestionComplete()">NEXT</button>
    </div>`;
    document.getElementById('part2Result').innerHTML = inner;
    sessionStorage.setItem('score', parseInt(sessionStorage.getItem('score')) + 30);
    onScoreIncrease();
    remaining -= 1;
    document.getElementById('criterions-remaining-label-text').innerText = "Criteria Left: " + remaining;
    document.getElementById('criteria-mainbar-label').innerText = document.getElementById('criterions-remaining-label-text').innerText;
}

function onWrongPour(){
    var inner = 
    `<h3 style="font-family: 'Times New Roman', Times, serif; text-align: center;">Sorry!</h3>
    <div  style="font-size: large; text-align: center;">Wrong Answer!</div>
    <div style="display: flex; font-size: x-large;">
        <button type="button" class="btn btn-outline-danger" style="flex: 1; margin-right: 1vw; font-size: x-large; height: 50px; margin-top: 20px; margin-left: 1vw;" onclick="document.getElementById('goToPart2').click();">BACK</button>
    </div>`;
    document.getElementById('part2Result').innerHTML = inner;
    reduceBar();
}