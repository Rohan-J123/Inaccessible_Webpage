function onFindingCriterion(lineNumber){
    if(incorrectCriterionLineNumbers.includes(parseInt(lineNumber))){
        return chosenIncorrectCriterion[incorrectCriterionLineNumbers.indexOf(parseInt(lineNumber))];
    } else {
        return -1;
    }
} 

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

function numberOfLinesInTheCriterion(i){
    var d = data[i]["Incorrect"];
    return countSubstringOccurrences(d, '\n');
}

function onSubmitLineNumber(){
    var lineNumber = String(document.getElementById('lineInput').innerHTML.split(" ")[0]);

    if(chosenIncorrectCriterion.includes(onFindingCriterion(lineNumber)) && !criterionLeftToIdentify.includes(onFindingCriterion(lineNumber))){
        alert("Criterion has previously been selected!");
        return;
    }

    if(incorrectCriterionLineNumbers.includes(parseInt(lineNumber))){
        var inner = 
        `<h3 style="font-family: 'Times New Roman', Times, serif; text-align: center;">Congratulations!</h3>
        <div  style="font-size: large; text-align: center;">Correct Answer!</div>
        <div style="display: flex; font-size: x-large;">
            <button id="submit-line-number" type="button" class="btn btn-outline-warning" style="flex: 1; margin-right: 1vw; font-size: x-large; height: 50px; margin-top: 20px; margin-left: 1vw;" onclick="document.getElementById('goToPart2').click();">NEXT QUESTION</button>
        </div> `;
        document.getElementById('part1Result').innerHTML = inner;
        document.getElementById('sidebar-line').innerText = data[onFindingCriterion(lineNumber)]["Incorrect"];

        if(numberOfLinesInTheCriterion(onFindingCriterion(lineNumber)) != 0){
            document.getElementById('part-2-title').innerText = `In Correspondence To WCAG Level A, Which Principle Do The Lines ` + lineNumber + `-`+ (parseInt(lineNumber) + numberOfLinesInTheCriterion(onFindingCriterion(lineNumber))) +` Defy?`;
            document.getElementById('part-3-title').innerText = `In Correspondence To WCAG Level A, Which Accessibility Criteria Do The Lines ` + lineNumber + `-`+ (parseInt(lineNumber) + numberOfLinesInTheCriterion(onFindingCriterion(lineNumber))) +` Defy?`;
        }
        else {
            document.getElementById('part-2-title').innerText = `In Correspondence To WCAG Level A, Which Principle Does The Line ` + lineNumber +` Defy?`;
            document.getElementById('part-3-title').innerText = `In Correspondence To WCAG Level A, Which Accessibility Criteria Does The Line ` + lineNumber +` Defy?`;
        }
        
        sessionStorage.setItem('currentLineNumber', parseInt(lineNumber));
        currentScore = currentScore + 20;
        onScoreIncrease();

        var numberOfLinesToBeReplaced = '';
        for(let i = 0; i <= numberOfLinesInTheCriterion(onFindingCriterion(lineNumber)); i++){
            numberOfLinesToBeReplaced += ((parseInt(lineNumber) + i).toString() + '. ');
        }
        document.getElementById('line-numbers').innerHTML = document.getElementById('line-numbers').innerHTML.replace(numberOfLinesToBeReplaced, `<span style="color: rgb(255, 54, 54);">` + numberOfLinesToBeReplaced.replaceAll('.', '*.') + `</span>`)
    } else {
        var inner = 
        `<h3 style="font-family: 'Times New Roman', Times, serif; text-align: center;">Sorry!</h3>
        <div  style="font-size: large; text-align: center;">Wrong Answer!</div>
        <div style="display: flex; font-size: x-large;">
            <button id="submit-line-number" type="button" class="btn btn-outline-danger" style="flex: 1; margin-right: 1vw; font-size: x-large; height: 50px; margin-top: 20px; margin-left: 1vw;" onclick="document.getElementById('goToPart1').click();">BACK</button>
        </div> `;
        document.getElementById('part1Result').innerHTML = inner;
        reduceBar();
        shakeElement(document.getElementById("carouselExampleIndicators"));
    }
    document.getElementById('goToPart1Result').click();

    searchCriterion(divisions[0][0]);
}

