function onHintClicked(){
    var text = document.getElementById('code').innerText;
    var chosenCriterion = JSON.parse(sessionStorage.getItem('chosenCriterion'));
    text = text.replace(data[chosenCriterion[0]][0], data[chosenCriterion[0]][3]);
    document.getElementById('code').innerText = text;
    hljs.highlightElement(document.getElementById('code'));
}