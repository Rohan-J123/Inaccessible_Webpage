var chosenCriterion = [];
for(let i = 0; i < 4; i++){
    var randValue = Math.floor(Math.random() * 25);
    if (!chosenCriterion.includes(randValue)) {
        chosenCriterion.push(randValue);
    }
    else{
        i--;
    }
}

sessionStorage.setItem('chosenCriterion', JSON.stringify(chosenCriterion));
sessionStorage.setItem('score', 0);

var chosenButtonValues = [];
for(let i = 0; i < 6; i++){
    var randValue = Math.floor(Math.random() * 25);
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