function toggleSidebarOn() {
    var mainbar = document.getElementById('mainbar');
    var sidebar = document.getElementById('sidebar');
    var mainbarImages = document.getElementById('mainbar-images');
    var questions = document.getElementById('carouselExampleIndicators');

    if(window.innerWidth < 600){
        sidebar.style.transition = '0s';
        mainbar.style.transition = '0s';
        mainbarImages.style.transition = '0s';
        questions.style.transition = '0s';
    }else{
        sidebar.style.transition = '1s';
        mainbar.style.transition = 'margin-right 1s';
        mainbarImages.style.transition = '1s';
        questions.style.transition = '1s';
    }

    sidebar.style.width = sidebar.style.width === '600px' ? '0px' : '600px';

    var toggleButtonShowInfo = document.getElementById('toggle-button-to-show-info');
    toggleButtonShowInfo.style.pointerEvents = 'none';
    toggleButtonShowInfo.innerText ='';
    toggleButtonShowInfo.tabIndex = -1;

    var toggleButtonHideInfo = document.getElementById('toggle-button-to-hide-info');
    toggleButtonHideInfo.style.pointerEvents = 'auto';
    toggleButtonHideInfo.innerText = 'cancel';
    toggleButtonHideInfo.tabIndex = 0;

    questions.style.width = '100%';
    mainbarImages.style.flex = 0;
    sidebar.scrollIntoView({ behavior: 'smooth' });
}

function toggleSidebarOff() {
    var mainbar = document.getElementById('mainbar');
    var sidebar = document.getElementById('sidebar');
    var mainbarImages = document.getElementById('mainbar-images');
    var questions = document.getElementById('carouselExampleIndicators');

    if(window.innerWidth < 600){
        sidebar.style.transition = '0s';
        mainbar.style.transition = '0s';
        mainbarImages.style.transition = '0s';
        questions.style.transition = '0s';
    }else{
        sidebar.style.transition = '1s';
        mainbar.style.transition = 'margin-right 1s';
        mainbarImages.style.transition = '1s';
        questions.style.transition = '1s';
    }

    sidebar.style.width = sidebar.style.width === '600px' ? '0px' : '600px';

    var toggleButtonShowInfo = document.getElementById('toggle-button-to-show-info');
    toggleButtonShowInfo.style.pointerEvents = 'auto';
    toggleButtonShowInfo.innerText = 'info';
    toggleButtonShowInfo.tabIndex = 0;

    var toggleButtonHideInfo = document.getElementById('toggle-button-to-hide-info');
    toggleButtonHideInfo.style.pointerEvents = 'none';
    toggleButtonHideInfo.innerText = '';
    toggleButtonHideInfo.tabIndex = -1;

    questions.style.width = '900px';
    mainbarImages.style.flex = 1;
    mainbar.scrollIntoView({ behavior: 'smooth' });
}

function toggleBack(){
    var buttonNext = document.getElementById("button-previous-question");
    buttonNext.click();
}

function toggleToPourQuestion() {
    var buttonNext = document.getElementById("button-next-question");
    buttonNext.click();
}

function toggleToCriterionQuestion() {
    var buttonNext = document.getElementById("button-next-question");
    buttonNext.click();
}

