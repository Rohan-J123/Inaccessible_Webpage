fetch('./demoFolder/demoCode.html')
    .then(response => response.text())
    .then(data => {
        var eofMarker = "</html>";
        var eofIndex = data.indexOf(eofMarker);

        var sofMarker = "<body>";
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
    var chosenCriterionAll = JSON.parse(sessionStorage.getItem('chosenCriterionAll'));
    var codeText = document.getElementById('code').innerText;
    var lineNos = [];
    for(var i = 0; i < chosenCriterionAll.length; i++){
        var indexOfData = codeText.indexOf(data[chosenCriterionAll[i]][0]);
        lineNos.push(countSubstringOccurrences(codeText.slice(0, indexOfData), '\n') + 1);
    }

    sessionStorage.setItem('correct-line-numbers', JSON.stringify(lineNos));

    var indexOfEnd = codeText.indexOf('</html>');
    var numberOfLines = countSubstringOccurrences(codeText.slice(0, indexOfEnd), '\n') + 1;
    let numberOfLinesStr = '';
    for(let i = 1; i <= numberOfLines; i++){
        numberOfLinesStr += (i.toString() + '. ');
    }
    document.getElementById('line-numbers').textContent = numberOfLinesStr;
}

function countSubstringOccurrences(string, substring) {
    let count = 0;
    let position = string.indexOf(substring);
    while (position !== -1) {
        count++;
        position = string.indexOf(substring, position + 1);
    }
    return count;
}