function reduceBar(){
    let fullBar = "FullBar";
    let threeBar = "ThreeBar";
    let twoBar = "TwoBar";
    let oneBar = "OneBar";

    var imageType = document.getElementById('wifiImageMain').src;
    if (imageType.indexOf(fullBar) !== -1) {
        document.getElementById('wifiImageMain').src = "./Images/WifiThreeBar.png";
        document.getElementById('wifiImageMain').alt = "Wifi Three Bars Mainbar";
    } else if (imageType.indexOf(threeBar) !== -1) {
        document.getElementById('wifiImageMain').src = "./Images/WifiTwoBar.png";
        document.getElementById('wifiImageMain').alt = "Wifi Two Bars Mainbar";
    } else if (imageType.indexOf(twoBar) !== -1) {
        document.getElementById('wifiImageMain').src = "./Images/WifiOneBar.png";
        document.getElementById('wifiImageMain').alt = "Wifi One Bar Mainbar";
    } else if (imageType.indexOf(oneBar) !== -1) {
        document.getElementById('wifiImageMain').src = "./Images/WifiNoBar.png";
        document.getElementById('wifiImageMain').alt = "Wifi No Bars Mainbar";
        onIncorrectQuestionComplete();
    }

    var imageType = document.getElementById('wifiImageSide').src;
    if (imageType.indexOf(fullBar) !== -1) {
        document.getElementById('wifiImageSide').src = "./Images/WifiThreeBar.png";
        document.getElementById('wifi-sidebar-label').innerText = "Three Bars";
        document.getElementById('wifiImageSide').alt = "Wifi Three Bars Mainbar";
    } else if (imageType.indexOf(threeBar) !== -1) {
        document.getElementById('wifiImageSide').src = "./Images/WifiTwoBar.png";
        document.getElementById('wifi-sidebar-label').innerText = "Two Bars";
        document.getElementById('wifiImageSide').alt = "Wifi Two Bars Mainbar";
    } else if (imageType.indexOf(twoBar) !== -1) {
        document.getElementById('wifiImageSide').src = "./Images/WifiOneBar.png";
        document.getElementById('wifi-sidebar-label').innerText = "One Bar";
        document.getElementById('wifiImageSide').alt = "Wifi One Bar Mainbar";
    } else if (imageType.indexOf(oneBar) !== -1) {
        document.getElementById('wifiImageSide').src = "./Images/WifiNoBar.png";
        document.getElementById('wifi-sidebar-label').innerText = "Game Over!";
        document.getElementById('wifiImageSide').alt = "Wifi No Bars Mainbar";
    }
    document.getElementById('wifi-mainbar-label').innerText = document.getElementById('wifi-sidebar-label').innerText;
}

function increaseBar(){
    let fullBar = "FullBar";
    let threeBar = "ThreeBar";
    let twoBar = "TwoBar";
    let oneBar = "OneBar";

    var imageType = document.getElementById('wifiImageMain').src;
    if (imageType.indexOf(threeBar) !== -1) {
        document.getElementById('wifiImageMain').src = "./Images/WifiFullBar.png";
        document.getElementById('wifiImageMain').alt = "Wifi Full Bars Mainbar";
    } else if (imageType.indexOf(twoBar) !== -1) {
        document.getElementById('wifiImageMain').src = "./Images/WifiThreeBar.png";
        document.getElementById('wifiImageMain').alt = "Wifi Three Bars Mainbar";
    } else if (imageType.indexOf(oneBar) !== -1) {
        document.getElementById('wifiImageMain').src = "./Images/WifiTwoBar.png";
        document.getElementById('wifiImageMain').alt = "Wifi Two Bars Mainbar";
    }

    var imageType = document.getElementById('wifiImageSide').src;
    if (imageType.indexOf(threeBar) !== -1) {
        document.getElementById('wifiImageSide').src = "./Images/WifiFullBar.png";
        document.getElementById('wifi-sidebar-label').innerText = "Four Bars";
        document.getElementById('wifiImageSide').alt = "Wifi Full Bars Mainbar";
    } else if (imageType.indexOf(twoBar) !== -1) {
        document.getElementById('wifiImageSide').src = "./Images/WifiThreeBar.png";
        document.getElementById('wifi-sidebar-label').innerText = "Three Bars";
        document.getElementById('wifiImageSide').alt = "Wifi Three Bars Mainbar";
    } else if (imageType.indexOf(oneBar) !== -1) {
        document.getElementById('wifiImageSide').src = "./Images/WifiTwoBar.png";
        document.getElementById('wifi-sidebar-label').innerText = "Two Bars";
        document.getElementById('wifiImageSide').alt = "Wifi Two Bars Mainbar";
    }
    document.getElementById('wifi-mainbar-label').innerText = document.getElementById('wifi-sidebar-label').innerText;
}