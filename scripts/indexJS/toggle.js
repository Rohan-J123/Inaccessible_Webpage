function toggleSidebarOn() {
    var mainbar = document.getElementById('mainbar');
    var sidebar = document.getElementById('sidebar');
    var mainbarImages = document.getElementById('mainbar-images');
    var questions = document.getElementById('carouselExampleIndicators');

    if(window.innerWidth < 1000){
        sidebar.style.transition = '0s';
        mainbar.style.transition = '0s';
        mainbarImages.style.transition = '0s';
        questions.style.transition = '0s';
    }else{
        sidebar.style.transition = '1s';
        mainbar.style.transition = 'margin-right 1s';
        mainbarImages.style.transition = '1s';
        questions.style.transition = '1s';
        sidebar.style.height = '86.5vh';
    }

    sidebar.style.width = sidebar.style.width === '600px' ? '0px' : '600px';

    document.getElementById('toggle-button-to-show-info').style.display="none";
    document.getElementById('toggle-button-to-show-info-start').style.display="none";
    document.getElementById('toggle-button-to-hide-info').style.display="block";

    questions.style.width = '100%';
    mainbarImages.style.flex = 0;
    sidebar.scrollIntoView({ behavior: 'smooth' });

    document.getElementById('mainbar-images').style.display = "none";
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

    document.getElementById('toggle-button-to-show-info').style.display="block";
    document.getElementById('toggle-button-to-show-info-start').style.display="block";
    document.getElementById('toggle-button-to-hide-info').style.display="none";

    questions.style.width = '1050px';
    mainbarImages.style.flex = 1;
    mainbar.scrollIntoView({ behavior: 'smooth' });

    document.getElementById('mainbar-images').style.display = "block";
}

toggleSidebarOff();
toggleSidebarOn();

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

