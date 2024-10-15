function onHintClicked(){
    var text = document.getElementById('code').innerText;
    if(!hintedCriteria.includes(criterionLeftToIdentify[0])){
        hintedCriteria.push(criterionLeftToIdentify[0]);

        text = text.replace(data[criterionLeftToIdentify[0]]["Incorrect"], data[criterionLeftToIdentify[0]]["Commented"]);
        document.getElementById('code').innerText = text;
        hljs.highlightElement(document.getElementById('code'));

        var indexOfData = document.getElementById('code').innerText.indexOf(data[criterionLeftToIdentify[0]]["Commented"]);
        var lineNoOfCriterion = countSubstringOccurrences(document.getElementById('code').innerText.slice(0, indexOfData), '\n') + 1;
        searchCriterion(lineNoOfCriterion);

        document.getElementById('game-hint-button').disabled = true;
    } else {
        alert("Use previous hint before taking the next hint");
    }
}