function onSubmitLineNumber(){
    var lineNumber = document.getElementById('lineInput').value;
    var validLineNumbers = JSON.parse(sessionStorage.getItem('correct-line-numbers'));

    if(validLineNumbers.includes(parseInt(lineNumber))){
        var inner = 
        `<h3 style="font-family: 'Times New Roman', Times, serif; text-align: center;">Congratulations!</h3>
        <div  style="font-size: large; text-align: center;">Correct Answer!</div>
        <div style="display: flex; font-size: x-large;">
            <button id="submit-line-number" type="button" class="btn btn-outline-warning" style="flex: 1; margin-right: 1vw; font-size: x-large; height: 50px; margin-top: 20px; margin-left: 1vw;" onclick="document.getElementById('goToPart2').click();">NEXT QUESTION</button>
        </div> `;
        document.getElementById('part1Result').innerHTML = inner;
        document.getElementById('sidebar-line').innerText = data[onFindingCriterion(lineNumber)][0];

        document.getElementById('part-2-title').innerText = `In Correspondence To WCAG Level A, Which Principle Do The Lines ` + lineNumber + `-`+ (parseInt(lineNumber) + parseInt(numberOfLinesPerCriterion[onFindingCriterion(lineNumber)][0]) - 1) +` Defy?`;
        document.getElementById('part-3-title').innerText = `In Correspondence To WCAG Level A, Which Accessibility Criteria Do The Lines ` + lineNumber + `-`+ (parseInt(lineNumber) + parseInt(numberOfLinesPerCriterion[onFindingCriterion(lineNumber)][0]) - 1) +` Defy?`;

        sessionStorage.setItem('currentLineNumber', parseInt(lineNumber));
        sessionStorage.setItem('score', parseInt(sessionStorage.getItem('score')) + 10);
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

function onFindingLineNumber(searchString){
    var codeBlock = document.getElementById('code');
    var lines = codeBlock.textContent.trim().split('\n');
    var searchStringLines = searchString.trim().split('\n');
    var lineNumber = -1;

    for (var i = 0; i < lines.length - searchStringLines.length + 1; i++) {
        if (lines[i].includes(searchStringLines[0])) {
            var match = true;
            for (var j = 1; j < searchStringLines.length; j++) {
                if (lines[i + j] !== searchStringLines[j]) {
                    match = false;
                    break;
                }
            }
            if (match) {
                lineNumber = i + 1; 
                break;
            }
        }
    }

    if (lineNumber !== -1) {
        return lineNumber;
    } else{
        return -1;
    }
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
}