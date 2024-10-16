var criterionCorrectlyChosenTillNow = sessionStorage.getItem("criterion-correctly-chosen-till-now") 
              ? JSON.parse(sessionStorage.getItem("criterion-correctly-chosen-till-now")) 
              : [];
              
var chosenIncorrectCriterion = [];
for(let i = 0; i < JSON.parse(sessionStorage.getItem('correct-questions')).length + 1; i++){
    var randValue = Math.floor(Math.random() * data.length);
    if (!chosenIncorrectCriterion.includes(randValue) && !criterionCorrectlyChosenTillNow.includes(randValue)) {
        chosenIncorrectCriterion.push(randValue);
    }
    else{
        i--;
    }
}

var remaining = JSON.parse(sessionStorage.getItem('correct-questions')).length + 1;
var criterionLeftToIdentify = chosenIncorrectCriterion;
var chosenCorrectCriterion = [];

var chosenButtonValues = [];
for(let i = 0; i < 10 - JSON.parse(sessionStorage.getItem('correct-questions')).length - 1; i++){
    var randValue = Math.floor(Math.random() * data.length);
    if (!chosenButtonValues.includes(randValue) && !chosenIncorrectCriterion.includes(randValue)) {
        chosenButtonValues.push(randValue);
    }
    else{
        i--;
    }
}

chosenButtonValues = chosenButtonValues.concat(chosenIncorrectCriterion);

var divisions = [];
var divisionsIncorrect = [];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

shuffleArray(chosenButtonValues);