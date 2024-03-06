function onSubmitCriterionQuestion(id){
    var criterionClicked = document.getElementById(id).innerText.split(" ")[1];
    var currentLineNumber = sessionStorage.getItem('currentLineNumber');

    var criterionSelected = successCriterionLabels[onFindingCriterion(currentLineNumber)].split(" ")[1];

    if(criterionSelected == criterionClicked){
        onCorrectCriterion();
    } else {
        onWrongCriterion();
    }
    document.getElementById('goToPart3Result').click();
}

function onCorrectCriterion(){
    var inner = 
    `<h3 style="font-family: 'Times New Roman', Times, serif; text-align: center;">Congratulations!</h3>
    <div  style="font-size: large; text-align: center;">Correct Answer</div>
    <div style="display: flex; font-size: x-large;">
        <button id="submit-line-number" type="button" class="btn btn-outline-warning" style="flex: 1; margin-right: 1vw; font-size: x-large; height: 50px; margin-top: 20px; margin-left: 1vw;" onclick="document.getElementById('goToPart1').click(); document.getElementById('sidebar-line').innerText = '';">BACK</button>
    </div>`;
    document.getElementById('part3Result').innerHTML = inner;
    increaseBar();
}

function onWrongCriterion(){
    var inner = 
    `<h3 style="font-family: 'Times New Roman', Times, serif; text-align: center;">Sorry!</h3>
    <div  style="font-size: large; text-align: center;">Wrong Answer</div>
    <div style="display: flex; font-size: x-large;">
        <button id="submit-line-number" type="button" class="btn btn-outline-danger" style="flex: 1; margin-right: 1vw; font-size: x-large; height: 50px; margin-top: 20px; margin-left: 1vw;" onclick="document.getElementById('goToPart3').click()">BACK</button>
    </div>`;
    document.getElementById('part3Result').innerHTML = inner;
}