function onSubmitCriterionQuestion(id){
    var criterionClicked = document.getElementById(id).innerText.split(" ")[1];
    var currentLineNumber = sessionStorage.getItem('currentLineNumber');

    var criterionSelected = data[[onFindingCriterion(currentLineNumber)]]['Criterion'].split(" ")[1];

    var chosenCriterion = JSON.parse(sessionStorage.getItem('chosenCriterion'));
   
    if(chosenCriterion.length != 0){
        if(criterionSelected == criterionClicked){
            onCorrectCriterion();
        } else {
            onWrongCriterion();
            shakeElement(document.getElementById("carouselExampleIndicators"));
        }
    } else {
        if(criterionSelected == criterionClicked){
            onCorrectCriterionButQuestionComplete();
        } else {
            onWrongCriterionButQuestionComplete();
            shakeElement(document.getElementById("carouselExampleIndicators"));
        }
    }
    document.getElementById('goToPart3Result').click();
}

function onCorrectCriterion(){
    var inner = 
    `<h3 style="font-family: 'Times New Roman', Times, serif; text-align: center;">Congratulations!</h3>
    <div  style="font-size: large; text-align: center;">Correct Answer</div>
    <div style="display: flex; font-size: x-large;">
        <button id="submit-line-number" type="button" class="btn btn-outline-warning" style="flex: 1; margin-right: 1vw; font-size: x-large; height: 50px; margin-top: 20px; margin-left: 1vw;" onclick="document.getElementById('goToPart1').click(); document.getElementById('sidebar-line').innerText = ''; if(hintedCriteria.includes(onFindingCriterion(sessionStorage.getItem('currentLineNumber')))){document.getElementById('game-hint-button').disabled = false;}">BACK</button>
    </div>`;
    document.getElementById('part3Result').innerHTML = inner;
    increaseBar();
    sessionStorage.setItem('score', parseInt(sessionStorage.getItem('score')) + 50);
    onScoreIncrease();
}

function onCorrectCriterionButQuestionComplete(){
    var inner = 
    `<h3 style="font-family: 'Times New Roman', Times, serif; text-align: center;">Congratulations!</h3>
    <div  style="font-size: large; text-align: center;">Correct Answer</div>
    <div style="display: flex; font-size: x-large;">
        <button id="submit-line-number" type="button" class="btn btn-outline-info" style="flex: 1; margin-right: 1vw; font-size: x-large; height: 50px; margin-top: 20px; margin-left: 1vw;" onclick="onCorrectQuestionComplete()">NEXT</button>
    </div>`;
    document.getElementById('part3Result').innerHTML = inner;
    increaseBar();
    sessionStorage.setItem('score', parseInt(sessionStorage.getItem('score')) + 50);
    onScoreIncrease();
}

function onWrongCriterion(){
    var inner = 
    `<h3 style="font-family: 'Times New Roman', Times, serif; text-align: center;">Sorry!</h3>
    <div  style="font-size: large; text-align: center;">Wrong Answer</div>
    <div style="display: flex; font-size: x-large;">
        <button type="button" class="btn btn-outline-danger" style="flex: 1; margin-right: 1vw; font-size: x-large; height: 50px; margin-top: 20px; margin-left: 1vw;" onclick="document.getElementById('goToPart3').click()" id="submit-line-number">BACK</button>
        <button type="button" class="btn btn-outline-primary" style="flex: 1; margin-right: 1vw; font-size: x-large; height: 50px; margin-top: 20px; margin-left: 1vw;" onclick="document.getElementById('goToPart1').click(); document.getElementById('sidebar-line').innerText = ''; if(hintedCriteria.includes(onFindingCriterion(sessionStorage.getItem('currentLineNumber')))){document.getElementById('game-hint-button').disabled = false;}">SKIP</button>
    </div>`;
    document.getElementById('part3Result').innerHTML = inner;
}

function onWrongCriterionButQuestionComplete(){
    var inner = 
    `<h3 style="font-family: 'Times New Roman', Times, serif; text-align: center;">Sorry!</h3>
    <div  style="font-size: large; text-align: center;">Wrong Answer</div>
    <div style="display: flex; font-size: x-large;">
        <button type="button" class="btn btn-outline-danger" style="flex: 1; margin-right: 1vw; font-size: x-large; height: 50px; margin-top: 20px; margin-left: 1vw;" onclick="document.getElementById('goToPart3').click()" id="submit-line-number">BACK</button>
        <button type="button" class="btn btn-outline-info" style="flex: 1; margin-right: 1vw; font-size: x-large; height: 50px; margin-top: 20px; margin-left: 1vw;" onclick="onCorrectQuestionComplete()">NEXT</button>
    </div>`;
    document.getElementById('part3Result').innerHTML = inner;
}