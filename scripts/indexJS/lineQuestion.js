function numberOfLinesInTheCriterion(i){
    var d = data[i][0];
    return countSubstringOccurrences(d, '\n');
}



function onSubmitLineNumber(){
    var lineNumber = document.getElementById('lineInput').value;
    var validLineNumbers = JSON.parse(sessionStorage.getItem('correct-line-numbers'));

    if(sessionStorage.getItem('chosenCriterionAll').includes(onFindingCriterion(lineNumber)) && !sessionStorage.getItem('chosenCriterion').includes(onFindingCriterion(lineNumber))){
        alert("Criterion has previously been selected!");
        return;
    }

    if(validLineNumbers.includes(parseInt(lineNumber))){
        var inner = 
        `<h3 style="font-family: 'Times New Roman', Times, serif; text-align: center;">Congratulations!</h3>
        <div  style="font-size: large; text-align: center;">Correct Answer!</div>
        <div style="display: flex; font-size: x-large;">
            <button id="submit-line-number" type="button" class="btn btn-outline-warning" style="flex: 1; margin-right: 1vw; font-size: x-large; height: 50px; margin-top: 20px; margin-left: 1vw;" onclick="document.getElementById('goToPart2').click();">NEXT QUESTION</button>
        </div> `;
        document.getElementById('part1Result').innerHTML = inner;
        document.getElementById('sidebar-line').innerText = data[onFindingCriterion(lineNumber)][0];

        if(numberOfLinesInTheCriterion(onFindingCriterion(lineNumber)) != 0){
            document.getElementById('part-2-title').innerText = `In Correspondence To WCAG Level A, Which Principle Do The Lines ` + lineNumber + `-`+ (parseInt(lineNumber) + numberOfLinesInTheCriterion(onFindingCriterion(lineNumber))) +` Defy?`;
            document.getElementById('part-3-title').innerText = `In Correspondence To WCAG Level A, Which Accessibility Criteria Do The Lines ` + lineNumber + `-`+ (parseInt(lineNumber) + numberOfLinesInTheCriterion(onFindingCriterion(lineNumber))) +` Defy?`;
        }
        else {
            document.getElementById('part-2-title').innerText = `In Correspondence To WCAG Level A, Which Principle Does The Line ` + lineNumber +` Defy?`;
            document.getElementById('part-3-title').innerText = `In Correspondence To WCAG Level A, Which Accessibility Criteria Does The Line ` + lineNumber +` Defy?`;
        }
        
        sessionStorage.setItem('currentLineNumber', parseInt(lineNumber));
        sessionStorage.setItem('score', parseInt(sessionStorage.getItem('score')) + 20);
        onScoreIncrease();
    } else {
        var inner = 
        `<h3 style="font-family: 'Times New Roman', Times, serif; text-align: center;">Sorry!</h3>
        <div  style="font-size: large; text-align: center;">Wrong Answer!</div>
        <div style="display: flex; font-size: x-large;">
            <button id="submit-line-number" type="button" class="btn btn-outline-danger" style="flex: 1; margin-right: 1vw; font-size: x-large; height: 50px; margin-top: 20px; margin-left: 1vw;" onclick="document.getElementById('goToPart1').click();">BACK</button>
        </div> `;
        document.getElementById('part1Result').innerHTML = inner;
        reduceBar();
    }
    document.getElementById('goToPart1Result').click();
    document.getElementById('lineInput').value = "";
}

function reduceBar(){
    let fullBar = "FullBar";
    let threeBar = "ThreeBar";
    let twoBar = "TwoBar";
    let oneBar = "OneBar";

    var imageType = document.getElementById('wifiImageMain').src;
    if (imageType.indexOf(fullBar) !== -1) {
        document.getElementById('wifiImageMain').src = "./Images/WifiThreeBar.png";
    } else if (imageType.indexOf(threeBar) !== -1) {
        document.getElementById('wifiImageMain').src = "./Images/WifiTwoBar.png";
    } else if (imageType.indexOf(twoBar) !== -1) {
        document.getElementById('wifiImageMain').src = "./Images/WifiOneBar.png";
    } else if (imageType.indexOf(oneBar) !== -1) {
        document.getElementById('wifiImageMain').src = "./Images/WifiNoBar.png";
        console.log("Game Over!");
        onIncorrectQuestionComplete();
    }

    var imageType = document.getElementById('wifiImageSide').src;
    if (imageType.indexOf(fullBar) !== -1) {
        document.getElementById('wifiImageSide').src = "./Images/WifiThreeBar.png";
        document.getElementById('wifi-sidebar-label').innerText = "Three Bars";
    } else if (imageType.indexOf(threeBar) !== -1) {
        document.getElementById('wifiImageSide').src = "./Images/WifiTwoBar.png";
        document.getElementById('wifi-sidebar-label').innerText = "Two Bars";
    } else if (imageType.indexOf(twoBar) !== -1) {
        document.getElementById('wifiImageSide').src = "./Images/WifiOneBar.png";
        document.getElementById('wifi-sidebar-label').innerText = "One Bar";
    } else if (imageType.indexOf(oneBar) !== -1) {
        document.getElementById('wifiImageSide').src = "./Images/WifiNoBar.png";
        document.getElementById('wifi-sidebar-label').innerText = "Game Over!";
        console.log("Game Over!");
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
    } else if (imageType.indexOf(twoBar) !== -1) {
        document.getElementById('wifiImageMain').src = "./Images/WifiThreeBar.png";
    } else if (imageType.indexOf(oneBar) !== -1) {
        document.getElementById('wifiImageMain').src = "./Images/WifiTwoBar.png";
    }

    var imageType = document.getElementById('wifiImageSide').src;
    if (imageType.indexOf(threeBar) !== -1) {
        document.getElementById('wifiImageSide').src = "./Images/WifiFullBar.png";
        document.getElementById('wifi-sidebar-label').innerText = "Four Bars";
    } else if (imageType.indexOf(twoBar) !== -1) {
        document.getElementById('wifiImageSide').src = "./Images/WifiThreeBar.png";
        document.getElementById('wifi-sidebar-label').innerText = "Three Bars";
    } else if (imageType.indexOf(oneBar) !== -1) {
        document.getElementById('wifiImageSide').src = "./Images/WifiTwoBar.png";
        document.getElementById('wifi-sidebar-label').innerText = "Two Bars";
    }
    document.getElementById('wifi-mainbar-label').innerText = document.getElementById('wifi-sidebar-label').innerText;
}