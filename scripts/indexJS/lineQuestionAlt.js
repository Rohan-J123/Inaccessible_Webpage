var incorrectLineNumbers = JSON.parse(sessionStorage.getItem("correct-line-numbers"));
var correctLineNumbers = JSON.parse(sessionStorage.getItem("actually-correct-line-numbers"));

var chosenCriterionAll = JSON.parse(sessionStorage.getItem("chosenCriterionAll"));
var chosenCriterionActuallyCorrect = JSON.parse(sessionStorage.getItem("chosenCriterion-actually-correct"));

var divisions = [];
var divisionsIncorrect = [];

for(var i = 0; i < chosenCriterionAll.length; i++){
    var d = data[chosenCriterionAll[i]]["Incorrect"];
    var lengthOfCriterion = countSubstringOccurrences(d, '\n');
    var startEndOfCriterion = [parseInt(incorrectLineNumbers[i]), parseInt(incorrectLineNumbers[i]) + lengthOfCriterion];
    
    divisions.push(startEndOfCriterion);
    divisionsIncorrect.push(startEndOfCriterion);
}

for(var i = 0; i < chosenCriterionActuallyCorrect.length; i++){
    var d = data[chosenCriterionActuallyCorrect[i]]["Correct"];
    var lengthOfCriterion = countSubstringOccurrences(d, '\n');
    var startEndOfCriterion = [parseInt(correctLineNumbers[i]), parseInt(correctLineNumbers[i]) + lengthOfCriterion];
    
    divisions.push(startEndOfCriterion);
}

divisions.sort((a, b) => a[0] - b[0]);
divisionsIncorrect.sort((a, b) => a[0] - b[0]);

var currentLIndex = 0;
if(divisions[currentLIndex % divisions.length][0] == divisions[currentLIndex % divisions.length][1]){
    document.getElementById("lineInput").innerHTML = divisions[currentLIndex % divisions.length][0];
} else {
    document.getElementById("lineInput").innerHTML = String(divisions[currentLIndex % divisions.length][0]) + " - " + String(divisions[currentLIndex % divisions.length][1]);
}

function nextLineIndex(){
    currentLIndex += 1;

    if(divisions[currentLIndex % divisions.length][0] == divisions[currentLIndex % divisions.length][1]){
        document.getElementById("lineInput").innerHTML = divisions[currentLIndex % divisions.length][0];
    } else {
        document.getElementById("lineInput").innerHTML = String(divisions[currentLIndex % divisions.length][0]) + " - " + String(divisions[currentLIndex % divisions.length][1]);
    }
}

function previousLineIndex(){
    currentLIndex -= 1;
    if(currentLIndex < 0){
        currentLIndex = divisions.length - 1;
    }
    
    if(divisions[currentLIndex % divisions.length][0] == divisions[currentLIndex % divisions.length][1]){
        document.getElementById("lineInput").innerHTML = divisions[currentLIndex % divisions.length][0];
    } else {
        document.getElementById("lineInput").innerHTML = String(divisions[currentLIndex % divisions.length][0]) + " - " + String(divisions[currentLIndex % divisions.length][1]);
    }
}

function searchCriterion(lineNumber){
    for(var i = 0; i < divisions.length; i++){
        if(divisions[i][0] == lineNumber){
            currentLIndex = i;
        }
    }
    
    if(divisions[currentLIndex % divisions.length][0] == divisions[currentLIndex % divisions.length][1]){
        document.getElementById("lineInput").innerHTML = divisions[currentLIndex % divisions.length][0];
    } else {
        document.getElementById("lineInput").innerHTML = String(divisions[currentLIndex % divisions.length][0]) + " - " + String(divisions[currentLIndex % divisions.length][1]);
    }
}