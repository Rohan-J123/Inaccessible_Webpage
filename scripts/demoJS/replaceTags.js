var chosenCriterion = JSON.parse(sessionStorage.getItem('chosenCriterion'));

// let numberOfLinesPerCriterion = [[1, 1, 0], [3, 4, 0], [4, 4, 0], [4, 4, 0], [1, 1, 0], [2, 2, 0], [3, 3, 0], [1, 1, 0], [1, 1, 0], [1, 1, 0], [1, 2, 0], [1, 1, 0], [1, 2, 0], [1, 1, 0], [7, 7, 0], [1, 1, 0], [1, 1, 0], [4, 4, 0], [2, 2, 0], [1, 1, 0], [1, 1, 0], [7, 7, 0], [5, 5, 0], [1, 2, 0], [5, 5, 0], [1, 1, 0]];

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

        if(chosenCriterion.includes(tag)){
            newText = newText.substring(0, startIndex) + data[tag]["Incorrect"] + "\n" + newText.substring(endIndex + endMarker.length + 1);
        }
        else{
            var r = Math.floor(Math.random() * 3);
            if(r == 0){
                newText = newText.substring(0, startIndex) + data[tag]["Correct"] + "\n" + newText.substring(endIndex + endMarker.length + 1);
            } else{
                newText = newText.substring(0, startIndex) + data[tag]["Chosen"] + "\n" + newText.substring(endIndex + endMarker.length);
            }
        }
        startIndex = newText.indexOf(startMarker);
        endIndex = newText.indexOf(endMarker);
    }
    return removeEmptyLines(newText);
}