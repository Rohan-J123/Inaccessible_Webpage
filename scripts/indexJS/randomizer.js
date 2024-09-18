var chosenCriterion = [];
for(let i = 0; i < JSON.parse(sessionStorage.getItem('correct-questions')).length + 1; i++){
    var randValue = Math.floor(Math.random() * data.length);
    if (!chosenCriterion.includes(randValue)) {
        chosenCriterion.push(randValue);
    }
    else{
        i--;
    }
}

var remaining = JSON.parse(sessionStorage.getItem('correct-questions')).length + 1;

sessionStorage.setItem('chosenCriterion', JSON.stringify(chosenCriterion));
sessionStorage.setItem('chosenCriterionAll', JSON.stringify(chosenCriterion));

var chosenButtonValues = [];
for(let i = 0; i < 10 - JSON.parse(sessionStorage.getItem('correct-questions')).length - 1; i++){
    var randValue = Math.floor(Math.random() * data.length);
    if (!chosenButtonValues.includes(randValue) && !chosenCriterion.includes(randValue)) {
        chosenButtonValues.push(randValue);
    }
    else{
        i--;
    }
}

chosenButtonValues = chosenButtonValues.concat(chosenCriterion)

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
}
shuffleArray(chosenButtonValues);
sessionStorage.setItem('chosenButtonValues', JSON.stringify(chosenButtonValues));