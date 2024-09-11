const scoreDiv = document.getElementById('score-text');
const rankImage = document.getElementById('rank-image');

let changedToOneThousand = false;
let changedToTwoThousand = false;
let changedToThreeThousand = false;
let changedToFourThousand = false;

const currentScore = parseInt(scoreDiv.textContent.split(' ')[1]);

if(currentScore >= 4000){
    changedToFourThousand = true;
    changedToThreeThousand = true;
    changedToTwoThousand = true;
    changedToOneThousand = true;
    rankImage.src = "./Images/rank4.png";
} else if(currentScore >= 3000){
    changedToThreeThousand = true;
    changedToTwoThousand = true;
    changedToOneThousand = true;
    rankImage.src = "./Images/rank3.png";
} else if(currentScore >= 2000){
    changedToTwoThousand = true;
    changedToOneThousand = true;
    rankImage.src = "./Images/rank2.png";
} else if(currentScore >= 1000){
    changedToOneThousand = true;
    rankImage.src = "./Images/rank1.png";
}

const callback = function(mutationsList, observer) {
    for(let mutation of mutationsList) {
        if (mutation.type === 'childList') {
            const currentScore = parseInt(scoreDiv.textContent.split(' ')[1]);
            if(currentScore >= 1000 && changedToOneThousand == false){
                rankImage.src = "./Images/rank1.png";
                document.getElementById('congrats-modal-image').src = "./Images/rank1.png";
                changedToOneThousand = true;
                document.getElementById('congratsModalOpenButton').click();
            }
            else if(currentScore >= 2000 && changedToTwoThousand == false){
                rankImage.src = "./Images/rank2.png";
                document.getElementById('congrats-modal-image').src = "./Images/rank2.png";
                changedToTwoThousand = true;
                document.getElementById('congratsModalOpenButton').click();
            }
            else if(currentScore >= 3000 && changedToThreeThousand == false){
                rankImage.src = "./Images/rank3.png";
                document.getElementById('congrats-modal-image').src = "./Images/rank3.png";
                changedToThreeThousand = true;
                document.getElementById('congratsModalOpenButton').click();
            }
            else if(currentScore >= 4000 && changedToFourThousand == false){
                rankImage.src = "./Images/rank4.png";
                document.getElementById('congrats-modal-image').src = "./Images/rank4.png";
                changedToFourThousand = true;
                document.getElementById('congratsModalOpenButton').click();
            }
        }
    }
};

const observer = new MutationObserver(callback);

const config = {
    childList: true,
    subtree: true
};

observer.observe(scoreDiv, config);