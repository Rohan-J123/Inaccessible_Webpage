function onSubmitPourQuestion(id){
    var currentLineNumber = sessionStorage.getItem('currentLineNumber');

    var criterionSelected = data[[onFindingCriterion(currentLineNumber)]]['Criterion'].split(" ")[1];
    var criterionPour = criterionSelected.split('.')[0];

    if(criterionLeftToIdentify.length != 1){
        if(criterionPour == 1 && id == 'button-perceivable' ){
            criterionLeftToIdentify = criterionLeftToIdentify.filter(item => item !== onFindingCriterion(currentLineNumber));
            onCorrectPour();
        } else if(criterionPour == 2 && id == 'button-operable' ){
            criterionLeftToIdentify = criterionLeftToIdentify.filter(item => item !== onFindingCriterion(currentLineNumber));
            onCorrectPour();
        } else if(criterionPour == 3 && id == 'button-understandable' ){
            criterionLeftToIdentify = criterionLeftToIdentify.filter(item => item !== onFindingCriterion(currentLineNumber));
            onCorrectPour();
        } else if(criterionPour == 4 && id == 'button-robost' ){
            criterionLeftToIdentify = criterionLeftToIdentify.filter(item => item !== onFindingCriterion(currentLineNumber));
            onCorrectPour();
        } else {
            onWrongPour();
            shakeElement(document.getElementById("carouselExampleIndicators"));
        }
    } else {
        if(criterionPour == 1 && id == 'button-perceivable' ){
            criterionLeftToIdentify = criterionLeftToIdentify.filter(item => item !== onFindingCriterion(currentLineNumber));
            onCorrectPourButQuestionComplete();
        } else if(criterionPour == 2 && id == 'button-operable' ){
            criterionLeftToIdentify = criterionLeftToIdentify.filter(item => item !== onFindingCriterion(currentLineNumber));
            onCorrectPourButQuestionComplete();
        } else if(criterionPour == 3 && id == 'button-understandable' ){
            criterionLeftToIdentify = criterionLeftToIdentify.filter(item => item !== onFindingCriterion(currentLineNumber));
            onCorrectPourButQuestionComplete();
        } else if(criterionPour == 4 && id == 'button-robost' ){
            criterionLeftToIdentify = criterionLeftToIdentify.filter(item => item !== onFindingCriterion(currentLineNumber));
            onCorrectPourButQuestionComplete();
        } else {
            onWrongPour();
            shakeElement(document.getElementById("carouselExampleIndicators"));
        }
    }

    document.getElementById('goToPart2Result').click();
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
    currentScore = currentScore + 30;
    onScoreIncrease();
    remaining -= 1;
    document.getElementById('criterions-remaining-label-text').innerText = "Bugs To Hunt: " + remaining;
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
    currentScore = currentScore + 30;
    onScoreIncrease();
    remaining -= 1;
    document.getElementById('criterions-remaining-label-text').innerText = "Bugs To Hunt: " + remaining;
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