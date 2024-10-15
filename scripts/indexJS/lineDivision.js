var divisions = [];
var divisionsIncorrect = [];

for(var i = 0; i < chosenIncorrectCriterion .length; i++){
    var d = data[chosenIncorrectCriterion[i]]["Incorrect"];
    var lengthOfCriterion = countSubstringOccurrences(d, '\n');
    var startEndOfCriterion = [parseInt(incorrectCriterionLineNumbers[i]), parseInt(incorrectCriterionLineNumbers[i]) + lengthOfCriterion];
    
    divisions.push(startEndOfCriterion);
    divisionsIncorrect.push(startEndOfCriterion);
}

for(var i = 0; i < chosenCorrectCriterion.length; i++){
    var d = data[chosenCorrectCriterion[i]]["Correct"];
    var lengthOfCriterion = countSubstringOccurrences(d, '\n');
    var startEndOfCriterion = [parseInt(correctCriterionLineNumbers[i]), parseInt(correctCriterionLineNumbers[i]) + lengthOfCriterion];
    
    divisions.push(startEndOfCriterion);
}

console.log(chosenIncorrectCriterion);
console.log(chosenCorrectCriterion);

console.log(divisions);
console.log(divisionsIncorrect);

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