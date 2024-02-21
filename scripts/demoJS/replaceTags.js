var chosenCriterion = JSON.parse(sessionStorage.getItem('chosenCriterion'));

let numberOfLinesPerCriterion = [[1, 1, 0], [3, 4, 0], [4, 4, 0], [4, 4, 0], [1, 1, 0], [2, 2, 0], [3, 3, 0], [1, 1, 0], [1, 1, 0], [1, 1, 0], [1, 2, 0], [1, 1, 0], [1, 2, 0], [1, 1, 0], [7, 7, 0], [1, 1, 0], [1, 1, 0], [4, 4, 0], [2, 2, 0], [1, 1, 0], [1, 1, 0], [7, 7, 0], [5, 5, 0], [1, 2, 0], [5, 5, 0], [1, 1, 0]];

function removeEmptyLines(text) {
    let withinCodeBlock = false;
    return text.split('\n').filter(line => {
        if (line.trim().startsWith('```')) {
            withinCodeBlock = !withinCodeBlock;
            return true;
        }
        return withinCodeBlock || line.trim() !== '';
    }).join('\n');
}

function replaceTags(textContent) {
    newText = textContent;
    var startMarker = "<h$";
    var endMarker = "$>";

    var startIndex = newText.indexOf(startMarker);
    var endIndex = newText.indexOf(endMarker);

    var put = new Array(26).fill(-1);

    let numberOfLines = 0;

    while (startIndex !== -1 && endIndex !== -1) {
        var tag = parseInt(newText.slice(startIndex+5,startIndex+7));

        if(chosenCriterion.includes(tag)){
            newText = newText.substring(0, startIndex) + data[tag][0] + newText.substring(endIndex + endMarker.length + 1);
            numberOfLines += numberOfLinesPerCriterion[tag][0];
            put[tag] = 1;
        }
        else{
            if(tag != 20 && tag != 13) {
                var r = Math.floor(Math.random() * 3);
                if(r == 0){
                    newText = newText.substring(0, startIndex) + data[tag][1] + newText.substring(endIndex + endMarker.length + 1);
                    numberOfLines += numberOfLinesPerCriterion[tag][1];
                    put[tag] = 0;
                } else{
                    newText = newText.substring(0, startIndex) + data[tag][2] + newText.substring(endIndex + endMarker.length);
                    numberOfLines += numberOfLinesPerCriterion[tag][2];
                }
            } else{
                newText = newText.substring(0, startIndex) + data[tag][1] + newText.substring(endIndex + endMarker.length + 1);
                numberOfLines += numberOfLinesPerCriterion[tag][1];
                put[tag] = 0;
            }
        }
        startIndex = newText.indexOf(startMarker);
        endIndex = newText.indexOf(endMarker);
    }

    let numberOfLinesStr = '';
    for(let i = 1; i < numberOfLines + 10; i++){
        numberOfLinesStr += (i.toString() + '. ');
    }
    document.getElementById('line-numbers').textContent = numberOfLinesStr;

    return removeEmptyLines(newText);
}