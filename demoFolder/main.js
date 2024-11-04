document.addEventListener("DOMContentLoaded", function() {
    let metas = document.querySelectorAll('meta[http-equiv="refresh"]');
    metas.forEach(function(meta) {
        meta.parentNode.removeChild(meta);
    });
    window.stop();
    let originalSetTimeout = window.setTimeout;
    window.setTimeout = function(callback, delay) {
        if (delay > 0 && typeof callback === "function") {
            if (callback.toString().includes('location.href')) {
                console.log('Prevented a meta refresh from redirecting the page.');
                return;
            }
        }
        return originalSetTimeout(callback, delay);
    };
});


const allElements = document.querySelectorAll('*');

allElements.forEach(element => {
    element.onclick = null;
    element.replaceWith(element.cloneNode(true));
});

document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', event => {
        event.preventDefault();
    });
});

document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', event => {
        event.preventDefault();
    });
});