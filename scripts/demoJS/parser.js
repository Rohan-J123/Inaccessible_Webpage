let runUsed = false;

var incorrectCriterionLineNumbers = [];
var correctCriterionLineNumbers = [];

var currentLIndex = 0;

var htmlCode = document.getElementById('code').textContent;
var iframe = document.getElementById('outputFrame');

function countSubstringOccurrences(string, substring) {
    let count = 0;
    let position = string.indexOf(substring);
    while (position !== -1) {
        count++;
        position = string.indexOf(substring, position + 1);
    }
    return count;
}

function removeEmptyLines(text) {
    return text.replace(/^\s*[\r\n]/gm, '');
}

function replaceTags(textContent) {
    newText = textContent;
    var startMarker = "<h$";
    var endMarker = "$>";

    var startIndex = newText.indexOf(startMarker);
    var endIndex = newText.indexOf(endMarker);

    while (startIndex !== -1 && endIndex !== -1) {
        var tag = parseInt(newText.slice(startIndex+5,startIndex+7));

        if(chosenIncorrectCriterion.includes(tag)){
            newText = newText.substring(0, startIndex) + data[tag]["Incorrect"] + "\n" + newText.substring(endIndex + endMarker.length + 1);
        }
        else{
            var r = Math.floor(Math.random() * 3);
            if(r == 0){
                newText = newText.substring(0, startIndex) + data[tag]["Correct"] + "\n" + newText.substring(endIndex + endMarker.length + 1);
                chosenCorrectCriterion.push(tag);
            } else{
                newText = newText.substring(0, startIndex) + data[tag]["Chosen"] + "\n" + newText.substring(endIndex + endMarker.length);
            }
        }
        startIndex = newText.indexOf(startMarker);
        endIndex = newText.indexOf(endMarker);
    }

    return removeEmptyLines(newText);
}

fetch('./demoFolder/demoCode.html')
    .then(response => response.text())
    .then(data => {
        var eofMarker = "</html>";
        var eofIndex = data.indexOf(eofMarker);

        var sofMarker = "<body";
        var sofIndex = data.indexOf(sofMarker);
        
        newText = data;
        var startMarker = "<!-- Code injected by live-server -->";
        var endMarker = "</script>";

        i = sofIndex;
        while (i < eofIndex) {
            var startIndex = newText.indexOf(startMarker, i);
            var endIndex = newText.indexOf(endMarker, i);

            if (startIndex !== -1 && endIndex !== -1) {
                newText = newText.substring(0, startIndex) + newText.substring(endIndex + endMarker.length + 1);
                i = startIndex;
            }
            else{
                break;
            }
        }
        newText = replaceTags(newText);

        var codeElement = document.getElementById('code');
        codeElement.textContent = newText;

        codeElement.classList.add('language-html');
        hljs.highlightElement(codeElement);

        abcdefg();
    })
    .catch(error => console.error('Error fetching file:', error));


function abcdefg(){
    var codeText = document.getElementById('code').innerText;
    
    for(var i = 0; i < chosenIncorrectCriterion.length; i++){
        var indexOfData = codeText.indexOf(data[chosenIncorrectCriterion[i]]["Incorrect"]);
        incorrectCriterionLineNumbers.push(countSubstringOccurrences(codeText.slice(0, indexOfData), '\n') + 1);
    }
    
    for(var i = 0; i < chosenCorrectCriterion.length; i++){
        var indexOfData = codeText.indexOf(data[chosenCorrectCriterion[i]]["Correct"]);
        correctCriterionLineNumbers.push(countSubstringOccurrences(codeText.slice(0, indexOfData), '\n') + 1);
    }


    var indexOfEnd = codeText.indexOf('</html>');
    var numberOfLines = countSubstringOccurrences(codeText.slice(0, indexOfEnd), '\n') + 1;
    let numberOfLinesStr = '';
    for(let i = 1; i <= numberOfLines; i++){
        numberOfLinesStr += (i.toString() + '. ');
    }
    document.getElementById('line-numbers').textContent = numberOfLinesStr;

    iframe.contentWindow.document.open();
    iframe.contentWindow.document.write(htmlCode);
    iframe.contentWindow.document.close();

    var audio = iframe.contentWindow.document.querySelector('audio');
    if (audio) {
        audio.pause();
        audio.currentTime = 0;
    }

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
    
    if(divisions[currentLIndex % divisions.length][0] == divisions[currentLIndex % divisions.length][1]){
        document.getElementById("lineInput").innerHTML = divisions[currentLIndex % divisions.length][0];
    } else {
        document.getElementById("lineInput").innerHTML = String(divisions[currentLIndex % divisions.length][0]) + " - " + String(divisions[currentLIndex % divisions.length][1]);
    }
}

var audio = iframe.contentWindow.document.querySelector('audio');
if (audio) {
    audio.pause();
    audio.currentTime = 0;
}

function addRunCodeToOutput (){
    document.getElementById("sidebar-main-content").style.display = "none"; 
    document.getElementById("sidebar-run-output").style.display = "block"; 
    document.getElementById("run-button-div").style.display = "none"; 
    document.getElementById("game-instr-button").style.display = "block";

    var htmlCode = document.getElementById('code').textContent;
    var iframe = document.getElementById('outputFrame');
    iframe.contentWindow.document.open();
    iframe.contentWindow.document.write(htmlCode);
    iframe.contentWindow.document.close();

    if(runUsed == false){
        currentScore = currentScore - 100;
        onScoreIncrease();

        document.getElementById("run-div-tick").style.display = "block";
        document.getElementById("run-div-unchecked").style.display = "none";

        runUsed = true;
    }
}

function removeRunCodeFromOutput (){
    document.getElementById("sidebar-main-content").style.display = "block";
    document.getElementById("sidebar-run-output").style.display = "none";
    document.getElementById("run-button-div").style.display = "block";
    document.getElementById("game-instr-button").style.display = "none";

    var iframe = document.getElementById('outputFrame');
    var audio = iframe.contentWindow.document.querySelector('audio');
    if (audio) {
        audio.pause();
        audio.currentTime = 0;
    }
}