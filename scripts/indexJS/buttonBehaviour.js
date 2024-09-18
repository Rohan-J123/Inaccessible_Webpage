var successCriterionLabels = ['Criteria 1.1.1', 'Criteria 1.2.1', 'Criteria 1.3.1', 'Criteria 1.3.2', 'Criteria 1.3.3', 'Criteria 1.4.1', 'Criteria 1.4.2', 'Criteria 2.1.1', 'Criteria 2.1.4', 'Criteria 2.2.1', 'Criteria 2.2.2', 'Criteria 2.3.1', 'Criteria 2.4.1', 'Criteria 2.4.2', 'Criteria 2.4.3', 'Criteria 2.4.4', 'Criteria 2.5.1', 'Criteria 2.5.2', 'Criteria 2.5.4', 'Criteria 3.1.1', 'Criteria 3.2.1', 'Criteria 3.3.1', 'Criteria 3.3.2', 'Criteria 3.3.7', 'Criteria 4.1.2'];

var chosenButtonValues = JSON.parse(sessionStorage.getItem('chosenButtonValues'));

var button1 = document.getElementById('button1');
button1.innerText = successCriterionLabels[chosenButtonValues[0]];

var button2 = document.getElementById('button2');
button2.innerText = successCriterionLabels[chosenButtonValues[1]];

var button3 = document.getElementById('button3');
button3.innerText = successCriterionLabels[chosenButtonValues[2]];

var button4 = document.getElementById('button4');
button4.innerText = successCriterionLabels[chosenButtonValues[3]];

var button5 = document.getElementById('button5');
button5.innerText = successCriterionLabels[chosenButtonValues[4]];

var button6 = document.getElementById('button6');
button6.innerText = successCriterionLabels[chosenButtonValues[5]];

var button7 = document.getElementById('button7');
button7.innerText = successCriterionLabels[chosenButtonValues[6]];

var button8 = document.getElementById('button8');
button8.innerText = successCriterionLabels[chosenButtonValues[7]];

var button9 = document.getElementById('button9');
button9.innerText = successCriterionLabels[chosenButtonValues[8]];

var button10 = document.getElementById('button10');
button10.innerText = successCriterionLabels[chosenButtonValues[9]];