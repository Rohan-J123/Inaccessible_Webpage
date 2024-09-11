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
