const tutorialsModal = document.getElementById('UI_tutorials_content');

function isElementVisible(id) {
    const element = document.getElementById(id);
    if (!element) return false;

    const rect = element.getBoundingClientRect();
    const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}

var tutorialUIs =   [
    document.getElementById('game_instructions_review'), 
    document.getElementById('game-hint-button'),
    document.getElementById('redirect-to-WCAG'),
    document.getElementById('game-run-code-button'),
    document.getElementById('carouselExampleIndicators'),
    document.getElementById('sidebar'),
    document.getElementById('open-account'),
    document.getElementById('open-leaderboard'),
    document.getElementById('questions-headings-and-labels'),
    document.getElementById('wifi-bars-and-label'),
    document.getElementById('tutorial-reset-button'),
    document.getElementById('rank-image')
]

var tutorialUIsModalNames =   [
    "Code Box",
    "Hint Button",
    "WCAG Button",
    "Run Button",
    "Questions",
    "SideBar",
    "Account Button",
    "Leaderboard Button",
    "Question Numbers",
    "WiFi Bars",
    "Tutorial Button",
    "Rank"
]

var tutorialUIsModalBody = [
    "Code will be displayed here once all instructions have been reviewed and the 'Start' button has been pressed.",
    "Clicking this button will provide hints as comments within the code, and the corresponding line number will be shown in the input field.",
    "This button opens a new tab linking to the official WCAG website.",
    "Activate this button to display the code output in the sidebar, at the expense of 100 points.",
    "The line number query, POUR question, and criteria question will be displayed in this section.",
    "Instructions for the current question and the output from running the code will be shown here.",
    "This button displays user details, along with options for restarting the game or viewing the 'About Us' page.",
    "Press this button to access the leaderboard, where top ten performers are displayed based on the selected filters.",
    "The current question number and remaining criteria to be identified will be displayed here.",
    "The remaining WiFi bars are shown here; the game ends when all bars are depleted.",
    "Click this button to run this UI tutorial again.",
    "Users will be promoted to a higher rank upon reaching every 1,000-point milestone."
]

var currentUIElement = 0;

function switchTail() {
    var modalContent = document.querySelector('.custom-modal-content');
    
    if (modalContent.classList.contains('tail-top')) {
      modalContent.classList.remove('tail-top');
      modalContent.classList.add('tail-bottom');
    } else {
      modalContent.classList.remove('tail-bottom');
      modalContent.classList.add('tail-top');
    }
}

function onTutorialLoad(){
    const container = tutorialUIs[currentUIElement];

    const containerRect = container.getBoundingClientRect();
    const containerWidth = containerRect.width;
    const containerHeight = containerRect.height;
    const containerLeft = containerRect.left;
    const containerTop = containerRect.top;

    const tutorialsModalWidth = 250;
    const tutorialsModalHeight = 250;

    document.getElementById('UI_tutorialsLabel').innerText = tutorialUIsModalNames[currentUIElement];
    document.getElementById('UI_tutorials_modal_body').innerHTML = tutorialUIsModalBody[currentUIElement];
    
    switch(currentUIElement){
        case 0:     
                    const container2 = document.getElementById('game_code_box');
                    const containerRect2 = container2.getBoundingClientRect();
                    const containerWidth2 = containerRect2.width;
                    const containerTop2 = containerRect2.top;

                    var leftPosition = containerLeft + (containerWidth + containerWidth2 - tutorialsModalWidth) / 2;
                    var topPosition = containerTop + containerTop2;

                    document.getElementById("tutorials_skip_button").innerText = "SKIP";
                    document.getElementById("tutorials_next_button").style.display = "block";

                    var modalContent = document.querySelector('.custom-modal-content');
                    modalContent.classList.remove('tail-right');
                    modalContent.classList.add('tail-bottom');

                    break;
        case 1:     var leftPosition = containerLeft + (containerWidth - tutorialsModalWidth) / 2;
                    var topPosition = containerTop - tutorialsModalHeight - containerHeight;
                    break;
        case 2:     var leftPosition = containerLeft + (containerWidth - tutorialsModalWidth) / 2;
                    var topPosition = containerTop - tutorialsModalHeight - containerHeight;
                    break;
        case 3:     var leftPosition = containerLeft + (containerWidth - tutorialsModalWidth) / 2;
                    var topPosition = containerTop - tutorialsModalHeight - containerHeight;
                    break;
        case 4:     var leftPosition = containerLeft + (containerWidth - tutorialsModalWidth) / 2;
                    var topPosition = containerTop - tutorialsModalHeight;
                    break;
        case 6:     var leftPosition = containerLeft + (containerWidth - tutorialsModalWidth) / 2;
                    var topPosition = containerTop + (containerHeight);
                    switchTail();  
                    break;
        case 7:     var leftPosition = containerLeft + (containerWidth - tutorialsModalWidth) / 2;
                    var topPosition = containerTop + (containerHeight);  
                    break;
        case 8:     var leftPosition = containerLeft + (containerWidth - tutorialsModalWidth) / 2;
                    var topPosition = containerTop + containerHeight;
                    break;
        case 9:     var leftPosition = containerLeft + (containerWidth - tutorialsModalWidth) / 2;
                    var topPosition = containerTop + containerHeight;
                    break;
        case 10:    var leftPosition = containerLeft + (containerWidth - tutorialsModalWidth);
                    var topPosition = containerTop + containerHeight / 2;

                    var modalContent = document.querySelector('.custom-modal-content');
                    modalContent.classList.remove('tail-top');
                    modalContent.classList.add('tail-slight-right');

                    break;
        case 11:    var leftPosition = containerLeft + (containerWidth - tutorialsModalWidth);
                    var topPosition = containerTop + containerHeight / 2;

                    document.getElementById("tutorials_skip_button").innerText = "CLOSE";
                    document.getElementById("tutorials_next_button").style.display = "none";

                    var modalContent = document.querySelector('.custom-modal-content');
                    modalContent.classList.remove('tail-slight-right');
                    modalContent.classList.add('tail-right');
                    break;
        default:    var leftPosition = containerLeft + (containerWidth - tutorialsModalWidth) / 2;
                    var topPosition = containerTop + (containerHeight - tutorialsModalHeight) / 2;
                    break;
    }

    tutorialsModal.style.position = 'absolute';
    tutorialsModal.style.left = `${leftPosition}px`;
    tutorialsModal.style.top = `${topPosition}px`;

    currentUIElement += 1;
}


onTutorialLoad();

function onTutorialReset(){
    currentUIElement = 0; 
    onTutorialLoad();
    document.getElementById("UI_tutorials_button").click();
}
