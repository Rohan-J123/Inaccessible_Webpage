var hintedCriteria = [];

function onHintClicked(){
    var text = document.getElementById('code').innerText;
    var chosenCriterion = JSON.parse(sessionStorage.getItem('chosenCriterion'));
    if(!hintedCriteria.includes(chosenCriterion[0])){
        hintedCriteria.push(chosenCriterion[0]);

        text = text.replace(data[chosenCriterion[0]][0], data[chosenCriterion[0]][3]);
        document.getElementById('code').innerText = text;
        hljs.highlightElement(document.getElementById('code'));

        var indexOfData = document.getElementById('code').innerText.indexOf(data[chosenCriterion[0]][3]);
        var lineNoOfCriterion = countSubstringOccurrences(document.getElementById('code').innerText.slice(0, indexOfData), '\n') + 1;
        document.getElementById('lineInput').value = lineNoOfCriterion.toString();

        document.getElementById('game-hint-button').disabled = true;
    } else {
        alert("Use previous hint before taking the next hint");
    }
}

// const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
// const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))