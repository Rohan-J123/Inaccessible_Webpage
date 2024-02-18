function toggleSidebarOn() {
    var mainbar = document.getElementById('mainbar');
    var sidebar = document.getElementById('sidebar');
    var questions = document.getElementById('mainbar-images');

    if(window.innerWidth < 600){
        sidebar.style.transition = '0s';
        mainbar.style.transition = '0s';
        questions.style.transition = '0s';
    }else{
        sidebar.style.transition = '1s';
        mainbar.style.transition = 'margin-right 1s';
        questions.style.transition = '1s';
    }

    sidebar.style.width = sidebar.style.width === '600px' ? '0px' : '600px';

    var toggleButtonShowInfo = document.getElementById('toggle-button-to-show-info');
    toggleButtonShowInfo.style.pointerEvents = 'none';
    toggleButtonShowInfo.innerText ='';

    var toggleButtonHideInfo = document.getElementById('toggle-button-to-hide-info');
    toggleButtonHideInfo.style.pointerEvents = 'auto';
    toggleButtonHideInfo.innerText = 'cancel';

    questions.style.width = '0px';
    sidebar.scrollIntoView({ behavior: 'smooth' });
}

function toggleSidebarOff() {
    var mainbar = document.getElementById('mainbar');
    var sidebar = document.getElementById('sidebar');
    var questions = document.getElementById('mainbar-images');

    if(window.innerWidth < 600){
        sidebar.style.transition = '0s';
        mainbar.style.transition = '0s';
        questions.style.transition = '0s';
    }else{
        sidebar.style.transition = '1s';
        mainbar.style.transition = 'margin-right 1s';
        questions.style.transition = '1s';
    }

    sidebar.style.width = sidebar.style.width === '600px' ? '0px' : '600px';

    var toggleButtonShowInfo = document.getElementById('toggle-button-to-show-info');
    toggleButtonShowInfo.style.pointerEvents = 'auto';
    toggleButtonShowInfo.innerText = 'info';

    var toggleButtonHideInfo = document.getElementById('toggle-button-to-hide-info');
    toggleButtonHideInfo.style.pointerEvents = 'none';
    toggleButtonHideInfo.innerText = '';

    questions.style.width = '550px';
    mainbar.scrollIntoView({ behavior: 'smooth' });
}

function toggleToPourQuestion() {
    var buttonNext = document.getElementById("button-next-question");
    buttonNext.click();
}

