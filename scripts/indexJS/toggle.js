function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    sidebar.style.width = sidebar.style.width === '600px' ? '0px' : '600px';

    var toggleButton = document.getElementById('toggle-button');
    toggleButton.innerText = toggleButton.innerText === 'cancel' ? 'info' : 'cancel';

    // var toggleImage = document.getElementById('toggle-image');
    // toggleImage.style.width = toggleImage.style.width === '45%' ? '0%' : '45%';
}