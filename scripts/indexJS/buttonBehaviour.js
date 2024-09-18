var chosenButtonValues = JSON.parse(sessionStorage.getItem('chosenButtonValues'));

var button1 = document.getElementById('button1');
button1.innerText = data[[chosenButtonValues[0]]]["Criterion"];

var button2 = document.getElementById('button2');
button2.innerText = data[chosenButtonValues[1]]['Criterion'];

var button3 = document.getElementById('button3');
button3.innerText = data[chosenButtonValues[2]]['Criterion'];

var button4 = document.getElementById('button4');
button4.innerText = data[chosenButtonValues[3]]['Criterion'];

var button5 = document.getElementById('button5');
button5.innerText = data[chosenButtonValues[4]]['Criterion'];

var button6 = document.getElementById('button6');
button6.innerText = data[chosenButtonValues[5]]['Criterion'];

var button7 = document.getElementById('button7');
button7.innerText = data[chosenButtonValues[6]]['Criterion'];

var button8 = document.getElementById('button8');
button8.innerText = data[chosenButtonValues[7]]['Criterion'];

var button9 = document.getElementById('button9');
button9.innerText = data[chosenButtonValues[8]]['Criterion'];

var button10 = document.getElementById('button10');
button10.innerText = data[chosenButtonValues[9]]['Criterion'];