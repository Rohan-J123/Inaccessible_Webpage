function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    sidebar.style.width = sidebar.style.width === '35vw' ? '0vw' : '35vw';

    var toggleButton = document.getElementById('toggle-button');
    toggleButton.innerText = toggleButton.innerText === '>' ? '<' : '>';

    // var toggleImage = document.getElementById('toggle-image');
    // toggleImage.style.width = toggleImage.style.width === '45%' ? '0%' : '45%';
}