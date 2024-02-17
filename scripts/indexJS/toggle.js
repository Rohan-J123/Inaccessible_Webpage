function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    sidebar.style.width = sidebar.style.width === '600px' ? '0px' : '600px';

    var toggleButtonShowInfo = document.getElementById('toggle-button-to-show-info');
    toggleButtonShowInfo.innerText = toggleButtonShowInfo.innerText === 'info' ? '' : 'info';
    toggleButtonShowInfo.style.pointerEvents = toggleButtonShowInfo.style.pointerEvents === 'none' ? 'auto' : 'none';

    var toggleButtonHideInfo = document.getElementById('toggle-button-to-hide-info');
    toggleButtonHideInfo.innerText = toggleButtonHideInfo.innerText === 'cancel' ? '' : 'cancel';
    toggleButtonHideInfo.style.pointerEvents = toggleButtonHideInfo.style.pointerEvents === 'none' ? 'auto' : 'none';
}