function toggleSidebarOn() {
    var mainbar = document.getElementById('mainbar');
    var sidebar = document.getElementById('sidebar');

    if(window.innerWidth < 600){
        sidebar.style.transition = '0s';
        mainbar.style.transition = '0s';
    }else{
        sidebar.style.transition = '1s';
        mainbar.style.transition = 'margin-right 1s';
    }

    sidebar.style.width = sidebar.style.width === '600px' ? '0px' : '600px';

    var toggleButtonShowInfo = document.getElementById('toggle-button-to-show-info');
    toggleButtonShowInfo.style.pointerEvents = 'none';
    toggleButtonShowInfo.innerText ='';

    var toggleButtonHideInfo = document.getElementById('toggle-button-to-hide-info');
    toggleButtonHideInfo.style.pointerEvents = 'auto';
    toggleButtonHideInfo.innerText = 'cancel';
}

function toggleSidebarOff() {
    var mainbar = document.getElementById('mainbar');
    var sidebar = document.getElementById('sidebar');

    if(window.innerWidth < 600){
        sidebar.style.transition = '0s';
        mainbar.style.transition = '0s';
    }else{
        sidebar.style.transition = '1s';
        mainbar.style.transition = 'margin-right 1s';
    }

    sidebar.style.width = sidebar.style.width === '600px' ? '0px' : '600px';

    var toggleButtonShowInfo = document.getElementById('toggle-button-to-show-info');
    toggleButtonShowInfo.style.pointerEvents = 'auto';
    toggleButtonShowInfo.innerText = 'info';

    var toggleButtonHideInfo = document.getElementById('toggle-button-to-hide-info');
    toggleButtonHideInfo.style.pointerEvents = 'none';
    toggleButtonHideInfo.innerText = '';
}