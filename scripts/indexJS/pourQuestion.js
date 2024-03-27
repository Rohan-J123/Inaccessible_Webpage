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
    var codeBlock = document.getElementById('code');
    var currentLine = codeBlock.textContent.trim().split('\n')[lineNumber-1];

    for(var i = 0; i < 26; i++){
        var lines = data[i][0].trim().split('\n')[0];
        var searchStringLine = currentLine.trim();
        var lineNumber = -1;

        if(lines == searchStringLine){
            return i;
        }
    }
    return -1;
} 

function onCorrectPour(){
    var inner = 
    `<h3 style="font-family: 'Times New Roman', Times, serif; text-align: center;">Congratulations!</h3>
    <div  style="font-size: large; text-align: center;">Bonus questions have no penalties so feel free to choose the option that feels right. Correct answer increases the number of bars.</div>
    <div style="display: flex; font-size: x-large;">
        <button type="button" class="btn btn-outline-warning" style="flex: 1; margin-right: 1vw; font-size: x-large; height: 50px; margin-top: 20px; margin-left: 1vw;" onclick="document.getElementById('goToPart3').click();">BONUS</button>
        <button type="button" class="btn btn-outline-primary" style="flex: 1; margin-right: 1vw; font-size: x-large; height: 50px; margin-top: 20px; margin-left: 1vw;" onclick="document.getElementById('goToPart1').click(); document.getElementById('sidebar-line').innerText = '';">SKIP</button>
    </div>`;
    document.getElementById('part2Result').innerHTML = inner;
    sessionStorage.setItem('score', parseInt(sessionStorage.getItem('score')) + 20);
    onScoreIncrease();
    remaining -= 1;
    document.getElementById('criterions-remaining-label-text').innerText = "Criteria Left: " + remaining;
}

function onCorrectPourButQuestionComplete(){
    var inner = 
    `<h3 style="font-family: 'Times New Roman', Times, serif; text-align: center;">Congratulations!</h3>
    <div  style="font-size: large; text-align: center;">Bonus questions have no penalties so feel free to choose the option that feels right. Correct answer increases the number of bars.</div>
    <div style="display: flex; font-size: x-large;">
        <button type="button" class="btn btn-outline-warning" style="flex: 1; margin-right: 1vw; font-size: x-large; height: 50px; margin-top: 20px; margin-left: 1vw;" onclick="document.getElementById('goToPart3').click();">BONUS</button>
        <button type="button" class="btn btn-outline-info" style="flex: 1; margin-right: 1vw; font-size: x-large; height: 50px; margin-top: 20px; margin-left: 1vw;" onclick="onCorrectQuestionComplete()">NEXT</button>
    </div>`;
    document.getElementById('part2Result').innerHTML = inner;
    sessionStorage.setItem('score', parseInt(sessionStorage.getItem('score')) + 20);
    onScoreIncrease();
    remaining -= 1;
    document.getElementById('criterions-remaining-label-text').innerText = "Criteria Left: " + remaining;
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