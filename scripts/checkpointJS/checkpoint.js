var result = "";
var criterionGivenTillNow = JSON.parse(sessionStorage.getItem("criterion-given-till-now"));

for(var i = 0; i < criterionGivenTillNow.length; i++) {
    var incorrectText = data[criterionGivenTillNow[i]]["Incorrect"].replace(new RegExp('<', 'g'), '&lt;').replace(new RegExp('>', 'g'), '&gt;');
    var correctText = data[criterionGivenTillNow[i]]["Correct"].replace(new RegExp('<', 'g'), '&lt;').replace(new RegExp('>', 'g'), '&gt;');
    var cr = data[[criterionGivenTillNow[i]]]['Criterion'];
    var prNo = cr.split(' ')[1].split('.')[0];
    var pr = "";
    if(prNo == 1){
        pr = "Perceivable";
    }  else if (prNo == 2){
        pr = "Operable";
    }  else if (prNo == 3){
        pr = "Understandable";
    }  else if (prNo == 4){
        pr = "Robost";
    }

    result += 
`<li>
    <h4 style="text-align: center;" class="lobster-regular">${cr}</h4>
    <h5 style="text-align: center; color: rgb(100, 100, 100)">${pr}</h5>
    <div style="display: flex; flex-wrap: wrap; font-size: medium;">
        <div style="padding: 10px; flex: 1; width: 50%;">
            <h5 style="text-align: center;" class="lobster-regular">Incorrect:</h5>
            <div style="white-space: pre-line; background-color: black; color: white; height: 150px; border-radius: 10px; padding: 10px; overflow-y: scroll;">${incorrectText}</div>
        </div>
        <div style="padding: 10px; flex: 1; width: 50%;">
            <h5 style="text-align: center;" class="lobster-regular">Correct:</h5>
            <div style="white-space: pre-line; background-color: black; color: white; height: 150px; border-radius: 10px; padding: 10px; overflow-y: scroll;">${correctText}</div>
        </div>
    </div>
</li>
<br>`;
}

document.getElementById('checkpoint-div').innerHTML = result;

let seconds = parseInt(sessionStorage.getItem('timer').split(':')[2]);
let minutes = parseInt(sessionStorage.getItem('timer').split(':')[1]);
let hours = parseInt(sessionStorage.getItem('timer').split(':')[0]);

document.getElementById("clock").textContent =
        (hours < 10 ? "0" : "") + hours + ":" +
        (minutes < 10 ? "0" : "") + minutes + ":" +
        (seconds < 10 ? "0" : "") + seconds;

document.getElementById("score-text").innerHTML = "Score: " + parseInt(sessionStorage.getItem('score'));

var currentScore = parseInt(sessionStorage.getItem('score'));

const rankImage = document.getElementById('rank-image');

let changedToOneThousand = false;
let changedToTwoThousand = false;
let changedToThreeThousand = false;
let changedToFourThousand = false;

if(currentScore >= 4000){
    changedToFourThousand = true;
    changedToThreeThousand = true;
    changedToTwoThousand = true;
    changedToOneThousand = true;

    rankImage.src = "./Images/rank4.png";
    rankImage.alt = 'You are at Rank 5';
} else if(currentScore >= 3000){
    changedToThreeThousand = true;
    changedToTwoThousand = true;
    changedToOneThousand = true;

    rankImage.src = "./Images/rank3.png";
    rankImage.alt = 'You are at Rank 4';
} else if(currentScore >= 2000){
    changedToTwoThousand = true;
    changedToOneThousand = true;

    rankImage.src = "./Images/rank2.png";
    rankImage.alt = 'You are at Rank 3';
} else if(currentScore >= 1000){
    changedToOneThousand = true;
    
    rankImage.src = "./Images/rank1.png";
    rankImage.alt = 'You are at Rank 2';
}

function continueButton(){
    if(parseInt(sessionStorage.getItem('question-number')) == 6){
        sessionStorage.setItem('checkpoint-5', 'true'); 
    } else {
        sessionStorage.setItem('checkpoint-10', 'true');
    }
        
    window.location.href = './question.html';
}